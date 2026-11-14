import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({ title: 'Privacy Policy', description: `How ${SITE.legalName} collects, uses and protects personal data.`, path: '/privacy-policy/' });

// TEMPLATE: have this reviewed by your legal adviser before launch.
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lead="Last updated: November 2026" crumbs={[{ name: 'Privacy Policy', path: '/privacy-policy/' }]} cta={false} />
      <section><div className="wrap legal" style={{ maxWidth: 820 }}>
        <p>{SITE.legalName} (&quot;Norvexa&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what personal data we collect through this website, why we collect it and the choices you have.</p>
        <h2>1. Data we collect</h2>
        <ul><li>Information you submit through our forms, such as your name, work email, company, country and message.</li><li>Technical data such as IP address, browser type, pages visited and referring URLs, collected through cookies and analytics tools where you have consented.</li><li>Campaign data such as UTM parameters that tell us how you found us.</li></ul>
        <h2>2. How we use data</h2>
        <ul><li>To respond to enquiries and provide requested information or proposals.</li><li>To improve our website, content and services.</li><li>To send relevant updates where you have opted in. You can unsubscribe at any time.</li></ul>
        <h2>3. Legal bases</h2>
        <p>Where GDPR or UK GDPR applies, we process personal data on the basis of consent, legitimate interests in responding to business enquiries, and steps taken at your request before entering into a contract.</p>
        <h2>4. Sharing</h2>
        <p>We share data only with service providers who help us operate this website and our business (for example hosting, CRM, email and analytics providers), under appropriate contractual safeguards. We do not sell personal data.</p>
        <h2>5. International transfers</h2>
        <p>Data may be processed in countries other than your own. Where required, we use appropriate safeguards such as Standard Contractual Clauses.</p>
        <h2>6. Retention</h2>
        <p>We keep enquiry data for as long as needed to respond and maintain our business relationship, and then delete or anonymise it.</p>
        <h2>7. Your rights</h2>
        <p>Depending on your location, you may have rights to access, correct, delete, restrict or object to processing of your data, and to data portability. To exercise these rights, contact {SITE.email}.</p>
        <h2>8. Cookies</h2>
        <p>We use essential cookies to run the site and, with your consent, analytics and marketing cookies. You can change your preferences at any time.</p>
        <h2>9. Contact</h2>
        <p>Questions about this policy can be sent to {SITE.email}.</p>
      </div></section>
    </>
  );
}
