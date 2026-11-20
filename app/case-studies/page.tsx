import Link from 'next/link';
import { CASES } from '@/lib/cases';
import { pageMeta } from '@/lib/seo';
import { abs, SITE } from '@/lib/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { CaseGrid } from '@/components/CaseGrid';

export const metadata = pageMeta({
  title: 'Case Studies: Websites & Mobile Apps',
  description: 'Norvexa case studies: 29 websites, web platforms and mobile apps delivered for clients in the UAE, Oman, Kuwait, the UK, India, Australia and beyond.',
  path: '/case-studies/',
});

const WA = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Norvexa, I'd like to discuss a project.")}` : '/contact/';

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Norvexa case studies', itemListElement: CASES.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/case-studies/${c.slug}/`), name: c.client })) }} />
      <section className="page-hero cs-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Case studies', path: '/case-studies/' }]} />
          <span className="eyebrow">Case studies</span>
          <h1>Some of our <em className="grad-text">works</em></h1>
          <p className="lead">Websites and mobile apps we have built for clients across the Middle East, India, the UK, Asia and Australia, delivered by Norvexa and our partner TOCO Technologies, Dubai. What each client asked for, and what we delivered.</p>
          <div className="hero-ctas">
            <Link href="/contact/" className="btn btn-primary">Get a quote <span className="arr">→</span></Link>
            <a href={WA} className="btn btn-wa" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="cs-section">
        <div className="wrap"><CaseGrid cases={CASES} /></div>
      </section>
      <section className="cs-cta">
        <div className="wrap">
          <span className="eyebrow">Let&apos;s work together</span>
          <h2>Want results like these? Let&apos;s talk.</h2>
          <p>Tell us about your project. We reply within one business day.</p>
          <div className="hero-ctas">
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-ghost">{SITE.phone}</a>
            <a href={WA} className="btn btn-wa" target="_blank" rel="noopener">Chat on WhatsApp</a>
            <Link href="/app-cost-calculator/" className="btn btn-primary">Estimate project <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
