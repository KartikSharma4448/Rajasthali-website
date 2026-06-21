const express = require('express');
const path = require('path');
const destinations = require('./data/destinations');
const services = require('./data/services');
const tourPackages = require('./data/tourPackages');
const { vehicles, actionPhotos } = require('./data/fleet');
const {
  site,
  absoluteUrl,
  xmlEscape,
  jsonLd,
  pageSeo,
  businessSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  serviceSchema,
  destinationSchema,
  tourPackageSchema,
  offerCatalogSchema,
  imageInfo,
  relatedByPosition
} = require('./lib/seo');

const app = express();
const PORT = process.env.PORT || 5000;
// Fixed lastmod — only update when content actually changes
const LASTMOD = process.env.SITE_LASTMOD || '2025-06-21';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.locals.site = site;
app.locals.absoluteUrl = absoluteUrl;
app.locals.jsonLd = jsonLd;
app.locals.imageInfo = imageInfo;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.set('Cache-Control', 'public, max-age=3600');
  res.send(`User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /*.json$

Sitemap: ${absoluteUrl('/sitemap.xml')}
`);
});

app.get('/sitemap.xml', (req, res) => {
  const urls = getSitemapUrls();

  const xmlItems = urls.map(url => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>
    <lastmod>${xmlEscape(url.lastmod)}</lastmod>
    <changefreq>${xmlEscape(url.changefreq)}</changefreq>
    <priority>${xmlEscape(url.priority)}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  res.type('application/xml');
  res.set('Cache-Control', 'public, max-age=3600');
  res.send(xml);
});

app.use(express.static(path.join(__dirname, 'public'), {
  etag: true,
  maxAge: '1h',
  setHeaders(res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (['.css', '.js', '.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico'].includes(ext)) {
      res.set('Cache-Control', 'public, max-age=604800');
    }
    if (filePath.includes(`${path.sep}optimized${path.sep}`)) {
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

/* =========================================
   MAIN LANDING PAGE
========================================= */
app.get('/', (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600');
  res.render('index', { seo: homeSeo() });
});

/* =========================================
   TOUR DESTINATIONS - HUB
========================================= */
app.get('/tours', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('tours-hub', { destinations, tourPackages, seo: toursHubSeo() });
});

/* =========================================
   TOUR DESTINATIONS - INDIVIDUAL PAGES
========================================= */
app.get('/tours/:slug', (req, res, next) => {
  const dest = destinations.find(d => d.slug === req.params.slug);
  if (!dest) return next();

  const relatedDests = relatedByPosition(destinations, dest.slug, 4);

  res.set('Cache-Control', 'public, max-age=86400');
  res.render('destination', { dest, relatedDests, seo: destinationSeo(dest) });
});

/* =========================================
   FLEET - GALLERY / ALL VEHICLES PAGE
========================================= */
app.get('/fleet', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('fleet', { vehicles, actionPhotos, destinations, seo: fleetSeo() });
});

/* =========================================
   SERVICES - HUB
========================================= */
app.get('/services', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('services-hub', { services, seo: servicesHubSeo() });
});

/* =========================================
   SERVICES - INDIVIDUAL PAGES
========================================= */
app.get('/services/:slug', (req, res, next) => {
  const svc = services.find(s => s.slug === req.params.slug);
  if (!svc) return next();

  const relatedServices = relatedByPosition(services, svc.slug, 4);

  res.set('Cache-Control', 'public, max-age=86400');
  res.render('service', { svc, relatedServices, seo: servicePageSeo(svc) });
});

/* =========================================
   TOUR PACKAGES - HUB
========================================= */
app.get('/tour-packages', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('tour-packages-hub', { tourPackages, destinations, seo: tourPackagesHubSeo() });
});

/* =========================================
   TOUR PACKAGES - INDIVIDUAL
========================================= */
app.get('/tour-packages/:slug', (req, res, next) => {
  const pkg = tourPackages.find(p => p.slug === req.params.slug);
  if (!pkg) return next();

  const relatedPkgs = relatedByPosition(tourPackages, pkg.slug, 3);

  res.set('Cache-Control', 'public, max-age=86400');
  res.render('tour-package', { pkg, relatedPkgs, seo: tourPackagePageSeo(pkg) });
});

/* =========================================
   SEO LANDING PAGE - HIGH TRAFFIC KEYWORD
========================================= */
app.get('/taxi-from-jaipur', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('taxi-jaipur', { destinations, seo: taxiSeo() });
});

app.get('/outstation-cab-jaipur', (req, res) => {
  res.redirect(301, '/taxi-from-jaipur');
});

app.get('/car-rental-jaipur', (req, res) => {
  res.redirect(301, '/taxi-from-jaipur');
});

/* =========================================
   HIGH-VALUE KEYWORD LANDING PAGES
   (real pages instead of redirects)
========================================= */
app.get('/jaipur-to-agra-taxi', (req, res) => {
  const dest = destinations.find(d => d.slug === 'agra');
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('route-landing', {
    dest,
    seo: pageSeo({
      path: '/jaipur-to-agra-taxi',
      title: 'Jaipur to Agra Taxi | Cab Booking, Fare & Golden Triangle Tour',
      description: 'Book Jaipur to Agra taxi online. 235 km via Yamuna Expressway — 3.5 hrs. Sedan from ₹3,200, Innova Crysta ₹4,800. Govt-approved, IATA-certified. Golden Triangle tours.',
      keywords: ['Jaipur to Agra taxi', 'Jaipur Agra cab', 'Jaipur to Agra cab fare', 'taxi Jaipur to Agra price', 'Jaipur Agra Innova'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Taxi from Jaipur',path:'/taxi-from-jaipur'},{name:'Jaipur to Agra Taxi',path:'/jaipur-to-agra-taxi'}]),
        faqSchema(dest ? dest.faqs : [])
      ]
    })
  });
});

app.get('/jaipur-to-udaipur-taxi', (req, res) => {
  const dest = destinations.find(d => d.slug === 'udaipur');
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('route-landing', {
    dest,
    seo: pageSeo({
      path: '/jaipur-to-udaipur-taxi',
      title: 'Jaipur to Udaipur Taxi | Cab Fare, Route & Tour Package',
      description: 'Book Jaipur to Udaipur taxi. 395 km via NH48 — 5–6 hrs. Sedan from ₹4,800, Innova Crysta ₹6,500. Govt-approved. City of Lakes, Lake Palace, Nathdwara stopover.',
      keywords: ['Jaipur to Udaipur taxi', 'Jaipur Udaipur cab', 'Jaipur to Udaipur cab fare', 'Jaipur Udaipur Innova Crysta', 'Udaipur taxi booking'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Taxi from Jaipur',path:'/taxi-from-jaipur'},{name:'Jaipur to Udaipur Taxi',path:'/jaipur-to-udaipur-taxi'}]),
        faqSchema(dest ? dest.faqs : [])
      ]
    })
  });
});

app.get('/jaipur-to-delhi-taxi', (req, res) => {
  const dest = destinations.find(d => d.slug === 'delhi');
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('route-landing', {
    dest,
    seo: pageSeo({
      path: '/jaipur-to-delhi-taxi',
      title: 'Jaipur to Delhi Taxi | Cab Booking, Fare & Airport Drop',
      description: 'Book Jaipur to Delhi taxi. 280 km via NH48 Expressway — 4–5 hrs. Sedan from ₹3,500, Innova Crysta ₹5,000. IGI airport drops, 24/7. Govt-approved.',
      keywords: ['Jaipur to Delhi taxi', 'Jaipur Delhi cab', 'Jaipur to Delhi cab fare', 'Jaipur Delhi airport drop', 'Delhi taxi from Jaipur'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Taxi from Jaipur',path:'/taxi-from-jaipur'},{name:'Jaipur to Delhi Taxi',path:'/jaipur-to-delhi-taxi'}]),
        faqSchema(dest ? dest.faqs : [])
      ]
    })
  });
});

app.get('/jaipur-to-jodhpur-taxi', (req, res) => {
  const dest = destinations.find(d => d.slug === 'jodhpur');
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('route-landing', {
    dest,
    seo: pageSeo({
      path: '/jaipur-to-jodhpur-taxi',
      title: 'Jaipur to Jodhpur Taxi | Cab Fare, Blue City Tour & Route',
      description: 'Book Jaipur to Jodhpur taxi. 335 km via NH62 — 4.5–5.5 hrs. Sedan from ₹4,200, Innova Crysta ₹6,000. Mehrangarh Fort, Blue City. Govt-approved.',
      keywords: ['Jaipur to Jodhpur taxi', 'Jaipur Jodhpur cab', 'Jaipur to Jodhpur cab fare', 'Jodhpur taxi from Jaipur'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Taxi from Jaipur',path:'/taxi-from-jaipur'},{name:'Jaipur to Jodhpur Taxi',path:'/jaipur-to-jodhpur-taxi'}]),
        faqSchema(dest ? dest.faqs : [])
      ]
    })
  });
});

app.get('/jaipur-to-jaisalmer-taxi', (req, res) => {
  const dest = destinations.find(d => d.slug === 'jaisalmer');
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('route-landing', {
    dest,
    seo: pageSeo({
      path: '/jaipur-to-jaisalmer-taxi',
      title: 'Jaipur to Jaisalmer Taxi | Cab Fare, Desert Safari & Route',
      description: 'Book Jaipur to Jaisalmer taxi. 565 km via Jodhpur — 7–8 hrs. Sedan from ₹6,500, Innova Crysta ₹9,000. Desert safari, Sam Dunes. Govt-approved.',
      keywords: ['Jaipur to Jaisalmer taxi', 'Jaipur Jaisalmer cab', 'Jaisalmer taxi fare from Jaipur', 'Jaisalmer cab booking'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Taxi from Jaipur',path:'/taxi-from-jaipur'},{name:'Jaipur to Jaisalmer Taxi',path:'/jaipur-to-jaisalmer-taxi'}]),
        faqSchema(dest ? dest.faqs : [])
      ]
    })
  });
});

app.get('/luxury-car-rental-jaipur', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('fleet', {
    vehicles, actionPhotos, destinations,
    seo: pageSeo({
      path: '/luxury-car-rental-jaipur',
      title: 'Luxury Car Rental in Jaipur | Mercedes, Fortuner, Vellfire | Rajasthali Tours',
      description: 'Hire luxury cars in Jaipur — Mercedes-Benz GLS, Toyota Vellfire, Fortuner, Innova Crysta with professional chauffeurs. Govt-approved. Available 24/7. Call +91 97853 07799.',
      keywords: ['luxury car rental Jaipur', 'Mercedes hire Jaipur', 'Toyota Fortuner rental Jaipur', 'Vellfire rental Jaipur', 'premium car hire Jaipur'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [breadcrumbSchema([{name:'Home',path:'/'},{name:'Luxury Car Rental Jaipur',path:'/luxury-car-rental-jaipur'}])]
    })
  });
});

app.get('/tempo-traveller-jaipur', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('fleet', {
    vehicles, actionPhotos, destinations,
    seo: pageSeo({
      path: '/tempo-traveller-jaipur',
      title: 'Tempo Traveller Hire in Jaipur | 12 & 17 Seater | Rajasthali Tours',
      description: 'Book Tempo Traveller and Force Urbania in Jaipur. 12-seater and 17-seater AC vans for group tours, pilgrimages, weddings and outstation trips. Govt-approved. Call +91 97853 07799.',
      keywords: ['Tempo Traveller hire Jaipur', 'Force Urbania rental Jaipur', '17 seater van Jaipur', 'group taxi Jaipur', 'mini bus hire Jaipur'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [breadcrumbSchema([{name:'Home',path:'/'},{name:'Tempo Traveller Jaipur',path:'/tempo-traveller-jaipur'}])]
    })
  });
});

app.get('/wedding-cars-jaipur', (req, res) => {
  const svc = services.find(s => s.slug === 'wedding-transport');
  const relatedServices = relatedByPosition(services, 'wedding-transport', 4);
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('service', {
    svc, relatedServices,
    seo: pageSeo({
      path: '/wedding-cars-jaipur',
      title: 'Wedding Cars & Baraat Vehicles in Jaipur | Rajasthali Tours',
      description: 'Hire decorated wedding cars, baraat convoy vehicles, and luxury coaches for weddings in Jaipur. Mercedes, Vellfire, vintage cars. 200+ vehicles. 15+ years experience. Book now.',
      keywords: ['wedding cars Jaipur', 'baraat cars Jaipur', 'wedding transport Jaipur', 'decorated car hire Jaipur', 'wedding cab Jaipur'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Wedding Cars Jaipur',path:'/wedding-cars-jaipur'}]),
        serviceSchema(svc),
        faqSchema(svc.faqs)
      ]
    })
  });
});

app.get('/corporate-cab-jaipur', (req, res) => {
  const svc = services.find(s => s.slug === 'corporate-travel');
  const relatedServices = relatedByPosition(services, 'corporate-travel', 4);
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('service', {
    svc, relatedServices,
    seo: pageSeo({
      path: '/corporate-cab-jaipur',
      title: 'Corporate Cab & Executive Transport in Jaipur | Rajasthali Tours',
      description: 'Premium corporate cab service in Jaipur. Executive sedans, SUVs, coaches for airport transfers, conferences and employee transport. GST invoices. IATA-certified. Call +91 97853 07799.',
      keywords: ['corporate cab Jaipur', 'executive car hire Jaipur', 'corporate taxi Jaipur', 'business travel Jaipur', 'employee transport Jaipur'],
      includeFonts: true,
      styles: ['/css/seo-pages.css'],
      schemas: [
        breadcrumbSchema([{name:'Home',path:'/'},{name:'Corporate Cab Jaipur',path:'/corporate-cab-jaipur'}]),
        serviceSchema(svc),
        faqSchema(svc.faqs)
      ]
    })
  });
});

/* =========================================
   PRIVACY POLICY & TERMS OF SERVICE
========================================= */
app.get('/privacy-policy', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('legal', {
    page: 'privacy',
    seo: pageSeo({
      path: '/privacy-policy',
      title: 'Privacy Policy | Rajasthali Tours & Travels Pvt. Ltd.',
      description: 'Privacy Policy for Rajasthali Tours & Travels Pvt. Ltd. Learn how we collect, use and protect your personal data when you use our travel and transportation services.',
      robots: 'noindex, follow',
      includeFonts: false,
      styles: ['/css/seo-pages.css']
    })
  });
});

