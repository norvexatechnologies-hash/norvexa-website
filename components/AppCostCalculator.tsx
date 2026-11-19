'use client';
import { useMemo, useState } from 'react';
import { LeadMagnetForm } from './LeadMagnetForm';

const TYPES = [
  { id: 'web', label: 'Business website', lo: 1200, hi: 3000, wk: [3, 5] },
  { id: 'shop', label: 'E-commerce store', lo: 3500, hi: 9000, wk: [6, 10] },
  { id: 'portal', label: 'Web app / customer portal', lo: 8000, hi: 22000, wk: [10, 16] },
  { id: 'mobile', label: 'Mobile app', lo: 9000, hi: 24000, wk: [10, 18] },
  { id: 'bot', label: 'AI chatbot / WhatsApp assistant', lo: 5000, hi: 15000, wk: [6, 10] },
  { id: 'agent', label: 'AI agent / process automation', lo: 7000, hi: 20000, wk: [8, 14] },
  { id: 'saas', label: 'SaaS product (MVP)', lo: 15000, hi: 40000, wk: [12, 20] },
];
const SIZE = [{ id: 's', label: 'Small (up to 10 pages / screens)', m: 1 }, { id: 'm', label: 'Medium (10–25)', m: 1.3 }, { id: 'l', label: 'Large (25+)', m: 1.7 }];
const DESIGN = [{ id: 't', label: 'Clean template-based', m: 0.85 }, { id: 'c', label: 'Custom design', m: 1 }, { id: 'p', label: 'Premium design + branding', m: 1.25 }];
const PLAT = [{ id: 'one', label: 'Android or iOS only', m: 0.7 }, { id: 'both', label: 'Android + iOS', m: 1 }];
const FEATURES = [
  { id: 'acc', label: 'User accounts & login', lo: 800, hi: 1500 },
  { id: 'admin', label: 'Admin dashboard', lo: 1500, hi: 3500 },
  { id: 'pay', label: 'Online payments', lo: 1000, hi: 2500 },
  { id: 'book', label: 'Booking / scheduling', lo: 1000, hi: 2500 },
  { id: 'lang', label: 'Multilingual (e.g. Arabic, Malayalam)', lo: 800, hi: 2000 },
  { id: 'int', label: 'Integrations (CRM, ERP, WhatsApp, Tally…)', lo: 1500, hi: 4000 },
  { id: 'chat', label: 'Real-time chat / notifications', lo: 1200, hi: 3000 },
  { id: 'ai', label: 'AI features (search, assistant, document reading)', lo: 2500, hi: 7000 },
];
const CUR = [
  { id: 'INR', sym: '₹', r: 88 }, { id: 'USD', sym: '$', r: 1 }, { id: 'AED', sym: 'AED ', r: 3.67 },
  { id: 'SAR', sym: 'SAR ', r: 3.75 }, { id: 'GBP', sym: '£', r: 0.76 }, { id: 'EUR', sym: '€', r: 0.86 },
];

const round = (v: number) => { const p = Math.pow(10, Math.max(0, Math.floor(Math.log10(v)) - 1)); return Math.round(v / p) * p; };

export function AppCostCalculator() {
  const [type, setType] = useState('mobile');
  const [size, setSize] = useState('s');
  const [design, setDesign] = useState('c');
  const [plat, setPlat] = useState('both');
  const [feat, setFeat] = useState<string[]>(['acc', 'admin']);
  const [cur, setCur] = useState('INR');

  const est = useMemo(() => {
    const t = TYPES.find((x) => x.id === type)!;
    const m = SIZE.find((x) => x.id === size)!.m * DESIGN.find((x) => x.id === design)!.m * (type === 'mobile' ? PLAT.find((x) => x.id === plat)!.m : 1);
    const f = FEATURES.filter((x) => feat.includes(x.id));
    const lo = t.lo * m + f.reduce((a, x) => a + x.lo, 0);
    const hi = t.hi * m + f.reduce((a, x) => a + x.hi, 0);
    const c = CUR.find((x) => x.id === cur)!;
    const fmt = (v: number) => c.sym + round(v * c.r).toLocaleString(cur === 'INR' ? 'en-IN' : 'en-US');
    const wk = [Math.round(t.wk[0] * Math.sqrt(m) + f.length * 0.5), Math.round(t.wk[1] * Math.sqrt(m) + f.length)];
    return { text: `${fmt(lo)} – ${fmt(hi)}`, weeks: `${wk[0]}–${wk[1]} weeks`, type: t.label, features: f.map((x) => x.label) };
  }, [type, size, design, plat, feat, cur]);

  const toggle = (id: string) => setFeat((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const summary = () => `Calculator: ${est.type}; size ${SIZE.find((x) => x.id === size)!.label}; design ${DESIGN.find((x) => x.id === design)!.label}${type === 'mobile' ? '; ' + PLAT.find((x) => x.id === plat)!.label : ''}; features: ${est.features.join(', ') || 'none'}; estimate ${est.text} (${cur}), ${est.weeks}`;

  const radio = (name: string, opts: { id: string; label: string }[], val: string, set: (v: string) => void) => (
    <div className="calc-opts">{opts.map((o) => (
      <label key={o.id} className={`calc-opt${val === o.id ? ' on' : ''}`}><input type="radio" name={name} checked={val === o.id} onChange={() => set(o.id)} />{o.label}</label>
    ))}</div>
  );

  return (
    <div className="split" style={{ gridTemplateColumns: '1.15fr .85fr' }}>
      <div className="calc">
        <h3>1. What do you want to build?</h3>{radio('type', TYPES, type, setType)}
        {type === 'mobile' && <><h3>Platforms</h3>{radio('plat', PLAT, plat, setPlat)}</>}
        <h3>2. How big is it?</h3>{radio('size', SIZE, size, setSize)}
        <h3>3. Design level</h3>{radio('design', DESIGN, design, setDesign)}
        <h3>4. Features you need</h3>
        <div className="calc-opts">{FEATURES.map((f) => (
          <label key={f.id} className={`calc-opt${feat.includes(f.id) ? ' on' : ''}`}><input type="checkbox" checked={feat.includes(f.id)} onChange={() => toggle(f.id)} />{f.label}</label>
        ))}</div>
      </div>
      <aside style={{ display: 'grid', gap: 20, position: 'sticky', top: 100 }}>
        <div className="side-card calc-result" aria-live="polite">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="eyebrow" style={{ margin: 0 }}>Estimated budget</span>
            <select value={cur} onChange={(e) => setCur(e.target.value)} aria-label="Currency" className="calc-cur">{CUR.map((c) => <option key={c.id}>{c.id}</option>)}</select>
          </div>
          <div className="calc-amt">{est.text}</div>
          <p style={{ margin: '6px 0 0' }}>Typical timeline: <b>{est.weeks}</b></p>
          <p style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 10 }}>Indicative range for planning only, based on typical Norvexa projects. Currency figures use approximate exchange rates. Your exact quote depends on detailed requirements.</p>
        </div>
        <LeadMagnetForm magnet="App cost calculator" title="Get a detailed quote for this" button="Send me a detailed quote" message={summary}
          done={<><h3>Thanks, we&apos;ve got your project details ✅</h3><p style={{ marginTop: 10 }}>A senior consultant will review them and send you a detailed quote and plan within one business day.</p></>} />
      </aside>
    </div>
  );
}
