import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS } from '@/lib/insights';
import { findOffering, offeringHref } from '@/lib/content';
import { pageMeta, articleLd } from '@/lib/seo';
import { abs } from '@/lib/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { Cta } from '@/components/Cta';

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: P) {
  const { slug: _k } = await params;
  const p = POSTS.find((x) => x.slug === _k)!;
  return pageMeta({ title: p.seoTitle || p.title, description: p.description, path: `/insights/${p.slug}/`, type: 'article', publishedTime: p.date });
}
const id = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default async function Page({ params }: P) {
  const { slug: _k } = await params;
  const p = POSTS.find((x) => x.slug === _k);
  if (!p) notFound();
  const path = `/insights/${p.slug}/`;
  const words = p.sections.reduce((n, s) => n + s.p.join(' ').split(' ').length + (s.list?.join(' ').split(' ').length || 0), 0);
  const url = encodeURIComponent(abs(path));
  return (
    <>
      <JsonLd data={{ ...articleLd({ title: p.title, description: p.description, path, date: p.date, author: p.author }), wordCount: words }} />
      <section className="page-hero" style={{ paddingBottom: 56 }}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Insights', path: '/insights/' }, { name: p.title, path }]} />
          <span className="eyebrow">{p.category}</span>
          <h1 style={{ fontSize: 'clamp(34px,4.6vw,56px)' }}>{p.title}</h1>
          <p className="lead">{p.description}</p>
          <div className="article-meta"><span>{p.author}</span><span>·</span><time dateTime={p.date}>{new Date(p.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time><span>·</span><span>{p.readMins} min read</span></div>
        </div>
      </section>
      <section style={{ paddingTop: 64 }}>
        <div className="wrap split" style={{ gridTemplateColumns: '1.4fr .6fr' }}>
          <article className="prose">
            {p.sections.map((s) => (
              <div key={s.h}>
                <h2 id={id(s.h)} style={{ scrollMarginTop: 100 }}>{s.h}</h2>
                {s.p.map((x) => <p key={x.slice(0, 30)}>{x}</p>)}
                {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </div>
            ))}
            <div className="side-card" style={{ position: 'static', marginTop: 40 }}>
              <h3>Related services</h3>
              <div className="tagrow">{p.services.map((s) => findOffering(s)!).map((o) => <Link key={o.slug} className="tag" href={offeringHref(o.slug)}>{o.title}</Link>)}</div>
            </div>
          </article>
          <aside className="toc">
            <b>On this page</b>
            <ol>{p.sections.map((s) => <li key={s.h}><a href={`#${id(s.h)}`}>{s.h}</a></li>)}</ol>
            <div className="share">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} rel="noopener">Share on LinkedIn</a>
              <a href={`https://x.com/intent/post?url=${url}`} rel="noopener">Share on X</a>
            </div>
          </aside>
        </div>
      </section>
      <section className="band" style={{ paddingTop: 80, paddingBottom: 0, borderBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head"><h2 style={{ fontSize: 30 }}>More insights</h2></div>
          <div className="related">{POSTS.filter((x) => x.slug !== p.slug).slice(0, 3).map((x) => <Link key={x.slug} href={`/insights/${x.slug}/`} className="rel"><small>{x.category}</small><h3>{x.title}</h3><p>{x.readMins} min read →</p></Link>)}</div>
        </div>
        <Cta />
      </section>
    </>
  );
}
