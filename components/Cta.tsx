import { ContactForm } from './ContactForm';
import { SITE } from '@/lib/site';

export function Cta({ title = 'Put AI to work in your company.', text = 'Tell us about your goals. A senior consultant will reply within one business day with next steps, never a sales script.' }: { title?: string; text?: string }) {
  return (
    <section className="cta" id="contact" style={{ paddingTop: 112 }}>
      <div className="wrap">
        <div className="cta-box">
          <div>
            <span className="eyebrow">Let&apos;s talk</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="contact-list">
              <div><i>✉</i>{SITE.email}</div>
              <div><i>☎</i>{SITE.phone}</div>
              <div><i>⌖</i>Kochi, India · Offices in UK, Finland, USA &amp; UAE</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
