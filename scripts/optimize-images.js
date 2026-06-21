const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const sourceDir = path.join(root, 'public', 'rajasthalitours_images');
const outputDir = path.join(root, 'public', 'optimized', 'rajasthalitours_images');
const manifestPath = path.join(root, 'data', 'imageManifest.json');
const widths = [320, 480, 768, 1024, 1400];
const extensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(sourceDir);
  const manifest = {};

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!extensions.has(ext)) continue;

    const inputPath = path.join(sourceDir, file);
    const image = sharp(inputPath, { failOn: 'none' });
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) continue;

    const baseName = path.basename(file, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const targetWidths = widths
      .filter(width => width < metadata.width)
      .concat(metadata.width)
      .filter((width, index, list) => list.indexOf(width) === index);

    const variants = [];
    for (const width of targetWidths) {
      const outputName = `${baseName}-${width}.webp`;
      const outputPath = path.join(outputDir, outputName);

      await sharp(inputPath, { failOn: 'none' })
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: width >= 1024 ? 78 : 74, effort: 5 })
        .toFile(outputPath);

      variants.push({
        width,
        path: `/optimized/rajasthalitours_images/${outputName}`
      });
    }

    manifest[`/rajasthalitours_images/${file}`] = {
      width: metadata.width,
      height: metadata.height,
      variants
    };
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Optimized ${Object.keys(manifest).length} images.`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
