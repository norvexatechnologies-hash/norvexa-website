import Link from 'next/link';
import { notFound } from 'next/navigation';
import { REGIONS, OFFICES, findOffering, offeringHref } from '@/lib/content';
import { OfficeCard } from '@/components/Offices';
import { pageMeta, regionLanguages, serviceLd } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Faq } from '@/components/Faq';
import { Cta } from '@/components/Cta';
import { JsonLd } from '@/components/JsonLd';

type P = { params: Promise<{ region: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => REGIONS.map((r) => ({ region: r.slug }));
export async function generateMetadata({ params }: P) {
  const { region: _k } = await params;
  const r = REGIONS.find((x) => x.slug === _k)!;
  return pageMeta({ title: r.metaTitle, description: r.metaDescription, path: `/${r.slug}/`, languages: regionLanguages() });
}
export default async function Page({ params }: P) {
  const { region: _k } = await params;
  const r = REGIONS.find((x) => x.slug === _k);
  if (!r) notFound();
  const path = `/${r.slug}/`;
  return (
    <>
      <JsonLd data={serviceLd(`AI and software development for ${r.name}`, r.metaDescription, path, r.name)} />
      <PageHero eyebrow={`Norvexa in ${r.name}`} title={r.h1} lead={r.intro[0]} crumbs={[{ name: 'Locations', path: '/locations/' }, { name: r.name, path }]} />
      <section>
        <div className="wrap split">
          <div className="prose rv">
            <h2>Working with {r.short} teams</h2>
            {r.intro.slice(1).map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            <h2>Why {r.short} companies choose Norvexa</h2>
            <div className="grid2">{r.why.map(([t, d], i) => <div className="feat-item" key={t}><span className="ic2">{String(i + 1).padStart(2, '0')}</span><div><b>{t}</b><span>{d}</span></div></div>)}</div>
            <h2>Data protection and compliance</h2>
            <p>{r.compliance}</p>
            {OFFICES.filter((o) => o.region === r.slug).length > 0 && (<>
              <h2>Our local office</h2>
              <div className="offices" style={{ gridTemplateColumns: '1fr' }}>{OFFICES.filter((o) => o.region === r.slug).map((o) => <OfficeCard key={o.label} o={o} />)}</div>
            </>)}
          </div>
          <aside className="side-card rv d1">
            <h3>{r.name} at a glance</h3>
            <ul style={{ borderTop: 0, marginTop: 0, paddingTop: 0 }}>
              <li>Pricing in {r.currency}</li><li>{r.timezone}</li><li>NDA and data-processing agreements</li><li>Local data residency available</li>
            </ul>
            <Link href="/contact/" className="btn btn-primary" style={{ marginTop: 20 }}>Book an intro <span className="arr">→</span></Link>
          </aside>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Most requested in {r.short}</span><h2>Popular services in {r.name}</h2></div>
          <div className="related">
            {r.focus.map((s) => findOffering(s)!).map((o) => (
              <Link key={o.slug} href={offeringHref(o.slug)} className="rel rv"><small>{offeringHref(o.slug).startsWith('/ai') ? 'AI solution' : 'Service'}</small><h3>{o.title}</h3><p>{o.short}</p></Link>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap faq-grid">
          <div className="rv"><span className="eyebrow">FAQ</span><h2 style={{ fontSize: 'clamp(30px,4vw,44px)', margin: '16px 0' }}>Questions from {r.short} clients</h2></div>
          <div className="rv d1"><Faq faqs={r.faqs} /></div>
        </div>
      </section>
      <section style={{ padding: 0 }}><div className="wrap"><nav aria-label="Other locations" className="tagrow">{REGIONS.filter((x) => x.slug !== r.slug).map((x) => <Link key={x.slug} className="tag" href={`/${x.slug}/`}>{x.name}</Link>)}</nav></div></section>
      <Cta title={`Let's build together, ${r.short}.`} />
    </>
  );
}
