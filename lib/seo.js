const path = require('path');

const DEFAULT_SITE_URL = 'https://rajasthalitours.com';

let imageManifest = {};
try {
  imageManifest = require('../data/imageManifest.json');
} catch (error) {
  imageManifest = {};
}

const site = {
  name: 'Rajasthali Tours & Travels Pvt. Ltd.',
  shortName: 'Rajasthali Tours',
  url: normalizeSiteUrl(process.env.SITE_URL || DEFAULT_SITE_URL),
  defaultImage: '/rajasthalitours_images/hero_rajasthan.png',
  logo: '/rajasthalitours_images/logo.png',
  phone: '+91-97853-07799',
  phoneDisplay: '+91 97853 07799',
  email: 'reservation@rajasthalitours.com',
  address: {
    streetAddress: '43, Shopping Complex, Ambabari',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302039',
    addressCountry: 'IN'
  },
  geo: {
    latitude: 26.940852,
    longitude: 75.772729
  },
  sameAs: [
    'https://www.facebook.com/rajasthalitours',
    'https://www.instagram.com/rajasthalitours',
    'https://x.com/rajasthalitours',
    'https://www.youtube.com/@rajasthalitours'
  ]
};

function normalizeSiteUrl(value) {
  return String(value || DEFAULT_SITE_URL).replace(/\/+$/, '');
}

function absoluteUrl(pathname = '/') {
  if (/^https?:\/\//i.test(pathname)) return pathname;
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${site.url}${normalizedPath}`;
}

function canonicalPath(pathname = '/') {
  if (!pathname || pathname === '/') return '/';
  return `/${String(pathname).replace(/^\/+|\/+$/g, '')}`;
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function jsonLd(data) {
  return JSON.stringify(data, null, 2)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

function pageSeo(options) {
  return {
    type: 'website',
    image: site.defaultImage,
    imageAlt: 'Rajasthali Tours travel fleet in Rajasthan',
    imageWidth: 1200,
    imageHeight: 630,
    twitterSite: '@rajasthalitours',
    styles: [],
    scripts: [],
    schemas: [],
    includeFonts: false,
    ...options,
    path: canonicalPath(options.path || '/')
  };
}

function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(site.logo)
    },
    image: absoluteUrl(site.defaultImage),
    description: "IATA-certified, Government of India approved premium transport and travel company headquartered in Jaipur. Serving Fortune 500 corporates, international tourists, NRI families and destination weddings since 2010. Services: corporate travel, wedding transport, MICE events, airport transfers, coach rentals, and curated India tour packages — Rajasthan circuits, Golden Triangle, Char Dham Yatra, Himalayan tours and beyond.",
    foundingDate: '2010',
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      ...site.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude
    },
    hasMap: `https://www.google.com/maps?q=${site.geo.latitude},${site.geo.longitude}`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: site.sameAs,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    areaServed: [
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' }
    ]
  };
}

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

function faqSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };
}

function itemListSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path)
    }))
  };
}

function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: businessSchema(),
    areaServed: {
      '@type': 'State',
      name: 'Rajasthan'
    },
    serviceType: service.name
  };
}

function destinationSchema(destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${destination.name}, ${destination.region}`,
    description: destination.metaDescription,
    url: absoluteUrl(`/tours/${destination.slug}`),
    touristType: ['Cultural tourists', 'Heritage travellers', 'Pilgrims', 'Corporate travellers'],
    includesAttraction: destination.topAttractions.slice(0, 4).map(attraction => ({
      '@type': 'TouristAttraction',
      name: attraction.name,
      description: attraction.detail
    }))
  };
}

function tourPackageSchema(pkg) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.name,
    description: pkg.metaDescription,
    url: absoluteUrl(`/tour-packages/${pkg.slug}`),
    touristType: ['Heritage travellers', 'Cultural tourists', 'Pilgrims', 'International visitors'],
    provider: businessSchema(),
    itinerary: pkg.itinerary.map(day => ({
      '@type': 'ItemList',
      name: `${day.day}: ${day.title}`,
      itemListElement: day.activities.map((activity, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: activity
      }))
    }))
  };
}

function offerCatalogSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name,
    itemListElement: items.map(item => ({
      '@type': 'Offer',
      name: item.name,
      description: item.description || item.metaDescription || item.tagline,
      url: absoluteUrl(item.path)
    }))
  };
}

function imageInfo(src) {
  const normalized = normalizeAssetPath(src);
  const entry = imageManifest[normalized];
  if (!entry) {
    return { src, width: undefined, height: undefined, srcset: '' };
  }

  return {
    src,
    width: entry.width,
    height: entry.height,
    srcset: (entry.variants || [])
      .map(variant => `${variant.path} ${variant.width}w`)
      .join(', ')
  };
}

function normalizeAssetPath(src) {
  const clean = String(src || '').split('?')[0].split('#')[0].replace(/\\/g, '/');
  if (/^https?:\/\//i.test(clean)) return clean;
  return clean.startsWith('/') ? clean : `/${clean}`;
}

function relatedByPosition(items, slug, count) {
  const currentIndex = items.findIndex(item => item.slug === slug);
  if (currentIndex < 0) return items.filter(item => item.slug !== slug).slice(0, count);

  return Array.from({ length: items.length - 1 }, (_, offset) => {
    const index = (currentIndex + offset + 1) % items.length;
    return items[index];
  }).slice(0, count);
}

function imageBasename(src) {
  return path.basename(normalizeAssetPath(src));
}

module.exports = {
  site,
  absoluteUrl,
  canonicalPath,
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
  relatedByPosition,
  imageBasename
};
