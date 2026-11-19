'use client';
import { useState, type FormEvent, type ReactNode } from 'react';
import { SITE } from '@/lib/site';

type Extra = { name: string; label: string; type?: 'text' | 'select' | 'textarea'; options?: string[]; placeholder?: string };

/** Short lead-magnet form → /api/contact.php. Fires generate_lead with form_name = magnet and shows `done` in place. */
export function LeadMagnetForm({ magnet, title, button, extras = [], message, done }: {
  magnet: string; title: string; button: string; extras?: Extra[]; message?: () => string; done: ReactNode;
}) {
  const [state, setState] = useState<'idle' | 'error' | 'sending' | 'failed' | 'done'>('idle');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return;
    const n = String(f.get('name') || '').trim(), em = String(f.get('email') || '').trim();
    if (!n || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em) || !f.get('consent')) { setState('error'); return; }
    const lines = extras.map((x) => `${x.label}: ${f.get(x.name) || '-'}`);
    if (message) lines.push(message());
    extras.forEach((x) => f.delete(x.name));
    f.set('interest', magnet);
    f.set('message', lines.join('\n'));
    f.set('page', window.location.pathname);
    try {
      const attr = JSON.parse(sessionStorage.getItem('nx_attr') || '{}') as Record<string, string>;
      Object.entries(attr).forEach(([k, v]) => f.set(k, v));
      f.set('referrer', sessionStorage.getItem('nx_ref') || document.referrer || 'direct');
    } catch {}
    setState('sending');
    try {
      const r = await fetch('/api/contact.php', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' }, body: new URLSearchParams(f as unknown as Record<string, string>).toString() });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean };
      if (!r.ok || !j.ok) throw new Error(String(r.status));
      const w = window as unknown as { dataLayer?: Record<string, unknown>[]; gtag?: (...a: unknown[]) => void };
      const lead = { form_name: magnet, lead_interest: magnet, lead_country: String(f.get('country') || ''), value: 1, currency: 'INR' };
      (w.dataLayer ||= []).push({ event: 'generate_lead', ...lead });
      w.gtag?.('event', 'generate_lead', lead);
      setState('done');
    } catch { setState('failed'); }
  }

  if (state === 'done') return <div className="lead lm-done">{done}</div>;

  return (
    <form className="lead" onSubmit={submit} noValidate>
      <h3>{title}</h3>
      <div className="f2">
        <div className="fld"><label htmlFor="lm-n">Full name*</label><input id="lm-n" name="name" autoComplete="name" required /></div>
        <div className="fld"><label htmlFor="lm-e">Email*</label><input id="lm-e" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="f2">
        <div className="fld"><label htmlFor="lm-p">WhatsApp / phone</label><input id="lm-p" name="phone" type="tel" autoComplete="tel" /></div>
        <div className="fld"><label htmlFor="lm-c">Company</label><input id="lm-c" name="company" autoComplete="organization" /></div>
      </div>
      <div className="fld"><label htmlFor="lm-ct">Country</label>
        <select id="lm-ct" name="country">{['India', 'UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain', 'United Kingdom', 'United States', 'Other'].map((c) => <option key={c}>{c}</option>)}</select></div>
      {extras.map((x) => (
        <div className="fld" key={x.name}><label htmlFor={`lm-${x.name}`}>{x.label}</label>
          {x.type === 'select' ? <select id={`lm-${x.name}`} name={x.name}>{x.options!.map((o) => <option key={o}>{o}</option>)}</select>
            : x.type === 'textarea' ? <textarea id={`lm-${x.name}`} name={x.name} placeholder={x.placeholder} />
            : <input id={`lm-${x.name}`} name={x.name} placeholder={x.placeholder} />}
        </div>
      ))}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to Norvexa contacting me about this request, as described in the <a href="/privacy-policy/" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.</span></label>
      {state === 'error' && <div className="err" style={{ display: 'block' }}>Please add your name, a valid email and your consent.</div>}
      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }} disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : button} <span className="arr">→</span>
      </button>
      {state === 'failed' && <div className="form-msg" style={{ display: 'block' }}>Sorry, something went wrong. Please WhatsApp us on <b>{SITE.phone}</b> or email <b>{SITE.email}</b>.</div>}
    </form>
  );
}
