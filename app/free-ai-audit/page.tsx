import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { LeadMagnetForm } from '@/components/LeadMagnetForm';
import { SITE } from '@/lib/site';
import Link from 'next/link';

export const metadata = pageMeta({
  title: 'Free 30-Minute AI Audit Call for Your Business',
  description: 'Book a free 30-minute AI audit call with a senior Norvexa consultant. Leave with 2–3 practical ideas for where AI and automation can save your team time.',
  path: '/free-ai-audit/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Free AI audit call" title="Find out where AI fits in your business, in 30 minutes." lead="A free video or phone call with a senior Norvexa consultant. You tell us how work flows today; we point out the two or three places where AI agents or automation would save the most time, and what it would take." crumbs={[{ name: 'Free AI audit call', path: '/free-ai-audit/' }]} cta={false} />
      <section style={{ paddingTop: 56 }}>
        <div className="wrap split">
          <div className="prose">
            <h2>What you get</h2>
            <ul>
              <li>A quick walk through how enquiries, sales, admin and operations run today</li>
              <li>2–3 concrete AI or automation ideas ranked by value and effort</li>
              <li>A rough idea of cost and timeline for the best idea</li>
              <li>A short written summary afterwards, whether or not you work with us</li>
            </ul>
            <h2>Who it&apos;s for</h2>
            <p>Owners and managers of businesses with roughly 5 to 500 people, in India, the GCC, the UK and beyond, who suspect their team spends too long on repetitive work.</p>
            <h2>How it works</h2>
            <ol>
              <li>Fill in the short form (2 minutes).</li>
              <li>We reply within one business day on WhatsApp or email with time slots.</li>
              <li>30-minute call on Google Meet, Zoom, Teams or phone.</li>
            </ol>
            <p>Not sure yet? Start with the <Link href="/free-ai-checklist/">free AI checklist</Link>.</p>
          </div>
          <aside>
            <LeadMagnetForm magnet="Free AI audit call" title="Book your free AI audit call" button="Request my free call"
              extras={[
                { name: 'industry', label: 'Industry', placeholder: 'e.g. clinic, trading, logistics' },
                { name: 'team', label: 'Team size', type: 'select', options: ['1–10', '11–50', '51–200', '200+'] },
                { name: 'drain', label: 'What takes your team the most time today?', type: 'textarea', placeholder: 'e.g. replying to WhatsApp enquiries, data entry from invoices' },
                { name: 'slot', label: 'Preferred time (IST)', type: 'select', options: ['Morning (10am–1pm)', 'Afternoon (2pm–5pm)', 'Evening (5pm–8pm)', 'Any time'] },
              ]}
              done={<><h3>Request received ✅</h3><p style={{ margin: '10px 0 18px' }}>We&apos;ll reply within one business day with time slots. Want to speed it up? Message us on WhatsApp.</p>
                <a className="btn btn-primary" href={`https://wa.me/${SITE.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Norvexa, I just requested a free AI audit call.')}`} target="_blank" rel="noopener" style={{ justifyContent: 'center' }}>WhatsApp us <span className="arr">→</span></a></>} />
          </aside>
        </div>
      </section>
    </>
  );
}
