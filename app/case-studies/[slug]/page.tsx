import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASES } from '@/lib/cases';
import { findOffering, offeringHref } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { abs, SITE } from '@/lib/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { Cta } from '@/components/Cta';

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => CASES.map((c) => ({ slug: c.slug }));
export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug)!;
  const what = c.kind === 'app' ? 'Mobile App' : 'Website';
  return pageMeta({ title: `${c.client} ${what} Case Study`, description: `${c.summary} ${c.industry}, ${c.location}. How Norvexa delivered it.`.slice(0, 158), path: `/case-studies/${c.slug}/` });
}

export default async function Page({ params }: P) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) notFound();
  const path = `/case-studies/${c.slug}/`;
  const related = CASES.filter((x) => x.slug !== c.slug && x.kind === c.kind).slice(0, 3);
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${c.client} case study`, headline: `${c.client}: ${c.summary}`, description: c.summary, url: abs(path), about: c.industry, creator: { '@type': 'Organization', name: SITE.name, url: SITE.url }, ...(c.site ? { mentions: { '@type': 'WebSite', url: `https://${c.site}` } } : {}) }} />
      <section className="page-hero" style={{ paddingBottom: 56 }}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Case studies', path: '/case-studies/' }, { name: c.client, path }]} />
          <span className="eyebrow">{c.kind === 'app' ? 'Mobile app' : 'Website'} · {c.industry}</span>
          <h1 style={{ fontSize: 'clamp(34px,4.6vw,56px)' }}>{c.client}</h1>
          <p className="lead">{c.summary}</p>
          <div className="article-meta"><span>{c.location}</span>{c.platforms && <><span>·</span><span>{c.platforms}</span></>}{c.site && <><span>·</span><a href={`https://${c.site}`} target="_blank" rel="noopener nofollow">{c.site} ↗</a></>}</div>
        </div>
      </section>
      <section style={{ paddingTop: 64 }}>
        <div className="wrap split" style={{ gridTemplateColumns: '1.4fr .6fr' }}>
          <article className="prose">
            <h2>The challenge</h2>
            <p>{c.challenge}</p>
            <h2>What we built</h2>
            <ul>{c.built.map((b) => <li key={b}>{b}</li>)}</ul>
            <h2>Want something similar?</h2>
            <p>We design and build {c.kind === 'app' ? 'mobile apps' : 'websites and web platforms'} for businesses in India, the GCC, the UK, Europe and the US. Tell us what you need and we will come back within one business day with ideas and a realistic plan.</p>
            <p><Link href="/contact/" className="btn btn-primary">Book a free intro <span className="arr">→</span></Link></p>
          </article>
          <aside>
            <div className="side-card">
              <h3>Project details</h3>
              <p style={{ margin: '10px 0 4px' }}><b>Client:</b> {c.client}</p>
              <p style={{ margin: '4px 0' }}><b>Industry:</b> {c.industry}</p>
              <p style={{ margin: '4px 0' }}><b>Location:</b> {c.location}</p>
              {c.platforms && <p style={{ margin: '4px 0' }}><b>Platforms:</b> {c.platforms}</p>}
              <div className="tagrow">{c.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <h3 style={{ marginTop: 20 }}>Related services</h3>
              <div className="tagrow">{c.services.map((s) => findOffering(s)).filter(Boolean).map((o) => <Link key={o!.slug} className="tag" href={offeringHref(o!.slug)}>{o!.title}</Link>)}</div>
            </div>
          </aside>
        </div>
      </section>
      <section className="band" style={{ paddingTop: 80, paddingBottom: 0, borderBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head"><h2 style={{ fontSize: 30 }}>More case studies</h2></div>
          <div className="related">{related.map((x) => <Link key={x.slug} href={`/case-studies/${x.slug}/`} className="rel"><small>{x.industry} · {x.location}</small><h3>{x.client}</h3><p>{x.summary}</p></Link>)}</div>
          <p style={{ marginTop: 24 }}><Link href="/case-studies/" className="link-arrow">All case studies <span>→</span></Link></p>
        </div>
        <Cta />
      </section>
    </>
  );
}
