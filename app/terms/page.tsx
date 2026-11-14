import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({ title: 'Terms & Conditions', description: `Terms and conditions for using the ${SITE.name} website, including intellectual property, liability and governing law.`, path: '/terms/' });

// TEMPLATE: have this reviewed by your legal adviser before launch.
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" lead="Last updated: November 2026" crumbs={[{ name: 'Terms & Conditions', path: '/terms/' }]} cta={false} />
      <section><div className="wrap legal" style={{ maxWidth: 820 }}>
        <p>These terms govern your use of the website operated by {SITE.legalName}. By using this website you agree to these terms.</p>
        <h2>1. Use of the website</h2><p>You may use this website for lawful purposes only. You must not attempt to gain unauthorised access to the website, its servers or any connected systems.</p>
        <h2>2. Intellectual property</h2><p>All content on this website, including text, graphics, logos and code, is owned by or licensed to Norvexa and protected by intellectual property laws. You may not reproduce it without written permission.</p>
        <h2>3. Information only</h2><p>Content on this website is provided for general information. It does not constitute professional advice and does not create a contract. Services are provided only under a signed agreement.</p>
        <h2>4. Third-party links</h2><p>This website may link to third-party sites. We are not responsible for their content or practices.</p>
        <h2>5. Limitation of liability</h2><p>To the extent permitted by law, Norvexa is not liable for any loss arising from use of this website.</p>
        <h2>6. Governing law</h2><p>These terms are governed by the laws of India, without prejudice to mandatory consumer protections in your country of residence.</p>
        <h2>7. Contact</h2><p>Questions about these terms can be sent to {SITE.email}.</p>
      </div></section>
    </>
  );
}
