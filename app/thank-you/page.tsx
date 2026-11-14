import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'Thank you', description: 'Your enquiry has been received.', path: '/thank-you/', noindex: true });

export default function Page() {
  return (
    <section className="notfound"><div style={{ maxWidth: 640 }}>
      <span className="eyebrow">Enquiry received</span>
      <h1 style={{ fontSize: 'clamp(38px,6vw,64px)', margin: '16px 0' }}>Thank you. <span className="grad-text">We&apos;ll be in touch.</span></h1>
      <p style={{ fontSize: 18, color: 'var(--muted)', marginBottom: 28 }}>A senior consultant will reply within one business day. In the meantime, see how AI is put to work across departments.</p>
      <div className="hero-ctas" style={{ justifyContent: 'center' }}><Link href="/ai-use-cases/" className="btn btn-primary">Explore AI use cases <span className="arr">→</span></Link><Link href="/insights/" className="btn btn-ghost">Read our insights</Link></div>
    </div></section>
  );
}
