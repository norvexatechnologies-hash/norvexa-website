'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AI_SOLUTIONS, SERVICES } from '@/lib/content';
import { Icon } from './Icons';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
        <div className="wrap nav-in">
          <Link href="/" className="brand" aria-label="Norvexa Technologies home">
            <img src="/logo-dark.png" alt="Norvexa Technologies Pvt Ltd" width={168} height={36} />
          </Link>
          <nav aria-label="Main">
            <ul className="menu">
              <li>
                <Link href="/ai-solutions/" aria-haspopup="true">AI solutions <i className="caret" /></Link>
                <div className="dd" style={{ width: 520 }}>
                  {AI_SOLUTIONS.map((s) => (
                    <Link key={s.slug} href={`/ai-solutions/${s.slug}/`}>
                      <span className="ic"><Icon name={s.icon} size={18} /></span>
                      <span><b>{s.title}</b><small>{s.short.split(',')[0].split('.')[0]}</small></span>
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link href="/services/" aria-haspopup="true">Services <i className="caret" /></Link>
                <div className="dd" style={{ width: 640 }}>
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}/`}>
                      <span className="ic"><Icon name={s.icon} size={18} /></span>
                      <span><b>{s.title}</b><small>{s.short.split(',')[0].split('.')[0]}</small></span>
                    </Link>
                  ))}
                </div>
              </li>
              <li><Link href="/ai-use-cases/">AI use cases</Link></li>
              <li><Link href="/industries/">Industries</Link></li>
              <li><Link href="/case-studies/">Case studies</Link></li>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/insights/">Insights</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="/contact/" className="btn btn-ghost" style={{ height: 44 }}>Contact</Link>
            <Link href="/contact/" className="btn btn-primary">Book an intro <span className="arr">→</span></Link>
            <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /></button>
          </div>
        </div>
      </header>
      <div className={`mobile${open ? ' open' : ''}`}>
        <Link href="/ai-solutions/">AI solutions</Link>
        <div className="sub">{AI_SOLUTIONS.map((s) => <Link key={s.slug} href={`/ai-solutions/${s.slug}/`}>{s.title}</Link>)}</div>
        <Link href="/services/">Services</Link>
        <div className="sub">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.title}</Link>)}</div>
        <Link href="/ai-use-cases/">AI use cases</Link>
        <Link href="/industries/">Industries</Link>
        <Link href="/technologies/">Technologies</Link>
        <Link href="/case-studies/">Case studies</Link>
        <Link href="/about/">About</Link>
        <Link href="/insights/">Insights</Link>
        <Link href="/careers/">Careers</Link>
        <Link href="/contact/">Contact</Link>
      </div>
    </>
  );
}
