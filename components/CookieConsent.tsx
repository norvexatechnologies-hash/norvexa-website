'use client';
import { useEffect, useState } from 'react';

type Choice = { analytics: boolean; marketing: boolean; ts: number };
const apply = (c: Choice) => {
  const w = window as unknown as { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
  w.gtag?.('consent', 'update', {
    analytics_storage: c.analytics ? 'granted' : 'denied',
    ad_storage: c.marketing ? 'granted' : 'denied',
    ad_user_data: c.marketing ? 'granted' : 'denied',
    ad_personalization: c.marketing ? 'granted' : 'denied',
  });
  (w.dataLayer ||= []).push({ event: 'consent_update', consent_analytics: c.analytics, consent_marketing: c.marketing });
};

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [a, setA] = useState(true);
  const [m, setM] = useState(true);

  useEffect(() => {
    try { if (!localStorage.getItem('nx_consent')) setOpen(true); } catch { setOpen(true); }
    const reopen = (e: MouseEvent) => { if ((e.target as HTMLElement).closest('[data-cookie-settings]')) { e.preventDefault(); setCustom(true); setOpen(true); } };
    document.addEventListener('click', reopen);
    return () => document.removeEventListener('click', reopen);
  }, []);

  const save = (c: Omit<Choice, 'ts'>) => {
    const v = { ...c, ts: Date.now() };
    try { localStorage.setItem('nx_consent', JSON.stringify(v)); } catch {}
    apply(v); setOpen(false);
  };
  if (!open) return null;
  return (
    <div className="consent-bar" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <div>
        <b>We value your privacy</b>
        <p>We use cookies to measure site performance and, with your permission, to improve our marketing. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>
        {custom && (
          <div className="consent-opts">
            <label><input type="checkbox" checked disabled /> Essential (always on)</label>
            <label><input type="checkbox" checked={a} onChange={(e) => setA(e.target.checked)} /> Analytics</label>
            <label><input type="checkbox" checked={m} onChange={(e) => setM(e.target.checked)} /> Marketing</label>
          </div>
        )}
      </div>
      <div className="consent-btns">
        {custom ? (
          <button className="btn btn-primary" onClick={() => save({ analytics: a, marketing: m })}>Save choices</button>
        ) : (
          <>
            <button className="btn btn-ghost" onClick={() => save({ analytics: false, marketing: false })}>Reject all</button>
            <button className="btn btn-ghost" onClick={() => setCustom(true)}>Customise</button>
            <button className="btn btn-primary" onClick={() => save({ analytics: true, marketing: true })}>Accept all</button>
          </>
        )}
      </div>
    </div>
  );
}
