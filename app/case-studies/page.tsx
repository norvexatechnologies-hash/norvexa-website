import Link from 'next/link';
import { CASES, type CaseStudy } from '@/lib/cases';
import { pageMeta } from '@/lib/seo';
import { abs } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { Cta } from '@/components/Cta';

export const metadata = pageMeta({
  title: 'Case Studies: Websites & Mobile Apps',
  description: 'Norvexa case studies: 29 websites, web platforms and mobile apps delivered for clients in the UAE, Oman, Kuwait, the UK, India, Australia and beyond.',
  path: '/case-studies/',
});

const Card = ({ c, i }: { c: CaseStudy; i: number }) => (
  <Link href={`/case-studies/${c.slug}/`} className={`rel rv ${['', 'd1', 'd2'][i % 3]}`}>
    <small>{c.industry} · {c.location}</small>
    <h3 style={{ fontSize: 20, margin: '8px 0' }}>{c.client}</h3>
    <p>{c.summary}</p>
    <div className="tagrow">{c.tags.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}</div>
  </Link>
);

export default function Page() {
  const web = CASES.filter((c) => c.kind === 'web');
  const apps = CASES.filter((c) => c.kind === 'app');
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Norvexa case studies', itemListElement: CASES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/case-studies/${c.slug}/`), name: c.client })) }} />
      <PageHero eyebrow="Case studies" title="Work that ships, across 8 countries." lead={`${web.length} websites and web platforms and ${apps.length} mobile apps for clients in the UAE, Oman, Kuwait, the UK, India, Indonesia, Australia and beyond, delivered by Norvexa and our partner TOCO Technologies, Dubai.`} crumbs={[{ name: 'Case studies', path: '/case-studies/' }]} secondary={{ href: '#apps', label: 'See mobile apps' }} />
      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Websites & web platforms</span><h2>{web.length} websites built to rank and convert</h2></div>
          <div className="related">{web.map((c, i) => <Card key={c.slug} c={c} i={i} />)}</div>
        </div>
      </section>
      <section id="apps" className="band">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Mobile apps</span><h2>{apps.length} apps on Android and iOS</h2></div>
          <div className="related">{apps.map((c, i) => <Card key={c.slug} c={c} i={i} />)}</div>
        </div>
      </section>
      <Cta />
    </>
  );
}
