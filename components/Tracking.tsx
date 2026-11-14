'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

type DL = { push: (o: Record<string, unknown>) => void };
type W = { dataLayer?: DL; gtag?: (...a: unknown[]) => void };
/** Push to GTM's dataLayer and send the same event to GA4 via gtag (when GA4 is loaded). */
const dl = (): DL => ({
  push: (o) => {
    const w = window as unknown as W;
    (w.dataLayer ||= [] as unknown as DL).push(o);
    const { event, ...params } = o as { event?: string };
    if (event && event !== 'virtual_page_view') w.gtag?.('event', event, params);
  },
});

/** Pushes clean, named events to the GTM dataLayer. Configure GA4 / Ads / Meta / LinkedIn tags in GTM against these events. */
export function Tracking() {
  const path = usePathname();
  const first = useRef(true);

  // virtual page views for client-side navigation (GTM trigger: event = virtual_page_view)
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    dl().push({ event: 'virtual_page_view', page_path: path, page_location: window.location.href, page_title: document.title });
  }, [path]);

  useEffect(() => {
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a,button') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const text = (a.textContent || '').trim().slice(0, 80);
      const base = { link_url: href, link_text: text, page_path: window.location.pathname };
      if (href.startsWith('tel:')) dl().push({ event: 'click_phone', ...base });
      else if (href.startsWith('mailto:')) dl().push({ event: 'click_email', ...base });
      else if (href.includes('wa.me') || a.classList.contains('wa')) dl().push({ event: 'click_whatsapp', ...base });
      else if (/facebook\.com|instagram\.com|linkedin\.com|youtube\.com/.test(href)) dl().push({ event: 'click_social', ...base });
      else if (/book an intro|request a quot|discuss your|send enquiry/i.test(text)) dl().push({ event: 'cta_click', cta_text: text, ...base });
    };
    document.addEventListener('click', click, true);

    // scroll depth 25/50/75/90
    const marks = new Set<number>();
    const scroll = () => {
      const h = document.documentElement; const pct = ((h.scrollTop + innerHeight) / h.scrollHeight) * 100;
      [25, 50, 75, 90].forEach((m) => { if (pct >= m && !marks.has(m)) { marks.add(m); dl().push({ event: 'scroll_depth', percent: m, page_path: location.pathname }); } });
    };
    addEventListener('scroll', scroll, { passive: true });
    return () => { document.removeEventListener('click', click, true); removeEventListener('scroll', scroll); };
  }, []);
  return null;
}
