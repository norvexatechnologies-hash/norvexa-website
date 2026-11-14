'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Custom cursor, card spotlight, scroll reveal and cursor parallax. Pure enhancement:
 *  all content is rendered in HTML and visible without JavaScript. */
export function Effects() {
  const path = usePathname();

  useEffect(() => {
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    const fine = window.matchMedia('(pointer:fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    let mx = -100, my = -100, rx = -100, ry = -100, raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot) dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
      tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5;
      const c = (e.target as HTMLElement).closest<HTMLElement>('.spot,.svc');
      if (c) { const b = c.getBoundingClientRect(); c.style.setProperty('--mx', `${e.clientX - b.left}px`); c.style.setProperty('--my', `${e.clientY - b.top}px`); }
    };
    const over = (e: MouseEvent) => ring?.classList.toggle('hover', !!(e.target as HTMLElement).closest('a,button,.svc,.chip,.filter,.pill,.app,.tch,summary,label'));
    const loop = () => {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      if (ring) ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      const t = performance.now() / 1000;
      document.querySelectorAll<HTMLElement>('[data-depth]').forEach((el, i) => {
        const d = +(el.dataset.depth || 0);
        el.style.transform = `translate3d(${cx * d}px,${cy * d + (reduce ? 0 : Math.sin(t * 0.9 + i) * 5)}px,0)`;
      });
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move, { passive: true });
    if (fine) document.addEventListener('mouseover', over);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  return (<><div className="cursor-dot" aria-hidden="true" /><div className="cursor-ring" aria-hidden="true" /></>);
}
