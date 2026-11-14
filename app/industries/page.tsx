import Link from 'next/link';
import { INDUSTRIES } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';

export const metadata = pageMeta({
  title: 'Industries We Serve: AI & Software by Sector',
  description: 'AI and software solutions for healthcare, finance, retail, manufacturing, logistics, real estate, education and hospitality from Norvexa Technologies.',
  path: '/industries/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Solutions shaped by your industry." lead="Every sector has its own processes, data and regulations. We bring domain-aware AI and software to the industries where we see the strongest returns." crumbs={[{ name: 'Industries', path: '/industries/' }]} />
      <section>
        <div className="wrap hub-list">
          {INDUSTRIES.map((x, i) => (
            <Link key={x.slug} href={`/industries/${x.slug}/`} className={`ind rv ${['', 'd1', 'd2'][i % 3]}`} style={{ padding: 28 }}>
              <div className="e" aria-hidden="true">{x.emoji}</div><h2 style={{ fontSize: 21, marginBottom: 8 }}>{x.title}</h2><p style={{ fontSize: 14.5 }}>{x.short}</p>
              <span className="link-arrow" style={{ marginTop: 16 }}>Explore {x.title} <span>→</span></span>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
