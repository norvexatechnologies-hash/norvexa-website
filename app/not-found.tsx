import Link from 'next/link';
export const metadata = { title: 'Page not found', robots: { index: false } };
export default function NotFound() {
  return (
    <section className="notfound"><div>
      <h1 className="grad-text">404</h1>
      <p style={{ fontSize: 20, color: 'var(--muted)', margin: '10px 0 28px' }}>This page doesn&apos;t exist or has moved.</p>
      <div className="hero-ctas" style={{ justifyContent: 'center' }}><Link href="/" className="btn btn-primary">Back to home <span className="arr">→</span></Link><Link href="/services/" className="btn btn-ghost">Our services</Link></div>
    </div></section>
  );
}
