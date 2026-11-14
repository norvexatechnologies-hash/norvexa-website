import Link from 'next/link';
import { type Offering, findOffering, offeringHref } from '@/lib/content';
import { PageHero } from './PageHero';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { JsonLd } from './JsonLd';
import { serviceLd } from '@/lib/seo';
import { Icon } from './Icons';

export function OfferingPage({ o, parent }: { o: Offering; parent: { name: string; path: string } }) {
  const path = `${parent.path}${o.slug}/`;
  return (
    <>
      <JsonLd data={serviceLd(o.title, o.metaDescription, path)} />
      <PageHero eyebrow={o.title} title={o.h1} lead={o.short} crumbs={[parent, { name: o.title, path }]} secondary={{ href: '#included', label: "See what's included" }} />

      <section>
        <div className="wrap split">
          <div className="prose rv">
            <h2>Overview</h2>
            {o.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <h2 id="included">What&apos;s included</h2>
            <div className="grid2">
              {o.includes.map(([t, d], i) => (
                <div className="feat-item" key={t}><span className="ic2">{String(i + 1).padStart(2, '0')}</span><div><b>{t}</b><span>{d}</span></div></div>
              ))}
            </div>
          </div>
          <aside className="side-card rv d1">
            <span className="ic3" style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--grad-soft)', display: 'grid', placeItems: 'center', color: 'var(--blue)', marginBottom: 16 }}><Icon name={o.icon} /></span>
            <h3>Discuss your {o.title.toLowerCase()} project</h3>
            <p>Get a free 30-minute consultation with a senior Norvexa consultant.</p>
            <Link href="/contact/" className="btn btn-primary">Book an intro <span className="arr">→</span></Link>
            <Link href="/contact/" className="btn btn-ghost" style={{ marginTop: 10 }}>Request a quotation</Link>
            <ul><li>NDA before detailed discussion</li><li>You own all code and IP</li><li>Reply within one business day</li></ul>
          </aside>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Business impact</span><h2>Why it matters</h2></div>
          <div className="cards4">
            {o.benefits.map(([t, d], i) => (
              <div className={`mini rv d${i}`} key={t}><div className="ic2"><Icon name={(['up', 'bolt', 'check', 'lock'] as const)[i % 4]} /></div><h3 style={{ fontSize: 18, marginBottom: 8 }}>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Technology</span><h2>Tools and platforms we use</h2></div>
          <div className="tech-chips rv">{o.tech.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="proc rv" style={{ marginTop: 72 }}>
            {[['Discover', 'Goals, users, systems and success metrics.'], ['Design', 'Architecture, UX and a delivery plan.'], ['Build', 'Agile sprints with regular demos.'], ['Launch', 'Security, performance and QA sign-off.'], ['Improve', 'Monitoring, support and iteration.']].map(([t, d], i) => (
              <div className="pstep" key={t}><div className="dot">0{i + 1}</div><h3 style={{ fontSize: 17, marginBottom: 6 }}>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap faq-grid">
          <div className="rv"><span className="eyebrow">FAQ</span><h2 style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '16px 0' }}>{o.title}: common questions</h2></div>
          <div className="rv d1"><Faq faqs={o.faqs} /></div>
        </div>
      </section>

      <section className="band" style={{ paddingBottom: 0, borderBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Related</span><h2>Related services</h2></div>
          <div className="related">
            {o.related.map((s) => findOffering(s)).filter(Boolean).map((r) => (
              <Link key={r!.slug} href={offeringHref(r!.slug)} className="rel rv"><small>{offeringHref(r!.slug).startsWith('/ai') ? 'AI solution' : 'Service'}</small><h3>{r!.title}</h3><p>{r!.short}</p></Link>
            ))}
          </div>
        </div>
        <Cta title={`Let's talk about ${o.title.toLowerCase()}.`} />
      </section>
    </>
  );
}
