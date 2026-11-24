import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Careers at Norvexa: AI, Engineering & Design Jobs',
  description: 'Careers at Norvexa in Kochi: AI engineering, full-stack and mobile development, design and business development roles for international clients.',
  path: '/careers/',
});

// TODO: replace with live openings (or connect to Sanity "job" documents)
const ROLES = [
  ['AI Engineer (LLM applications)', 'Engineering', 'Full-time · Hybrid'],
  ['Senior Full-Stack Developer (Next.js / Node.js)', 'Engineering', 'Full-time · Hybrid'],
  ['Mobile Developer (React Native / Flutter)', 'Engineering', 'Full-time · Hybrid'],
  ['Product Designer (UI/UX)', 'Design', 'Full-time · Hybrid'],
  ['Business Development Manager (International)', 'Growth', 'Full-time · Hybrid'],
];

// Digital marketing hiring runs through the online assessment instead of email applications.
const MARKETING = [
  ['Digital Marketing Executive (AI & Automation)', 'Experienced', 'experienced'],
  ['Digital Marketing Associate (AI-first)', 'Fresher', 'fresher'],
  ['Digital Marketing Intern (AI tools)', 'Internship', 'intern'],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build what's next with Norvexa." lead="Work on AI agents, platforms and products for clients across the USA, UK, UAE and Europe, with a team that values craft, ownership and learning." crumbs={[{ name: 'Careers', path: '/careers/' }]} cta={false} />
      <section>
        <div className="wrap">
          <div className="cards4" style={{ marginBottom: 72 }}>
            {[['Real impact', 'Ship work that changes how clients operate.'], ['Modern stack', 'LLMs, Next.js, cloud-native tooling.'], ['Global clients', 'Collaborate across six international markets.'], ['Grow fast', 'Mentorship, certifications and conference budget.']].map(([t, p]) => (
              <div className="mini" key={t}><h2 style={{ fontSize: 18, marginBottom: 8 }}>{t}</h2><p>{p}</p></div>
            ))}
          </div>
          <div className="sec-head"><h2 style={{ fontSize: 34 }}>Open roles</h2></div>
          <div style={{ display: 'grid', gap: 12 }}>
            {ROLES.map(([t, team, type]) => (
              <div className="job" key={t}>
                <div><h3>{t}</h3><div className="tags"><span className="tag">{team}</span><span className="tag">{type}</span></div></div>
                <a className="btn btn-ghost" href={`mailto:${SITE.email}?subject=${encodeURIComponent('Application: ' + t)}`}>Apply</a>
              </div>
            ))}
            {MARKETING.map(([t, level, track]) => (
              <div className="job" key={t}>
                <div><h3>{t}</h3><div className="tags"><span className="tag">Marketing</span><span className="tag">{level}</span><span className="tag">Apply via assessment</span></div></div>
                <Link className="btn btn-ghost" href={`/careers/assessment/?track=${track}`}>Take assessment</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, color: 'var(--muted)' }}>Don&apos;t see the right role? Send your CV to <b>{SITE.email}</b> or <Link href="/contact/" style={{ color: 'var(--blue)', fontWeight: 600 }}>get in touch</Link>.</p>
        </div>
      </section>
    </>
  );
}
