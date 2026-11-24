import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Assessment } from '@/components/Assessment';

// Private hiring link: shared with candidates directly, kept out of search and the sitemap.
// Pre-select a track with ?track=intern | fresher | experienced (and tag the source with &ref=naukri, linkedin…).
export const metadata = pageMeta({
  title: 'Digital Marketing Skills Assessment',
  description: 'Skills assessment for AI-first digital marketing roles at Norvexa: AI tools, marketing automation and performance marketing.',
  path: '/careers/assessment/',
  noindex: true,
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Careers · Digital marketing" title="AI marketing skills assessment."
        lead="We hire marketers who get results with AI: ChatGPT, Claude, Codex, automation tools and full-funnel performance marketing. This assessment shows us how you think and work."
        crumbs={[{ name: 'Careers', path: '/careers/' }, { name: 'Assessment', path: '/careers/assessment/' }]} cta={false} />
      <section>
        <div className="wrap as-wrap">
          <Assessment />
        </div>
      </section>
    </>
  );
}
