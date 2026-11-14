import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INDUSTRIES, findOffering, offeringHref } from '@/lib/content';
import { pageMeta, serviceLd } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';
import { JsonLd } from '@/components/JsonLd';

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => INDUSTRIES.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: P) {
  const { slug: _k } = await params;
  const x = INDUSTRIES.find((s) => s.slug === _k)!;
  return pageMeta({ title: `AI & Software for ${x.title}`, description: x.metaDescription, path: `/industries/${x.slug}/` });
}
export default async function Page({ params }: P) {
  const { slug: _k } = await params;
  const x = INDUSTRIES.find((s) => s.slug === _k);
  if (!x) notFound();
  const path = `/industries/${x.slug}/`;
  return (
    <>
      <JsonLd data={serviceLd(`AI and software for ${x.title}`, x.metaDescription, path)} />
      <PageHero eyebrow={`${x.emoji} ${x.title}`} title={`AI and software for ${x.title.toLowerCase()}.`} lead={x.intro} crumbs={[{ name: 'Industries', path: '/industries/' }, { name: x.title, path }]} />
      <section>
        <div className="wrap split">
          <div className="prose rv">
            <h2>Challenges we solve</h2>
            <ul>{x.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
            <h2>What we build for {x.title.toLowerCase()}</h2>
            <div className="grid2">{x.solutions.map(([t, d], i) => <div className="feat-item" key={t}><span className="ic2">{String(i + 1).padStart(2, '0')}</span><div><b>{t}</b><span>{d}</span></div></div>)}</div>
          </div>
          <aside className="side-card rv d1">
            <h3>Talk to a {x.title.toLowerCase()} specialist</h3>
            <p>Share your goals and we&apos;ll suggest where AI and software can make the biggest difference.</p>
            <Link href="/contact/" className="btn btn-primary">Book an intro <span className="arr">→</span></Link>
            <ul><li>Industry-aware consultants</li><li>Privacy and compliance by design</li><li>Reply within one business day</li></ul>
          </aside>
        </div>
      </section>
      <section className="band" style={{ paddingBottom: 0, borderBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Relevant services</span><h2>How we help {x.title.toLowerCase()} teams</h2></div>
          <div className="related">
            {x.services.map((s) => findOffering(s)!).map((r) => (
              <Link key={r.slug} href={offeringHref(r.slug)} className="rel rv"><small>{offeringHref(r.slug).startsWith('/ai') ? 'AI solution' : 'Service'}</small><h3>{r.title}</h3><p>{r.short}</p></Link>
            ))}
          </div>
        </div>
        <Cta title={`Let's talk about ${x.title.toLowerCase()}.`} />
      </section>
    </>
  );
}