app.get('/terms-of-service', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  res.render('legal', {
    page: 'terms',
    seo: pageSeo({
      path: '/terms-of-service',
      title: 'Terms of Service | Rajasthali Tours & Travels Pvt. Ltd.',
      description: 'Terms and Conditions for using the services of Rajasthali Tours & Travels Pvt. Ltd., Jaipur.',
      robots: 'noindex, follow',
      includeFonts: false,
      styles: ['/css/seo-pages.css']
    })
  });
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  console.error(err);
  const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : err.stack;
  res.status(500).send(message);
});

function homeSeo() {
  return pageSeo({
    path: '/',
    title: 'Rajasthali Tours & Travels | Premier Pan-India Travel Company | IATA Certified Tour Operator Since 2010',
    description: "Rajasthali Tours & Travels Pvt. Ltd. — Established 2010, IATA-certified, Govt. of India approved premier transport & travel company. Serving Fortune 500 corporates, international tourists, NRI families, and destination weddings across India and globally. 500+ luxury vehicles, professional chauffeurs, 15+ years excellence. Services: Corporate travel India-wide, luxury wedding transport, MICE events, airport transfers all major cities, coach rentals nationwide, curated tour packages — Rajasthan heritage, Golden Triangle, Char Dham Yatra, Kerala, Goa, Himalayas, Kashmir, Northeast, and international outbound tours.",
    keywords: [
      // Brand & Established Authority
      'Rajasthali Tours', 'Rajasthali Tours and Travels', 'Rajasthali Tours India',
      'Rajasthali Tours Jaipur', 'established travel company 2010',
      
      // Pan-India Travel Company - Core
      'premier travel company India', 'luxury travel company India', 'best tour operator India',
      'pan India travel company', 'all India tour operator', 'nationwide travel services India',
      'India travel company', 'tour operator India', 'transport company India',
      'Indian travel agency', 'India tour and travels', 'travel agency all over India',
      
      // IATA & Government Certifications (Trust Signals)
      'IATA certified travel company India', 'IATA approved tour operator',
      'government approved tour operator India', 'Ministry of Tourism approved India',
      'government certified travel company', 'licensed tour operator India',
      'authorized travel agent India', 'registered travel company India',
      
      // Corporate Travel - Pan-India
      'corporate travel management India', 'corporate cab services India',
      'business travel company India', 'corporate transport India nationwide',
      'Fortune 500 travel partner India', 'employee transport India',
      'corporate car rental India', 'executive transport services India',
      
      // International & Inbound Tourism
      'inbound tour operator India', 'India tour company for foreigners',
      'international tour operator India', 'India tours for international tourists',
      'India luxury travel international clients', 'NRI travel services India',
      'foreign tourist travel India', 'India travel packages international',
      'inbound tourism India', 'India DMC destination management',
      
      // Wedding Transport - All India
      'wedding transport India', 'destination wedding transport India',
      'wedding car rental India', 'baraat transport India', 'shaadi car hire India',
      'luxury wedding vehicles India', 'wedding coach India', 'wedding car decoration India',
      
      // MICE & Events - Nationwide
      'MICE transport India', 'conference transport India', 'event transportation India',
      'corporate event transport', 'meeting transport services India',
      'exhibition transport India', 'incentive travel India',
      
      // Rajasthan Tours (Heritage Specialty)
      'Rajasthan tour operator', 'Rajasthan tour packages', 'Rajasthan heritage tours',
      'Jaipur tour operator', 'Rajasthan luxury tours', 'Rajasthan travel company',
      'Jaipur Udaipur Jodhpur tour', 'Thar Desert tours', 'palace tours Rajasthan',
      
      // Golden Triangle & North India
      'Golden Triangle tour India', 'Delhi Agra Jaipur tour', 'Golden Triangle package',
      'North India tours', 'Delhi tour operator', 'Agra Taj Mahal tour',
      
      // Religious & Pilgrimage Tours - All India
      'Char Dham Yatra tour', 'pilgrimage tours India', 'religious travel India',
      'Varanasi tour package', 'Haridwar Rishikesh tour', 'Amritsar Golden Temple tour',
      'Tirupati tour package', 'Hindu pilgrimage tours', 'spiritual tours India',
      
      // Popular Destinations - Pan-India Coverage
      'Kerala tour packages', 'Goa tour operator', 'Kashmir tour packages',
      'Himachal tour operator', 'Ladakh tours', 'Northeast India tours',
      'Andaman tours', 'Uttarakhand tours', 'hill station tours India',
      'beach tours India', 'backwater tours Kerala', 'houseboat Kerala',
      
      // Vehicle Rental - All India
      'luxury car rental India', 'coach rental India', 'bus rental India',
      'tempo traveller India', 'SUV rental India', 'Mercedes rental India',
      'car hire India with driver', 'chauffeur driven cars India',
      
      // Airport Transfers - Major Cities
      'airport transfer India', 'Delhi airport taxi', 'Mumbai airport cab',
      'Bangalore airport transfer', 'Chennai airport taxi', 'Jaipur airport pickup',
      'Hyderabad airport cab', 'Kolkata airport transfer',
      
      // City-wise Services
      'taxi service Jaipur', 'car rental Delhi', 'tour operator Mumbai',
      'cab service Bangalore', 'travel company Udaipur', 'car hire Agra',
      
      // International Outbound
      'international tour packages India', 'outbound tour operator India',
      'foreign tour packages', 'overseas travel company India',
      'Europe tour from India', 'Dubai tour packages', 'Thailand tours India',
      
      // Service Quality & Features
      '24/7 travel services India', 'luxury fleet India', 'professional chauffeurs India',
      'reliable tour operator', 'experienced travel company', 'trusted travel partner India',
      'customized tour packages India', 'group tours India', 'family tours India',
      
      // Long-tail Local Keywords
      'best travel agency in India', 'top tour operators India',
      'luxury travel services India', 'premium transport company India',
      'heritage tours India', 'cultural tours India', 'adventure tours India'
    ],
    ogTitle: 'Rajasthali Tours & Travels | Premier India Travel Company | IATA Certified Since 2010',
    ogDescription: "India's trusted IATA-certified travel company with 15+ years excellence. Pan-India services: Corporate travel nationwide, destination weddings, MICE events, airport transfers all major cities, curated tours — Rajasthan heritage, Golden Triangle, Char Dham, Kerala, Goa, Himalayas, Kashmir. 500+ luxury vehicles. International clients welcome.",
    imageAlt: 'Rajasthali Tours — Premier India luxury travel fleet serving corporate, wedding and tour clients nationwide',
    preloadImage: '/rajasthalitours_images/hero_rajasthan.png',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${site.url}/tours/{search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      businessSchema(),
      offerCatalogSchema('Pan-India Travel Services', services.map(service => ({
        name: service.name,
        description: service.metaDescription,
        path: `/services/${service.slug}`
      }))),
      faqSchema([
        { q: 'Is Rajasthali Tours a government approved and certified company?', a: 'Yes. Rajasthali Tours & Travels Pvt. Ltd. is approved by the Ministry of Tourism, Government of India, and is IATA-certified, operating since 2010 with 15+ years of excellence in the travel industry.' },
        { q: 'What areas does Rajasthali Tours serve?', a: 'We provide pan-India travel services covering all major cities and tourist destinations across India including Rajasthan, Delhi, Agra, Uttarakhand, Himachal Pradesh, Kerala, Goa, Kashmir, Northeast, and more. We also serve international clients and NRI families globally.' },
        { q: 'What services does Rajasthali Tours offer?', a: 'We offer comprehensive travel solutions: Corporate travel management India-wide, luxury wedding transport, airport transfers in all major cities, coach and bus rentals nationwide, MICE event transport, and curated tour packages including Rajasthan heritage circuits, Golden Triangle, Char Dham Yatra, Kerala backwaters, Himalayan tours, and international outbound packages.' },
        { q: 'Does Rajasthali Tours serve international clients?', a: 'Yes, we specialize in inbound tourism and serve international tourists, NRI families, and corporate clients globally. We accept international payments (USD, EUR, GBP) and provide multilingual support for foreign visitors exploring India.' },
        { q: 'How do I book travel services with Rajasthali Tours?', a: 'Call or WhatsApp +91 97853 07799, or email reservation@rajasthalitours.com. We confirm bookings within 2 hours with detailed itineraries and transparent pricing. 24/7 support available for all bookings across India.' }
      ])
    ]
  });
}

