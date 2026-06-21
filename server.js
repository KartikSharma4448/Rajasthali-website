const express = require('express');
const path = require('path');
const destinations = require('./data/destinations');
const services = require('./data/services');

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = 'https://rajasthalitours.com';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* =========================================
   MAIN LANDING PAGE
========================================= */
app.get('/', (req, res) => {
  res.render('index');
});

/* =========================================
   TOUR DESTINATIONS — HUB
========================================= */
app.get('/tours', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('tours-hub', { destinations });
});

/* =========================================
   TOUR DESTINATIONS — INDIVIDUAL PAGES
========================================= */
app.get('/tours/:slug', (req, res) => {
  const dest = destinations.find(d => d.slug === req.params.slug);
  if (!dest) return res.status(404).send('Destination not found');

  const relatedDests = destinations
    .filter(d => d.slug !== dest.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  res.set('Cache-Control', 'public, max-age=86400');
  res.render('destination', { dest, relatedDests });
});

/* =========================================
   SERVICES — HUB
========================================= */
app.get('/services', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('services-hub', { services });
});

/* =========================================
   SERVICES — INDIVIDUAL PAGES
========================================= */
app.get('/services/:slug', (req, res) => {
  const svc = services.find(s => s.slug === req.params.slug);
  if (!svc) return res.status(404).send('Service not found');

  const relatedServices = services
    .filter(s => s.slug !== svc.slug)
    .slice(0, 4);

  res.set('Cache-Control', 'public, max-age=86400');
  res.render('service', { svc, relatedServices });
});

/* =========================================
   SITEMAP.XML — Dynamic
========================================= */
app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { loc: `${BASE_URL}/`, changefreq: 'weekly', priority: '1.0', lastmod: today },
    { loc: `${BASE_URL}/tours`, changefreq: 'weekly', priority: '0.9', lastmod: today },
    { loc: `${BASE_URL}/services`, changefreq: 'weekly', priority: '0.9', lastmod: today },
  ];

  const destUrls = destinations.map(d => ({
    loc: `${BASE_URL}/tours/${d.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: today
  }));

  const serviceUrls = services.map(s => ({
    loc: `${BASE_URL}/services/${s.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: today
  }));

  const allUrls = [...staticUrls, ...destUrls, ...serviceUrls];

  const xmlItems = allUrls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  res.set('Content-Type', 'application/xml');
  res.set('Cache-Control', 'public, max-age=3600');
  res.send(xml);
});

/* =========================================
   START SERVER
========================================= */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`==================================================`);
  console.log(`  Rajasthali Tours Web Application is Running!   `);
  console.log(`  Local URL: http://localhost:${PORT}             `);
  console.log(`  SEO Pages: /tours, /services, /sitemap.xml     `);
  console.log(`==================================================`);
});
