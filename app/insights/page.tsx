import Link from 'next/link';
import { POSTS } from '@/lib/insights';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';

export const metadata = pageMeta({
  title: 'Insights on AI & Software Development',
  description: 'Guides and insights from Norvexa on AI automation, custom software costs, choosing a development partner and building SaaS products.',
  path: '/insights/',
});

const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Page() {
  const [first, ...rest] = POSTS;
  return (
    <>
      <PageHero eyebrow="Insights" title="Ideas to plan your next move." lead="Practical guides on AI, software development and digital transformation, written for business and technology leaders." crumbs={[{ name: 'Insights', path: '/insights/' }]} cta={false} />
      <section>
        <div className="wrap">
          <Link href={`/insights/${first.slug}/`} className="res dark rv" style={{ minHeight: 320, marginBottom: 20, display: 'flex' }}>
            <span className="eyebrow">Featured · {first.category}</span>
            <h2 style={{ fontSize: 'clamp(26px,3.4vw,40px)', margin: '12px 0', maxWidth: 760 }}>{first.title}</h2>
            <p>{first.description}</p>
            <span className="link-arrow">Read article · {first.readMins} min <span>→</span></span>
          </Link>
          <div className="related">
            {rest.map((p, i) => (
              <Link key={p.slug} href={`/insights/${p.slug}/`} className={`rel rv ${['', 'd1', 'd2'][i % 3]}`}>
                <small>{p.category} · {fmt(p.date)}</small><h2 style={{ fontSize: 19, margin: '8px 0' }}>{p.title}</h2><p>{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
