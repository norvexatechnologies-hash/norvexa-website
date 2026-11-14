import Link from 'next/link';
import { REGIONS } from '@/lib/content';
import { pageMeta, regionLanguages } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';
import { Offices } from '@/components/Offices';

export const metadata = pageMeta({
  title: 'Locations: India, USA, UK, UAE & Europe',
  description: 'Norvexa Technologies serves clients in the United States, United Kingdom, UAE, Canada, Australia, Germany and across Europe with time-zone-aligned delivery.',
  path: '/locations/',
  languages: regionLanguages(),
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Global reach" title="Serving clients across six key markets." lead="Time-zone-aligned collaboration, local-currency pricing and privacy-first delivery for each market we serve." crumbs={[{ name: 'Locations', path: '/locations/' }]} />
      <section>
        <div className="wrap hub-list">
          {REGIONS.map((r, i) => (
            <Link key={r.slug} href={`/${r.slug}/`} className={`rel rv ${['', 'd1', 'd2'][i % 3]}`}>
              <small>/{r.slug} · {r.currency}</small><h2 style={{ fontSize: 22, margin: '8px 0' }}>{r.name}</h2><p>{r.timezone}. {r.why[0][1]}</p>
              <span className="link-arrow" style={{ marginTop: 14 }}>Norvexa in {r.short} <span>→</span></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="band"><div className="wrap"><Offices /></div></section>
      <Cta />
    </>
  );
}
