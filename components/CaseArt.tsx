import type { CSSProperties } from 'react';
import type { CaseStudy } from '@/lib/cases';
import { initialsOf, paletteOf } from '@/lib/case-meta';

const vars = (slug: string) => {
  const [a, b, c] = paletteOf(slug);
  return { '--ca': a, '--cb': b, '--cc': c } as CSSProperties;
};

/** A browser-framed, illustrative homepage preview for a website case study. */
export function WebArt({ c, large = false }: { c: CaseStudy; large?: boolean }) {
  return (
    <div className={`bframe${large ? ' lg' : ''}`} style={vars(c.slug)} aria-hidden="true">
      <div className="bf-bar"><i /><i /><i /><span className="bf-url">{c.site}</span></div>
      <div className="bf-screen">
        <div className="bf-nav"><b>{initialsOf(c.client)}</b><span /><span /><span /><span /><em /></div>
        <div className="bf-hero">
          <div className="bf-copy">
            <small>{c.industry}</small>
            <strong>{c.client}</strong>
            <span className="ln" /><span className="ln s" />
            <div className="bf-btns"><span /><span /></div>
          </div>
          <div className="bf-visual"><i /><i /><i /><i /></div>
        </div>
        <div className="bf-cards"><span /><span /><span /></div>
      </div>
    </div>
  );
}

/** App icon plus two phone screens, illustrative, for a mobile app case study. */
export function AppArt({ c, large = false }: { c: CaseStudy; large?: boolean }) {
  const ini = initialsOf(c.client);
  const Phone = ({ v }: { v: 1 | 2 }) => (
    <div className={`phone p${v}`}>
      <div className="ph-notch" />
      <div className="ph-head"><b>{ini}</b><span>{c.client}</span></div>
      {v === 1 ? (
        <>
          <div className="ph-search" />
          <div className="ph-banner" />
          <div className="ph-grid"><i /><i /><i /><i /></div>
        </>
      ) : (
        <>
          <div className="ph-list"><i /><i /><i /></div>
          <div className="ph-cta" />
        </>
      )}
      <div className="ph-tab"><i /><i /><i /><i /></div>
    </div>
  );
  return (
    <div className={`aframe${large ? ' lg' : ''}`} style={vars(c.slug)} aria-hidden="true">
      <div className="app-icon">{ini}</div>
      <Phone v={1} />
      <Phone v={2} />
      <span className="app-plat">{/iOS/.test(c.platforms || '') ? 'Android · iOS' : 'Android'}</span>
    </div>
  );
}
