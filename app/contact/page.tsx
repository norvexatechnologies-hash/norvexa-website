import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/lib/site';
import { REGIONS } from '@/lib/content';
import { Offices } from '@/components/Offices';

export const metadata = pageMeta({
  title: 'Contact Norvexa: Book an Intro or Request a Quote',
  description: 'Book an intro, request a quotation or ask about AI agents, software development and digital transformation. Norvexa replies within one business day.',
  path: '/contact/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your goals." lead="Book an intro, request a quotation or ask a question. A senior consultant will reply within one business day." crumbs={[{ name: 'Contact', path: '/contact/' }]} cta={false} />
      <section>
        <div className="wrap split" style={{ gridTemplateColumns: '.8fr 1.2fr' }}>
          <div className="prose">
            <h2>Get in touch</h2>
            <ul>
              <li><b>Email:</b> {SITE.email}</li>
              <li><b>Phone:</b> {SITE.phone}</li>
              <li><b>Office:</b> {SITE.address}</li>
            </ul>
            <h2>What happens next</h2>
            <ul>
              <li>We reply within one business day</li>
              <li>A 30-minute intro call with a senior consultant</li>
              <li>A written summary and recommended next step</li>
              <li>NDA available before detailed discussions</li>
            </ul>
            <h2>Markets we serve</h2>
            <p>{REGIONS.map((r) => r.name).join(', ')}.</p>
          </div>
          <div style={{ background: 'var(--ink)', borderRadius: 28, padding: 28 }}><ContactForm title="Send us a message" /></div>
        </div>
      </section>
      <section className="band"><div className="wrap"><Offices /></div></section>
    </>
  );
}
