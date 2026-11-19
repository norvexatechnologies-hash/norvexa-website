// Global site configuration. Update contact details before launch.
export const SITE = {
  name: 'Norvexa Technologies',
  legalName: 'Norvexa Technologies Pvt. Ltd.',
  url: 'https://www.norvexatechnologies.com',
  email: 'info@norvexatechnologies.com',
  phone: '+91 62383 83735',
  whatsapp: '', // e.g. '919000000000' - enables the WhatsApp button
  address: 'TBC, 8th Floor, Vismaya, Infopark Phase I, Infopark Rd, Kochi, Kerala 682042, India',
  city: 'Kochi',
  tagline: 'AI in every part of how your business runs.',
  description:
    'Norvexa Technologies is an AI consulting, software engineering and digital transformation partner for businesses in the USA, UK, UAE, Canada, Australia and Europe.',
  social: {
    linkedin: 'https://www.linkedin.com/in/norvexa-technologies/',
    facebook: 'https://www.facebook.com/norvexatechnologies/',
    instagram: 'https://www.instagram.com/norvexatechnologies/',
    youtube: 'https://www.youtube.com/@norvexatechnologies',
  },
  geo: { lat: 10.0105, lng: 76.3637 }, // Infopark Phase I, Kakkanad (approx.)
  // Analytics & verification: set as Netlify environment variables (or edit the fallbacks here)
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || 'G-VJGX1L1MWV', // Google Analytics 4 (property "Norvexa", norvexatechnologies@gmail.com)
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WSSS2JCQ', // Tag Manager container (add Ads/Meta/LinkedIn tags here; GA4 runs via gtag above)
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '', // Google Search Console HTML-tag token
  bingVerification: process.env.NEXT_PUBLIC_BING_VERIFICATION || '', // Bing Webmaster Tools msvalidate.01 token
};

export const abs = (path: string) => SITE.url + (path.startsWith('/') ? path : '/' + path);
