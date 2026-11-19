import Link from 'next/link';
import { AI_SOLUTIONS, SERVICES, REGIONS } from '@/lib/content';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <img src="/logo-light.png" alt="Norvexa Technologies Pvt Ltd" width={168} height={36} />
            <p>AI consulting, software engineering and digital transformation. {SITE.tagline}</p>
            <p style={{ marginTop: 14 }}>{SITE.address}</p>
            <p style={{ marginTop: 10 }}><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <div><h2 className="h5">AI solutions</h2><ul>
            {AI_SOLUTIONS.map((s) => <li key={s.slug}><Link href={`/ai-solutions/${s.slug}/`}>{s.title}</Link></li>)}
            <li><Link href="/ai-use-cases/">AI use cases</Link></li></ul></div>
          <div><h2 className="h5">Services</h2><ul>
            {SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.title}</Link></li>)}</ul></div>
          <div><h2 className="h5">Company</h2><ul>
            <li><Link href="/about/">About &amp; key people</Link></li><li><Link href="/industries/">Industries</Link></li>
            <li><Link href="/technologies/">Technologies</Link></li><li><Link href="/case-studies/">Case studies</Link></li><li><Link href="/app-cost-calculator/">App cost calculator</Link></li><li><Link href="/free-ai-checklist/">Free AI checklist</Link></li><li><Link href="/free-ai-audit/">Free AI audit call</Link></li><li><Link href="/insights/">Insights</Link></li>
            <li><Link href="/careers/">Careers</Link></li><li><Link href="/contact/">Contact</Link></li></ul></div>
          <div><h2 className="h5">Locations</h2><ul>
            {REGIONS.map((r) => <li key={r.slug}><Link href={`/${r.slug}/`}>{r.name}</Link></li>)}
            <li><Link href="/locations/">All locations</Link></li></ul></div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {SITE.legalName} All rights reserved.</span>
          <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}><Link href="/privacy-policy/">Privacy policy</Link><a href="#cookie-settings" data-cookie-settings>Cookie settings</a><Link href="/terms/">Terms &amp; conditions</Link><Link href="/sitemap.xml">Sitemap</Link></span>
          <div className="socials">
            <a href={SITE.social.linkedin} aria-label="LinkedIn" rel="noopener">in</a><a href={SITE.social.instagram} aria-label="Instagram" rel="noopener">ig</a>
            <a href={SITE.social.facebook} aria-label="Facebook" rel="noopener">f</a><a href={SITE.social.youtube} aria-label="YouTube" rel="noopener">▶</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
