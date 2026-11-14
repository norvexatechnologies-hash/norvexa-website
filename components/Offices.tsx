import { OFFICES, type Office } from '@/lib/content';

const Pin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
);

export function OfficeCard({ o, i = 0 }: { o: Office; i?: number }) {
  return (
    <article className={`office rv ${['', 'd1', 'd2'][i % 3]}`} itemScope itemType="https://schema.org/Organization">
      <div className="office-top"><span className={`pin${o.accent ? ' alt' : ''}`}><Pin /></span><span className="office-label">{o.label}</span></div>
      <h3 itemProp="name">{o.company}</h3>
      <address itemProp="address">{o.address}</address>
      <p className="office-contact">
        {o.phone && <a href={`tel:${o.phone.replace(/\s/g, '')}`} itemProp="telephone">{o.phone}</a>}
        {o.phone && o.email && <span> · </span>}
        {o.email && <a href={`mailto:${o.email}`} itemProp="email">{o.email}</a>}
      </p>
    </article>
  );
}

export function Offices({ heading = true }: { heading?: boolean }) {
  return (
    <>
      {heading && (
        <div className="sec-head rv">
          <span className="eyebrow">Global presence</span>
          <h2>Local teams, <span className="grad-text">global reach.</span></h2>
          <p>Norvexa is part of a group with offices and partners across India, the UK, Finland, the USA and the UAE.</p>
        </div>
      )}
      <div className="offices">{OFFICES.map((o, i) => <OfficeCard key={o.label} o={o} i={i} />)}</div>
    </>
  );
}
