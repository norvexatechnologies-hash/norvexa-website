import { notFound } from 'next/navigation';
import { AI_SOLUTIONS } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { OfferingPage } from '@/components/OfferingPage';

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => AI_SOLUTIONS.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: P) {
  const { slug: _k } = await params;
  const o = AI_SOLUTIONS.find((s) => s.slug === _k)!;
  return pageMeta({ title: o.metaTitle, description: o.metaDescription, path: `/ai-solutions/${o.slug}/` });
}
export default async function Page({ params }: P) {
  const { slug: _k } = await params;
  const o = AI_SOLUTIONS.find((s) => s.slug === _k);
  if (!o) notFound();
  return <OfferingPage o={o} parent={{ name: 'AI solutions', path: '/ai-solutions/' }} />;
}