function toursHubSeo() {
  return pageSeo({
    path: '/tours',
    title: 'Tour Destinations from Jaipur | Rajasthan & All India Tours | Rajasthali Tours',
    description: 'Book taxi or tour travel from Jaipur to 30+ destinations — Udaipur, Jodhpur, Jaisalmer, Agra, Delhi, Haridwar, Shimla, Manali, Amritsar, Varanasi and more with a govt-approved, IATA-certified operator.',
    keywords: ['tour destinations from Jaipur', 'Jaipur taxi all destinations', 'Rajasthan tour packages', 'India tour from Jaipur', 'Jaipur to Udaipur taxi', 'Jaipur to Agra taxi', 'Jaipur to Jodhpur cab', 'Rajasthan sightseeing'],
    ogTitle: 'Tour Destinations from Jaipur | Rajasthali Tours',
    ogDescription: 'Explore 30+ tour destinations from Jaipur with govt-approved Rajasthali Tours. Rajasthan circuits, Himalayan pilgrimages, and all-India routes.',
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tour Destinations', path: '/tours' }]),
      itemListSchema('Tour Destinations from Jaipur', destinations.map(destination => ({
        name: destination.name,
        path: `/tours/${destination.slug}`
      }))),
      businessSchema()
    ]
  });
}

