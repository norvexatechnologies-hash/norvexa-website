'use client';
import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '@/lib/site';

/** Lead form → /api/contact.php on the Hostinger VPS (email via SMTP2GO, CSV log, optional CRM webhook:
 *  see public/api/config.php), with UTM/click-ID attribution and a GTM generate_lead event. */
export function ContactForm({ title = 'Book an intro' }: { title?: string }) {
  const [state, setState] = useState<'idle' | 'error' | 'sending' | 'failed'>('idle');
  const router = useRouter();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return; // honeypot
    const n = String(f.get('name') || '').trim(), em = String(f.get('email') || '').trim();
    if (!n || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em) || !f.get('consent')) { setState('error'); return; }
    const interests = f.getAll('interest').map(String);
    f.delete('interest'); f.set('interest', interests.join(', '));
    f.set('page', window.location.pathname);
    try {
      const attr = JSON.parse(sessionStorage.getItem('nx_attr') || '{}') as Record<string, string>;
      Object.entries(attr).forEach(([k, v]) => f.set(k, v));
      f.set('referrer', sessionStorage.getItem('nx_ref') || document.referrer || 'direct');
    } catch {}
    setState('sending');
    const body = new URLSearchParams(f as unknown as Record<string, string>).toString();
    try {
      const r = await fetch('/api/contact.php', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' }, body });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean };
      if (!r.ok || !j.ok) throw new Error(String(r.status));
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      (w.dataLayer ||= []).push({ event: 'generate_lead', form_name: 'contact', lead_interest: interests.join('|') || 'unspecified', lead_country: String(f.get('country') || ''), lead_budget: String(f.get('budget') || ''), value: 1, currency: 'USD' });
      router.push('/thank-you/');
    } catch { setState('failed'); }
  }

  return (
    <form className="lead" name="contact" onSubmit={submit} noValidate>
      <h3>{title}</h3>
      <div className="f2">
        <div className="fld"><label htmlFor="fn">Full name*</label><input id="fn" name="name" autoComplete="name" required /></div>
        <div className="fld"><label htmlFor="em">Work email*</label><input id="em" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="f2">
        <div className="fld"><label htmlFor="co">Company</label><input id="co" name="company" autoComplete="organization" /></div>
        <div className="fld"><label htmlFor="ph">Phone / WhatsApp</label><input id="ph" name="phone" type="tel" autoComplete="tel" /></div>
      </div>
      <div className="f2">
        <div className="fld"><label htmlFor="ct">Country</label>
          <select id="ct" name="country">{['United States', 'United Kingdom', 'UAE', 'India', 'Canada', 'Australia', 'Germany', 'Other'].map((c) => <option key={c}>{c}</option>)}</select></div>
        <div className="fld"><label htmlFor="bd">Budget</label>
          <select id="bd" name="budget">{['Not sure yet', 'Under $5k', '$5k–$15k', '$15k–$50k', '$50k+'].map((c) => <option key={c}>{c}</option>)}</select></div>
      </div>
      <div className="fld"><span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink2)' }}>I&apos;m interested in</span>
        <div className="chips-in">
          {['AI agents & assistant', 'AI audit', 'Web / mobile', 'Custom software / SaaS', 'Cloud & DevOps'].map((x, i) => (
            <span key={x}><input type="checkbox" id={`c${i}`} name="interest" value={x} /><label htmlFor={`c${i}`}>{x}</label></span>
          ))}
        </div>
      </div>
      <div className="fld"><label htmlFor="ms">Project details</label><textarea id="ms" name="message" placeholder="What would you like to achieve?" /></div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /> I agree to Norvexa processing my details to respond to this enquiry, as described in the <a href="/privacy-policy/" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.</label>
      {state === 'error' && <div className="err" style={{ display: 'block' }}>Please add your name, a valid email and your consent.</div>}
      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }} disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send enquiry'} <span className="arr">→</span>
      </button>
      {state === 'failed' && <div className="form-msg" style={{ display: 'block' }}>Sorry, something went wrong sending your enquiry. Please email <b>{SITE.email}</b> and we&apos;ll reply within one business day.</div>}
    </form>
  );
}
