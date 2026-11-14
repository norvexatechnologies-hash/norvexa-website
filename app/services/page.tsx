import Link from 'next/link';
import { SERVICES } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icons';
import { Cta } from '@/components/Cta';
import { Hub } from '@/components/Hub';

export const metadata = pageMeta({
  title: 'Software Development Services Company',
  description: 'AI & machine learning, web and mobile app development, custom software, SaaS, e-commerce, UI/UX design, cloud & DevOps and digital transformation services.',
  path: '/services/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Engineering services" title="Full-stack engineering for global businesses." lead="Web, mobile, custom software, SaaS, e-commerce, design and cloud, delivered by one accountable team with AI built in from day one." crumbs={[{ name: 'Services', path: '/services/' }]} secondary={{ href: '/technologies/', label: 'Our technology stack' }} />
      <section>
        <div className="wrap">
          <div className="svc-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className={`svc spot rv${i === 0 ? ' feat' : ''}`}>
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
          <div className="rv"><span className="eyebrow">Global delivery</span><h2 style={{ fontSize: 'clamp(30px,4vw,46px)', margin: '16px 0' }}>One partner from strategy to operations.</h2><p style={{ fontSize: 18, color: 'var(--muted)' }}>Discovery, design, engineering, launch and support under one roof, with time-zone-aligned collaboration for clients in the USA, UK, UAE, Canada, Australia and Europe.</p><div style={{ marginTop: 24 }}><Link href="/locations/" className="link-arrow">See the markets we serve <span>→</span></Link></div></div>
          <div className="rv d1"><Hub /></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
