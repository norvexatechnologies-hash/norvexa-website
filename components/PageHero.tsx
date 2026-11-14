import Link from 'next/link';
import { Breadcrumbs } from './Breadcrumbs';

export function PageHero({ eyebrow, title, lead, crumbs, cta = true, secondary }: {
  eyebrow: string; title: string; lead?: string; crumbs: { name: string; path: string }[]; cta?: boolean;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="page-hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {cta && (
          <div className="hero-ctas">
            <Link href="/contact/" className="btn btn-primary">Book an intro <span className="arr">→</span></Link>
            {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        )}
      </div>
    </section>
  );
}
