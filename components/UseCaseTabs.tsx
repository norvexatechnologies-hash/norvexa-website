'use client';
import { useState } from 'react';
import Link from 'next/link';
import { USE_CASES } from '@/lib/content';

export function UseCaseTabs() {
  const [k, setK] = useState(0);
  const d = USE_CASES[k];
  return (
    <>
      <div className="filters" role="tablist">
        {USE_CASES.map((x, i) => (
          <button key={x.slug} role="tab" aria-selected={i === k} className={`filter${i === k ? ' on' : ''}`} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <div className="areas">{d.areas.map((a) => <span key={a}>{a}</span>)}</div>
      <div className="uc-grid" aria-live="polite">
        {d.items.map((u, i) => (
          <article className="uc" key={d.slug + i} style={{ animationDelay: `${i * 0.05}s` }}>
            <span className="dept">{d.name}</span><h3 style={{ fontSize: 17.5 }}>{u[0]}</h3><p>{u[1]}</p>
            <div className="tools">{u[2].map((t) => <span key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 28 }}><Link className="link-arrow" href={`/ai-use-cases/#${d.slug}`}>See all {d.name.toLowerCase()} use cases <span>→</span></Link></div>
    </>
  );
}
