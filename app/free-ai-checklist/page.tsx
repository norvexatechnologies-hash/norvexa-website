import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { LeadMagnetForm } from '@/components/LeadMagnetForm';
import { CHECKLIST, CHECKLIST_SCORING } from '@/lib/checklist';
import Link from 'next/link';

export const metadata = pageMeta({
  title: 'Free AI Checklist: Where Can AI Save Your Business Time?',
  description: 'Free 25-point checklist for business owners: find the tasks in enquiries, sales, finance, operations and HR where AI can save your team time. Download the PDF.',
  path: '/free-ai-checklist/',
});

export default function Page() {
  const preview = CHECKLIST.map((s) => ({ area: s.area, item: s.items[0] }));
  return (
    <>
      <PageHero eyebrow="Free checklist" title="Where can AI save your business time?" lead="A free 25-point checklist for owners and managers. Tick what sounds familiar, count your score, and see exactly where AI agents and automation would pay off first in your business." crumbs={[{ name: 'Free AI checklist', path: '/free-ai-checklist/' }]} cta={false} />
      <section style={{ paddingTop: 56 }}>
        <div className="wrap split">
          <div className="prose">
            <h2>What&apos;s inside</h2>
            <p>25 quick yes/no checks across the five areas where businesses lose the most time to repetitive work:</p>
            <ul>{CHECKLIST.map((s) => <li key={s.area}><b>{s.area}</b> ({s.items.length} checks)</li>)}</ul>
            <h3>A taste of the checklist</h3>
            <ul>{preview.map((p) => <li key={p.area}>{p.item}</li>)}</ul>
            <h3>How the score works</h3>
            <ul>{CHECKLIST_SCORING.map((s) => <li key={s.range}><b>{s.range}:</b> {s.text}</li>)}</ul>
            <p>Takes about five minutes. No technical knowledge needed.</p>
          </div>
          <aside>
            <LeadMagnetForm magnet="AI checklist download" title="Get the free checklist (PDF)" button="Send me the checklist"
              extras={[{ name: 'team', label: 'Team size', type: 'select', options: ['1–10', '11–50', '51–200', '200+'] }]}
              done={<><h3>Your checklist is ready 🎉</h3><p style={{ margin: '10px 0 18px' }}>Download it below. Scored 6 or more? Book a free 30-minute AI audit call and we&apos;ll show you where to start.</p>
                <a className="btn btn-primary" href="/downloads/norvexa-ai-checklist.pdf" download style={{ justifyContent: 'center' }}>Download the PDF <span className="arr">↓</span></a>
                <p style={{ marginTop: 14 }}><Link className="link-arrow" href="/free-ai-audit/">Book a free AI audit call <span>→</span></Link></p></>} />
          </aside>
        </div>
      </section>
    </>
  );
}
