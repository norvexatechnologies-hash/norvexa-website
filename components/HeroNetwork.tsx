'use client';
import { useEffect, useRef } from 'react';

/** Particle network that is attracted to and connects with the cursor. */
export function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!; const host = cv.parentElement!; const ctx = cv.getContext('2d')!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    let W = 0, H = 0, raf = 0;
    let pts: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const m = { x: -9999, y: -9999 };
    const size = () => {
      W = host.offsetWidth; H = host.offsetHeight; cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(90, Math.floor((W * H) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.8 }));
    };
    const mm = (e: MouseEvent) => { const b = host.getBoundingClientRect(); m.x = e.clientX - b.left; m.y = e.clientY - b.top; };
    const ml = () => { m.x = m.y = -9999; };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        const dx = m.x - p.x, dy = m.y - p.y, d = Math.hypot(dx, dy);
        if (d < 180 && d > 0) { p.vx += (dx / d) * 0.012; p.vy += (dy / d) * 0.012; }
        p.vx *= 0.985; p.vy *= 0.985;
        if (Math.abs(p.vx) < 0.08) p.vx += (Math.random() - 0.5) * 0.05;
        if (Math.abs(p.vy) < 0.08) p.vy += (Math.random() - 0.5) * 0.05;
        p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(29,78,216,${(1 - d / 130) * 0.16})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(a.x - m.x, a.y - m.y);
        if (dm < 200) { ctx.strokeStyle = `rgba(63,224,236,${(1 - dm / 200) * 0.55})`; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(m.x, m.y); ctx.stroke(); }
        ctx.fillStyle = dm < 200 ? 'rgba(63,200,236,.9)' : 'rgba(29,78,216,.35)'; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 7); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    size(); draw();
    window.addEventListener('resize', size); host.addEventListener('mousemove', mm); host.addEventListener('mouseleave', ml);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); host.removeEventListener('mousemove', mm); host.removeEventListener('mouseleave', ml); };
  }, []);
  return <canvas id="net" ref={ref} aria-hidden="true" />;
}
