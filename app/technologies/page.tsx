import { TECH, LIGHT_BG } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';

export const metadata = pageMeta({
  title: 'Our Technology Stack: AI, Web, Mobile & Cloud',
  description: 'Technologies we use: OpenAI, Claude, Gemini, Next.js, React, Node.js, Python, React Native, Flutter, AWS, Azure, Google Cloud, Kubernetes and PostgreSQL.',
  path: '/technologies/',
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Technologies" title="A modern, proven technology stack." lead="We choose production-ready tools that scale and stay model-agnostic, so you can use the AI providers your company approves." crumbs={[{ name: 'Technologies', path: '/technologies/' }]} />
      <section>
        <div className="wrap">
          {Object.entries(TECH).map(([k, list]) => (
            <div key={k} className="dept-block rv">
              <h2>{k}</h2>
              <div className="tech-grid" style={{ marginTop: 20 }}>
                {list.map((t) => <div className="tch" key={t[0]}><b style={{ background: t[1], color: LIGHT_BG.includes(t[1]) ? '#0a1230' : '#fff' }}>{t[2]}</b>{t[0]}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
