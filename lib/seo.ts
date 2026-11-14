import type { Metadata } from 'next';
import { SITE, abs } from './site';
import { REGIONS, OFFICES } from './content';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  languages?: Record<string, string>;
  noindex?: boolean;
  publishedTime?: string;
}

export function pageMeta({ title, description, path, type = 'website', languages, noindex, publishedTime }: MetaInput): Metadata {
  const url = abs(path);
  return {
    title,
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type, url, title, description, siteName: SITE.name, locale: 'en_US',
      images: [{ url: abs('/og-image.jpg'), width: 1200, height: 630, alt: SITE.legalName }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [abs('/og-image.jpg')] },
  };
}

/** hreflang cluster shared by all country landing pages */
export function regionLanguages(): Record<string, string> {
  const map: Record<string, string> = { 'x-default': abs('/locations/') };
  REGIONS.forEach((r) => (map[r.hreflang] = abs(`/${r.slug}/`)));
  return map;
}

/* ---------------- JSON-LD builders ---------------- */
export const orgLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': abs('/#organization'),
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: abs('/logo-dark.png'),
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.description,
  address: { '@type': 'PostalAddress', streetAddress: 'TBC, 8th Floor, Vismaya, Infopark Phase I, Infopark Rd', addressLocality: 'Kochi', addressRegion: 'Kerala', postalCode: '682042', addressCountry: 'IN' },
  location: OFFICES.map((o) => ({ '@type': 'Place', name: `${o.company} (${o.label})`, address: { '@type': 'PostalAddress', streetAddress: o.address, addressCountry: o.country } })),
  areaServed: ['IN', 'US', 'GB', 'AE', 'CA', 'AU', 'DE', 'EU'],
  founder: { '@type': 'Person', name: 'Bijo C.B', jobTitle: 'CEO' },
  sameAs: Object.values(SITE.social),
});

/** Local business entity for the Kochi office: supports Google Business Profile + local pack rankings */
export const localBusinessLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': abs('/#localbusiness'),
  name: SITE.legalName,
  image: abs('/og-image.jpg'),
  logo: abs('/logo-dark.png'),
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: '$$',
  address: { '@type': 'PostalAddress', streetAddress: 'TBC, 8th Floor, Vismaya, Infopark Phase I, Infopark Rd, Kakkanad', addressLocality: 'Kochi', addressRegion: 'Kerala', postalCode: '682042', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }],
  areaServed: ['IN', 'US', 'GB', 'AE', 'CA', 'AU', 'DE'],
  parentOrganization: { '@id': abs('/#organization') },
  sameAs: Object.values(SITE.social),
  knowsAbout: ['AI agents', 'Generative AI', 'Custom software development', 'Web development', 'Mobile app development', 'SaaS development', 'Cloud and DevOps', 'Digital transformation'],
});

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': abs('/#website'),
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': abs('/#organization') },
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});

export const serviceLd = (name: string, description: string, path: string, areaServed?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: abs(path),
  serviceType: name,
  provider: { '@id': abs('/#organization') },
  areaServed: areaServed || ['US', 'GB', 'AE', 'CA', 'AU', 'DE'],
});

// FAQPage is only rich-result eligible for some sites under current Google
// guidelines; it remains valid structured data that helps search and AI engines.
export const faqLd = (faqs: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const articleLd = (p: { title: string; description: string; path: string; date: string; author: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: p.title,
  description: p.description,
  url: abs(p.path),
  datePublished: p.date,
  dateModified: p.date,
  author: { '@type': 'Organization', name: p.author },
  publisher: { '@id': abs('/#organization') },
  image: abs('/og-image.jpg'),
  mainEntityOfPage: abs(p.path),
});
