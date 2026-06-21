const fs = require('fs');
const http = require('http');
const path = require('path');
const app = require('../server');
const { site } = require('../lib/seo');

const root = path.join(__dirname, '..');
const coreRoutes = [
  '/',
  '/tours',
  '/services',
  '/fleet',
  '/tour-packages',
  '/taxi-from-jaipur'
];

const staticFileRoutes = [
  {
    route: '/google4eed84e29fda3a1e.html',
    expectedText: 'google-site-verification: google4eed84e29fda3a1e.html'
  }
];

async function main() {
  const server = http.createServer(app);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  try {
    for (const route of coreRoutes) {
      const response = await fetch(`${base}${route}`);
      assert(response.ok, `${route} returned ${response.status}`);
      const html = await response.text();
      checkHtml(route, html);
    }

    await checkRedirect(base, '/outstation-cab-jaipur');
    await checkRedirect(base, '/car-rental-jaipur');
    for (const staticFile of staticFileRoutes) {
      await checkStaticFile(base, staticFile);
    }
    await checkRobots(base);
    await checkSitemap(base);
    checkImageManifest();

    console.log('Site check passed.');
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
}

function checkHtml(route, html) {
  assert(countMatches(html, /<title>[^<]+<\/title>/g) === 1, `${route} must have exactly one title`);
  assert(countMatches(html, /<link rel="canonical"/g) === 1, `${route} must have exactly one canonical`);
  assert(html.includes('max-image-preview:large'), `${route} missing robots max-image-preview`);
  assert(!html.includes('<% if (false)'), `${route} leaked disabled template code`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert(canonical, `${route} missing canonical href`);
  assert(canonical[1].startsWith(site.url), `${route} canonical must use ${site.url}`);

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert(jsonLdBlocks.length > 0, `${route} missing JSON-LD`);
  for (const [, block] of jsonLdBlocks) {
    JSON.parse(block);
  }

  const blankLinks = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)];
  for (const [tag] of blankLinks) {
    assert(/rel="[^"]*\bnoopener\b[^"]*\bnoreferrer\b[^"]*"/.test(tag), `${route} has target blank without noopener noreferrer`);
  }

  const localAssets = collectLocalAssets(html);
  for (const asset of localAssets) {
    if (!isStaticAsset(asset)) continue;
    const filePath = path.join(root, 'public', asset.replace(/^\//, ''));
    assert(fs.existsSync(filePath), `${route} references missing asset ${asset}`);
  }
}

function collectLocalAssets(html) {
  const assets = new Set();

  for (const [, asset] of html.matchAll(/\b(?:src|href)="(\/(?!\/)[^"#?]+)(?:[?#][^"]*)?"/g)) {
    assets.add(asset);
  }

  for (const [, srcset] of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const item of srcset.split(',')) {
      const asset = item.trim().split(/\s+/)[0];
      if (asset && asset.startsWith('/') && !asset.startsWith('//')) {
        assets.add(asset.split('?')[0].split('#')[0]);
      }
    }
  }

  return assets;
}

function checkImageManifest() {
  const manifestPath = path.join(root, 'data', 'imageManifest.json');
  assert(fs.existsSync(manifestPath), 'image manifest missing');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  for (const [source, entry] of Object.entries(manifest)) {
    assertAssetExists(source, `manifest source ${source}`);
    assert(entry.width > 0 && entry.height > 0, `manifest dimensions missing for ${source}`);

    for (const variant of entry.variants || []) {
      assertAssetExists(variant.path, `manifest variant ${variant.path}`);
      assert(variant.width > 0, `manifest variant width missing for ${variant.path}`);
    }
  }
}

function assertAssetExists(asset, label) {
  const filePath = path.join(root, 'public', asset.replace(/^\//, ''));
  assert(fs.existsSync(filePath), `${label} is missing from public`);
}

function isStaticAsset(asset) {
  return /\.(?:css|js|png|jpe?g|webp|svg|ico|gif|avif)$/i.test(asset);
}

async function checkRedirect(base, route) {
  const response = await fetch(`${base}${route}`, { redirect: 'manual' });
  assert(response.status === 301, `${route} should redirect with 301`);
  assert(response.headers.get('location') === '/taxi-from-jaipur', `${route} should redirect to /taxi-from-jaipur`);
}

async function checkStaticFile(base, staticFile) {
  const response = await fetch(`${base}${staticFile.route}`);
  assert(response.ok, `${staticFile.route} returned ${response.status}`);
  const text = (await response.text()).trim();
  assert(text === staticFile.expectedText, `${staticFile.route} content mismatch`);
}

async function checkRobots(base) {
  const response = await fetch(`${base}/robots.txt`);
  assert(response.ok, 'robots.txt failed');
  const text = await response.text();
  assert(text.includes(`Sitemap: ${site.url}/sitemap.xml`), 'robots.txt missing sitemap');
  assert(!text.includes('sitemap-news.xml'), 'robots.txt should not reference sitemap-news.xml');
}

async function checkSitemap(base) {
  const response = await fetch(`${base}/sitemap.xml`);
  assert(response.ok, 'sitemap.xml failed');
  const text = await response.text();
  assert(text.includes('<urlset'), 'sitemap missing urlset');
  assert(text.includes(`${site.url}/taxi-from-jaipur`), 'sitemap missing taxi page');
  assert(!text.includes('/outstation-cab-jaipur'), 'sitemap should not include redirected outstation page');
  assert(!text.includes('/car-rental-jaipur'), 'sitemap should not include redirected car rental page');
}

function countMatches(text, regex) {
  return (text.match(regex) || []).length;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
