import Link from 'next/link';
import { AI_SOLUTIONS } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icons';
import { Cta } from '@/components/Cta';
import { Hub } from '@/components/Hub';

export const metadata = pageMeta({
  title: 'AI Solutions: AI Agents, Assistants & Apps',
  description: 'Norvexa AI solutions: AI agents that run routine processes, a private company AI assistant, custom AI apps and an AI readiness audit with a costed roadmap.',
  path: '/ai-solutions/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="AI solutions" title="AI in every part of how your business runs." lead="Agents that run processes, an assistant for every team, and apps built around your work, all inside your security boundary and under your team's control." crumbs={[{ name: 'AI solutions', path: '/ai-solutions/' }]} secondary={{ href: '/ai-solutions/ai-audit/', label: 'Start with the AI audit' }} />
      <section>
        <div className="wrap">
          <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {AI_SOLUTIONS.map((s, i) => (
              <Link key={s.slug} href={`/ai-solutions/${s.slug}/`} className={`svc spot rv${i === 3 ? ' feat' : ''}`}>
                <span className="num">0{i + 1}</span><span className="ic3"><Icon name={s.icon} /></span><h2 style={{ fontSize: 24, marginBottom: 10 }}>{s.title}</h2><p>{s.short}</p>
                <ul style={{ listStyle: 'none', margin: '16px 0 0', display: 'grid', gap: 6, fontSize: 14 }}>{s.includes.slice(0, 3).map(([t]) => <li key={t}>✓ {t}</li>)}</ul>
                <span className="more">Explore {s.title} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap hub-wrap">
          <div className="rv"><span className="eyebrow">Integrations</span><h2 style={{ fontSize: 'clamp(30px,4vw,46px)', margin: '16px 0' }}>AI that works inside the tools you already use.</h2><p style={{ fontSize: 18, color: 'var(--muted)' }}>Email, chat, CRM, ERP, documents and helpdesk. Your teams do not need to learn a new tool; the AI comes to them.</p><div style={{ marginTop: 24 }}><Link href="/ai-use-cases/" className="link-arrow">Browse AI use cases by department <span>→</span></Link></div></div>
          <div className="rv d1"><Hub /></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