function destinationSeo(dest) {
  return pageSeo({
    path: `/tours/${dest.slug}`,
    title: dest.metaTitle,
    description: dest.metaDescription,
    keywords: [
      dest.heroKeyword,
      `Jaipur to ${dest.name} cab`,
      `Jaipur to ${dest.name} taxi`,
      `${dest.name} tour package from Jaipur`,
      `${dest.name} travel`,
      `Jaipur ${dest.name} car hire`,
      'Rajasthali Tours'
    ],
    ogTitle: `${dest.heroKeyword} | Rajasthali Tours`,
    ogDescription: dest.metaDescription,
    imageAlt: `Taxi and tour to ${dest.name} from Jaipur — Rajasthali Tours`,
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Tour Destinations', path: '/tours' },
        { name: dest.name, path: `/tours/${dest.slug}` }
      ]),
      destinationSchema(dest),
      faqSchema(dest.faqs),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Jaipur to ${dest.name} Taxi & Tour Service`,
        description: dest.metaDescription,
        url: absoluteUrl(`/tours/${dest.slug}`),
        provider: businessSchema(),
        areaServed: [
          { '@type': 'City', name: 'Jaipur' },
          { '@type': 'City', name: dest.name }
        ],
        serviceType: 'Taxi and Tour Service'
      }
    ]
  });
}

function fleetSeo() {
  return pageSeo({
    path: '/fleet',
    title: 'Luxury Fleet — Cars, SUVs, Vans & Coaches in Jaipur | Rajasthali Tours',
    description: 'View the Rajasthali Tours premium fleet: Mercedes-Benz GLS, Toyota Vellfire, Fortuner, Innova Crysta, Force Urbania, and luxury AC coaches. Hire for tours, weddings, corporate travel, and airport transfers in Rajasthan.',
    keywords: ['luxury car rental Jaipur', 'Toyota Innova Crysta Jaipur', 'Tempo Traveller Jaipur', 'luxury coach hire Rajasthan', 'Force Urbania rental Jaipur', 'wedding cars Jaipur', 'Mercedes rental Jaipur', 'SUV hire Jaipur', 'AC coach rental Rajasthan'],
    ogTitle: 'Premium Vehicle Fleet for Hire in Jaipur | Rajasthali Tours',
    ogDescription: 'Hire from 500+ premium vehicles — Mercedes, Vellfire, Fortuner, Innova Crysta, Force Urbania and luxury AC coaches for tours, weddings and corporate travel in Rajasthan.',
    image: '/rajasthalitours_images/vehicles_fleet.jpeg',
    imageAlt: 'Rajasthali Tours luxury vehicle fleet lined up in Jaipur',
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Our Fleet', path: '/fleet' }]),
      itemListSchema('Rajasthali Tours Vehicle Fleet', vehicles.map(vehicle => ({
        name: vehicle.name,
        path: '/fleet'
      }))),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vehicle Rental & Chauffeur Service in Jaipur',
        description: 'Premium vehicle hire with professional chauffeurs in Jaipur, Rajasthan. Cars, SUVs, vans and coaches available for corporate travel, weddings, airport transfers, and Rajasthan tours.',
        provider: businessSchema(),
        areaServed: { '@type': 'State', name: 'Rajasthan' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Vehicle Rental Fleet',
          itemListElement: vehicles.map((vehicle, i) => ({
            '@type': 'Offer',
            position: i + 1,
            name: vehicle.name,
            description: vehicle.description,
            url: absoluteUrl('/fleet')
          }))
        }
      }
    ]
  });
}

function servicesHubSeo() {
  return pageSeo({
    path: '/services',
    title: 'Travel Services in Jaipur, Rajasthan | Corporate, Wedding, MICE & Tours | Rajasthali Tours',
    description: 'Premium travel services in Jaipur by Rajasthali Tours: corporate travel, wedding transport, airport transfers, coach rental, MICE events and tour packages with 500+ vehicles. Govt-approved, IATA-certified since 2010.',
    keywords: ['travel services Jaipur', 'corporate cab Jaipur', 'wedding transport Rajasthan', 'airport transfer Jaipur', 'coach rental Jaipur', 'MICE transport Rajasthan', 'tour packages Jaipur', 'travel company Jaipur'],
    ogTitle: 'Travel Services Jaipur | Rajasthali Tours & Travels',
    ogDescription: 'Corporate travel, wedding transport, MICE events, airport transfers and tour packages in Jaipur. 500+ vehicles, 15+ years experience, govt-approved.',
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
      itemListSchema('Travel Services in Jaipur', services.map(service => ({
        name: service.name,
        path: `/services/${service.slug}`
      }))),
      businessSchema(),
      offerCatalogSchema('Travel Services', services.map(service => ({
        name: service.name,
        description: service.metaDescription,
        path: `/services/${service.slug}`
      })))
    ]
  });
}

function servicePageSeo(svc) {
  return pageSeo({
    path: `/services/${svc.slug}`,
    title: svc.metaTitle,
    description: svc.metaDescription,
    keywords: [
      `${svc.name} Jaipur`,
      `${svc.name} Rajasthan`,
      `${svc.name.toLowerCase()} Jaipur`,
      `Rajasthali Tours ${svc.name.toLowerCase()}`,
      `best ${svc.name.toLowerCase()} Jaipur`,
      'travel company Jaipur'
    ],
    ogTitle: `${svc.name} in Jaipur | Rajasthali Tours`,
    ogDescription: svc.metaDescription,
    imageAlt: `${svc.name} by Rajasthali Tours, Jaipur`,
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: svc.name, path: `/services/${svc.slug}` }
      ]),
      serviceSchema(svc),
      faqSchema(svc.faqs)
    ]
  });
}

function tourPackagesHubSeo() {
  return pageSeo({
    path: '/tour-packages',
    title: 'Tour Packages from Jaipur | Golden Triangle, Rajasthan & Spiritual Tours | Rajasthali Tours',
    description: 'Explore curated tour packages from Jaipur: Golden Triangle, Royal Rajasthan Circuit, Char Dham Yatra, Desert Safari and more. Govt-approved, IATA-certified operator with 15+ years experience. Fixed pricing, luxury vehicles.',
    keywords: ['tour packages from Jaipur', 'Rajasthan tour packages', 'Golden Triangle tour package', 'Char Dham yatra from Jaipur', 'India tour package', 'Rajasthan holiday package', 'desert safari tour Jaipur', 'Royal Rajasthan circuit'],
    ogTitle: 'Tour Packages from Jaipur | Rajasthali Tours',
    ogDescription: 'Curated Rajasthan & India tour packages: Golden Triangle, Royal Rajasthan, Char Dham Yatra. Fixed pricing, luxury vehicles, 15+ years experience.',
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tour Packages', path: '/tour-packages' }]),
      businessSchema(),
      itemListSchema('Tour Packages from Jaipur', tourPackages.map(pkg => ({
        name: pkg.name,
        path: `/tour-packages/${pkg.slug}`
      }))),
      offerCatalogSchema('India Tour Packages from Jaipur', tourPackages.map(pkg => ({
        name: pkg.name,
        description: pkg.metaDescription,
        path: `/tour-packages/${pkg.slug}`
      })))
    ]
  });
}

function tourPackagePageSeo(pkg) {
  return pageSeo({
    path: `/tour-packages/${pkg.slug}`,
    title: pkg.metaTitle,
    description: pkg.metaDescription,
    keywords: [
      ...(pkg.keywords || []),
      'Rajasthali Tours',
      'tour package from Jaipur',
      'govt approved tour operator Jaipur'
    ],
    ogTitle: `${pkg.name} | Rajasthali Tours`,
    ogDescription: pkg.metaDescription,
    imageAlt: `${pkg.name} — Rajasthali Tours`,
    type: 'article',
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Tour Packages', path: '/tour-packages' },
        { name: pkg.name, path: `/tour-packages/${pkg.slug}` }
      ]),
      tourPackageSchema(pkg),
      faqSchema(pkg.faqs)
    ]
  });
}

function taxiSeo() {
  return pageSeo({
    path: '/taxi-from-jaipur',
    title: 'Taxi from Jaipur | Outstation Cab & Car Rental | Rajasthali Tours',
    description: 'Book taxi from Jaipur to destinations across India. Outstation cab, car rental and tour packages with 500+ luxury vehicles, govt-approved support and 24/7 reservations. Jaipur to Agra, Delhi, Udaipur, Jodhpur, Jaisalmer and more.',
    keywords: ['taxi from Jaipur', 'outstation cab Jaipur', 'car rental Jaipur', 'Jaipur taxi service', 'cab from Jaipur', 'Jaipur to all cities taxi', 'Jaipur outstation taxi', 'book cab Jaipur', 'Jaipur taxi booking'],
    ogTitle: 'Taxi from Jaipur — Outstation Cab & Car Rental | Rajasthali Tours',
    ogDescription: 'Book outstation taxi from Jaipur: Agra, Delhi, Udaipur, Jodhpur, Jaisalmer and 30+ cities. 500+ vehicles, govt-approved. Call +91 97853 07799.',
    includeFonts: true,
    styles: ['/css/seo-pages.css'],
    schemas: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Taxi from Jaipur', path: '/taxi-from-jaipur' }]),
      businessSchema(),
      faqSchema([
        {
          q: 'How do I book a taxi from Jaipur?',
          a: 'Call +91 97853 07799 or WhatsApp with your destination, date, number of passengers and preferred vehicle. Rajasthali Tours confirms with a fixed quote within 2 hours.'
        },
        {
          q: 'Do you offer round-trip taxis from Jaipur?',
          a: 'Yes. One-way, round-trip with waiting, and multi-day outstation taxi packages are available for all destinations from Jaipur.'
        },
        {
          q: 'Which is the best taxi company in Jaipur?',
          a: 'Rajasthali Tours & Travels is a govt-approved, IATA-certified Jaipur taxi and tour operator with 500+ vehicles and experience since 2010.'
        },
        {
          q: 'What are the taxi fares from Jaipur?',
          a: 'Fares start from ₹3,200 for Jaipur to Agra, ₹3,500 for Jaipur to Delhi, ₹4,800 for Jaipur to Udaipur. Call +91 97853 07799 for an exact quote for your destination.'
        },
        {
          q: 'Do your cabs have GPS tracking?',
          a: 'Yes. All vehicles in our fleet are GPS-tracked. Live location can be shared with the booking contact on request at no extra charge.'
        }
      ])
    ]
  });
}

function getSitemapUrls() {
  const staticUrls = [
    { loc: absoluteUrl('/'), changefreq: 'weekly', priority: '1.0', lastmod: LASTMOD },
    { loc: absoluteUrl('/tours'), changefreq: 'weekly', priority: '0.9', lastmod: LASTMOD },
    { loc: absoluteUrl('/services'), changefreq: 'weekly', priority: '0.9', lastmod: LASTMOD },
    { loc: absoluteUrl('/fleet'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    { loc: absoluteUrl('/tour-packages'), changefreq: 'weekly', priority: '0.9', lastmod: LASTMOD },
    { loc: absoluteUrl('/taxi-from-jaipur'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    // High-value keyword landing pages
    { loc: absoluteUrl('/jaipur-to-agra-taxi'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    { loc: absoluteUrl('/jaipur-to-udaipur-taxi'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    { loc: absoluteUrl('/jaipur-to-delhi-taxi'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    { loc: absoluteUrl('/jaipur-to-jodhpur-taxi'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    { loc: absoluteUrl('/jaipur-to-jaisalmer-taxi'), changefreq: 'monthly', priority: '0.85', lastmod: LASTMOD },
    { loc: absoluteUrl('/luxury-car-rental-jaipur'), changefreq: 'monthly', priority: '0.8', lastmod: LASTMOD },
    { loc: absoluteUrl('/tempo-traveller-jaipur'), changefreq: 'monthly', priority: '0.8', lastmod: LASTMOD },
    { loc: absoluteUrl('/wedding-cars-jaipur'), changefreq: 'monthly', priority: '0.8', lastmod: LASTMOD },
    { loc: absoluteUrl('/corporate-cab-jaipur'), changefreq: 'monthly', priority: '0.8', lastmod: LASTMOD }
  ];

  const destUrls = destinations.map(destination => ({
    loc: absoluteUrl(`/tours/${destination.slug}`),
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: LASTMOD
  }));

  const serviceUrls = services.map(service => ({
    loc: absoluteUrl(`/services/${service.slug}`),
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: LASTMOD
  }));

  const packageUrls = tourPackages.map(pkg => ({
    loc: absoluteUrl(`/tour-packages/${pkg.slug}`),
    changefreq: 'monthly',
    priority: '0.85',
    lastmod: LASTMOD
  }));

  return [...staticUrls, ...destUrls, ...serviceUrls, ...packageUrls];
}

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log('==================================================');
    console.log('  Rajasthali Tours Web Application is Running!');
    console.log(`  Local URL: http://localhost:${PORT}`);
    console.log(`  Site URL: ${site.url}`);
    console.log(`  Destinations: ${destinations.length} | Packages: ${tourPackages.length}`);
    console.log('==================================================');
  });
}

module.exports = app;
