import type { MetadataRoute } from 'next';
import { abs } from '@/lib/site';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/thank-you/', '/api/'] }], sitemap: abs('/sitemap.xml'), host: abs('/') };
}
