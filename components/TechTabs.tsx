'use client';
import { useState } from 'react';
import { TECH, LIGHT_BG } from '@/lib/content';

export function TechTabs() {
  const keys = Object.keys(TECH);
  const [k, setK] = useState(keys[0]);
  return (
    <>
      <div className="tech-tabs" role="tablist">
        {keys.map((x) => <button key={x} role="tab" aria-selected={x === k} className={x === k ? 'on' : ''} onClick={() => setK(x)}>{x}</button>)}
      </div>
      <div className="tech-grid">
        {TECH[k].map((t, i) => (
          <div className="tch" key={k + t[0]} style={{ animationDelay: `${i * 0.035}s` }}>
            <b style={{ background: t[1], color: LIGHT_BG.includes(t[1]) ? '#0a1230' : '#fff' }}>{t[2]}</b>{t[0]}
          </div>
        ))}
      </div>
    </>
  );
}
