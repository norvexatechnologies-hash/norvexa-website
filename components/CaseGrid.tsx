'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { CaseStudy } from '@/lib/cases';
import { REGIONS, flagOf, regionsOf, type Region } from '@/lib/case-meta';
import { AppArt, WebArt } from './CaseArt';

type Kind = 'all' | 'web' | 'app';

export function CaseGrid({ cases }: { cases: CaseStudy[] }) {
  const [kind, setKind] = useState<Kind>('all');
  const [region, setRegion] = useState<Region | 'all'>('all');
  const present = useMemo(() => REGIONS.filter((r) => cases.some((c) => regionsOf(c).includes(r))), [cases]);
  const shown = cases.filter((c) => (kind === 'all' || c.kind === kind) && (region === 'all' || regionsOf(c).includes(region)));

  return (
    <>
      <div className="cs-filters">
        <div className="cs-row" role="group" aria-label="Filter by type">
          {([['all', 'All work'], ['web', 'Websites'], ['app', 'Mobile Apps']] as [Kind, string][]).map(([k, l]) => (
            <button key={k} type="button" className={kind === k ? 'on' : ''} aria-pressed={kind === k} onClick={() => setKind(k)}>{l}</button>
          ))}
        </div>
        <div className="cs-row" role="group" aria-label="Filter by region">
          <button type="button" className={region === 'all' ? 'on' : ''} aria-pressed={region === 'all'} onClick={() => setRegion('all')}>All regions</button>
          {present.map((r) => (
            <button key={r} type="button" className={region === r ? 'on' : ''} aria-pressed={region === r} onClick={() => setRegion(r)}>{r}</button>
          ))}
        </div>
        <p className="cs-count">{shown.length} {shown.length === 1 ? 'project' : 'projects'}</p>
      </div>

      <div className="cs-grid">
        {shown.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}/`} className={`cs-card ${c.kind}`}>
            <div className="cs-media">{c.kind === 'web' ? <WebArt c={c} /> : <AppArt c={c} />}</div>
            <div className="cs-body">
              <div className="cs-meta"><span>{flagOf(c)} {c.location}</span><span>{c.industry}</span></div>
              <h3>{c.client}</h3>
              <p>{c.summary}</p>
              <div className="tagrow">{c.tags.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <span className="cs-more">{c.kind === 'app' ? 'View app case study' : 'View case study'} →</span>
            </div>
          </Link>
        ))}
      </div>
      {shown.length === 0 && <p className="cs-empty">No projects match these filters yet.</p>}
    </>
  );
}
