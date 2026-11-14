import Link from 'next/link';
import { USE_CASES } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';

export const metadata = pageMeta({
  title: 'AI Use Cases by Department for Business',
  description: 'Practical AI use cases for Sales, Marketing, Customer Service, Operations, Finance, HR, IT, Legal and Leadership, with the systems each one connects to.',
  path: '/ai-use-cases/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="AI use cases" title="AI at work in every department." lead="54 practical ways AI takes on real work today, organised by team, with the systems each use case connects to." crumbs={[{ name: 'AI use cases', path: '/ai-use-cases/' }]} secondary={{ href: '/ai-solutions/ai-audit/', label: 'Find your best use cases' }} />
      <div className="sticky-filters"><div className="wrap"><nav className="filters" aria-label="Departments">{USE_CASES.map((d) => <a key={d.slug} className="filter" href={`#${d.slug}`}>{d.name}</a>)}</nav></div></div>
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          {USE_CASES.map((d) => (
            <div className="dept-block" id={d.slug} key={d.slug}>
              <h2>AI for {d.name.toLowerCase()}</h2>
              <div className="areas">{d.areas.map((a) => <span key={a}>{a}</span>)}</div>
              <div className="uc-grid">
                {d.items.map((u) => (
                  <article className="uc" key={u[0]}><span className="dept">{d.name}</span><h3 style={{ fontSize: 17.5 }}>{u[0]}</h3><p>{u[1]}</p><div className="tools">{u[2].map((t) => <span key={t}>{t}</span>)}</div></article>
                ))}
              </div>
            </div>
          ))}
          <p style={{ marginTop: 32, color: 'var(--muted)' }}>Not sure where to start? <Link href="/ai-solutions/ai-audit/" style={{ color: 'var(--blue)', fontWeight: 600 }}>The AI audit</Link> scores these opportunities for your business.</p>
        </div>
      </section>
      <Cta />
    </>
  );
}
