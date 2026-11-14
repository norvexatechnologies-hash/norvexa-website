import Link from 'next/link';
import { PEOPLE } from '@/lib/content';
import { Leadership } from '@/components/Leadership';
import { Offices } from '@/components/Offices';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';
import { JsonLd } from '@/components/JsonLd';
import { abs } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About Norvexa: Leadership & Global Offices',
  description: 'Meet the leadership of Norvexa Technologies, an AI and software development company in Kochi with offices in the UK, Finland, USA and UAE.',
  path: '/about/',
});

const confirmed = PEOPLE;

export default function Page() {
  return (
    <>
      {confirmed.length > 0 && <JsonLd data={confirmed.map((p) => ({ '@context': 'https://schema.org', '@type': 'Person', name: p.name, jobTitle: p.role, worksFor: { '@id': abs('/#organization') }, ...(p.photo ? { image: abs(p.photo) } : {}), ...(p.linkedin ? { sameAs: [p.linkedin] } : {}) }))} />}
      <PageHero eyebrow="About Norvexa" title="We put AI and modern software to work for growing businesses." lead="Norvexa Technologies Pvt. Ltd. is an AI consulting, software engineering and digital transformation partner. We help companies across the world turn technology into measurable business results." crumbs={[{ name: 'About', path: '/about/' }]} />
      <section>
        <div className="wrap">
          <div className="cards3">
            {[['Our vision', 'A world where every growing business can use AI and modern software as effectively as the largest enterprises.'], ['Our mission', 'To design, build and run AI and software that save time, reduce errors and create new growth for our clients, safely and transparently.'], ['Our promise', 'Clear communication, honest advice, secure delivery and full ownership of everything we build for you.']].map(([t, p], i) => (
              <div className={`card rv ${['', 'd1', 'd2'][i]}`} key={t}><span className="eyebrow">0{i + 1}</span><h2 style={{ fontSize: 24, margin: '16px 0 10px' }}>{t}</h2><p style={{ marginBottom: 0 }}>{p}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="band" id="people">
        <div className="wrap"><Leadership /></div>
      </section>
      <section id="offices">
        <div className="wrap"><Offices /></div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">How we work</span><h2>Principles behind every engagement.</h2></div>
          <div className="cards4">
            {[['Outcomes first', 'We start with the business result and measure against it.'], ['Humans in control', 'AI prepares and proposes; people approve what matters.'], ['Security by design', 'Least-privilege access, audit trails and private deployments.'], ['No lock-in', 'You own the code, data, prompts and configuration.']].map(([t, p], i) => (
              <div className={`mini rv ${['', 'd1', 'd2', 'd3'][i]}`} key={t}><h3 style={{ fontSize: 18, marginBottom: 8 }}>{t}</h3><p>{p}</p></div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 20, flexWrap: 'wrap' }}><Link className="link-arrow" href="/careers/">Join the team <span>→</span></Link><Link className="link-arrow" href="/locations/">Where we work <span>→</span></Link></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
