import type { MetadataRoute } from 'next';
import { abs } from '@/lib/site';
import { AI_SOLUTIONS, SERVICES, INDUSTRIES, REGIONS } from '@/lib/content';
import { POSTS } from '@/lib/insights';
import { CASES } from '@/lib/cases';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const e = (path: string, priority: number, freq: 'weekly' | 'monthly' | 'yearly' = 'monthly', lastModified: Date = now) => ({ url: abs(path), lastModified, changeFrequency: freq, priority });
  return [
    e('/', 1, 'weekly'),
    e('/ai-solutions/', 0.9), ...AI_SOLUTIONS.map((s) => e(`/ai-solutions/${s.slug}/`, 0.9)),
    e('/services/', 0.9), ...SERVICES.map((s) => e(`/services/${s.slug}/`, 0.9)),
    e('/ai-use-cases/', 0.8), e('/industries/', 0.8), ...INDUSTRIES.map((s) => e(`/industries/${s.slug}/`, 0.7)),
    e('/locations/', 0.7), ...REGIONS.map((r) => e(`/${r.slug}/`, 0.8)),
    e('/technologies/', 0.6), e('/about/', 0.7), e('/careers/', 0.5), e('/contact/', 0.8),
    e('/case-studies/', 0.8, 'monthly'), e('/free-ai-checklist/', 0.7, 'monthly'), e('/free-ai-audit/', 0.7, 'monthly'), e('/app-cost-calculator/', 0.8, 'monthly'), ...CASES.map((c) => e(`/case-studies/${c.slug}/`, 0.6, 'yearly')),
    e('/insights/', 0.8, 'weekly'), ...POSTS.map((p) => e(`/insights/${p.slug}/`, 0.7, 'monthly', new Date(p.date))),
    e('/privacy-policy/', 0.2, 'yearly'), e('/terms/', 0.2, 'yearly'),
  ];
}
