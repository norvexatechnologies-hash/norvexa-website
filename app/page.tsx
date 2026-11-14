import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { SERVICES, INDUSTRIES, REGIONS, HOME_FAQS } from '@/lib/content';
import { POSTS } from '@/lib/insights';
import { HeroNetwork } from '@/components/HeroNetwork';
import { Marquee } from '@/components/Marquee';
import { AgentMock } from '@/components/AgentMock';
import { UseCaseTabs } from '@/components/UseCaseTabs';
import { TechTabs } from '@/components/TechTabs';
import { Hub } from '@/components/Hub';
import { Faq } from '@/components/Faq';
import { Cta } from '@/components/Cta';
import { Icon } from '@/components/Icons';
import { Offices } from '@/components/Offices';
import { Leadership } from '@/components/Leadership';

export const metadata = {
  ...pageMeta({
    title: 'Norvexa Technologies | AI Development & Software Company',
    description: 'AI agent development, custom software, web and mobile apps from Norvexa Technologies, Kochi. AI and software partner for India, USA, UK, UAE and Europe.',
    path: '/',
  }),
  title: { absolute: 'Norvexa Technologies | AI Development & Software Company' },
};

const d = (i: number) => ['', 'd1', 'd2', 'd3'][i % 4];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="h1">
        <HeroNetwork />
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap hero-in">
          <div>
            <span className="eyebrow rv">AI development &amp; software company</span>
            <h1 id="h1" className="rv d1">AI in every part of how your <span className="grad-text">business runs.</span></h1>
            <p className="lead rv d2">Norvexa designs, builds and runs AI agents, assistants and software around your systems, your rules and your people, for growing companies across the USA, UK, UAE, Europe and beyond.</p>
            <div className="hero-ctas rv d3">
              <Link href="/contact/" className="btn btn-primary">Book an intro <span className="arr">→</span></Link>
              <Link href="/ai-solutions/ai-audit/" className="btn btn-ghost">See how the AI audit works</Link>
            </div>
            <div className="hero-meta rv d3">
              <div><i>✓</i>Runs on your cloud or servers</div><div><i>✓</i>You own the code &amp; data</div><div><i>✓</i>Human-approved actions</div>
            </div>
          </div>
          <div className="orbit rv d2" aria-hidden="true">
            <div className="ring r3" /><div className="ring r2" /><div className="ring r1" />
            <div className="core" data-depth="6"><img src="/xmark.png" alt="" style={{ width: '42%', height: 'auto' }} /></div>
            <div className="chip" style={{ left: '2%', top: '18%' }} data-depth="28"><b style={{ background: '#10a37f' }}>AI</b>LLM agents</div>
            <div className="chip" style={{ right: '-2%', top: '12%' }} data-depth="-22"><b style={{ background: '#0f172a' }}>N</b>Next.js</div>
            <div className="chip" style={{ left: '-4%', top: '56%' }} data-depth="-30"><b style={{ background: '#3776ab' }}>Py</b>Python &amp; ML</div>
            <div className="chip" style={{ right: '-6%', top: '48%' }} data-depth="34"><b style={{ background: '#ff9900' }}>AWS</b>Cloud</div>
            <div className="chip" style={{ left: '18%', bottom: '2%' }} data-depth="20"><b style={{ background: '#336791' }}>PG</b>PostgreSQL</div>
            <div className="chip" style={{ right: '8%', bottom: '6%' }} data-depth="-18"><b style={{ background: '#61dafb', color: '#0a1230' }}>Rx</b>React Native</div>
            <div className="chip" style={{ left: '34%', top: '-2%' }} data-depth="16"><b style={{ background: '#1d4ed8' }}>K8</b>Kubernetes</div>
            <div className="hero-card" style={{ left: '-14%', top: '32%' }} data-depth="40"><div className="t"><span className="pulse" />Invoice agent · live</div><b>142 invoices matched</b><div className="bar"><i /></div></div>
            <div className="hero-card" style={{ right: '-14%', top: '74%' }} data-depth="-36"><div className="t">Assistant</div>“Draft the Q3 renewal email for Acme” <span style={{ color: 'var(--blue)' }}>✓ drafted</span></div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* AI SOLUTIONS */}
      <section aria-labelledby="ai-h">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">AI solutions</span>
            <h2 id="ai-h">AI working inside your company.</h2>
            <p>Three ways AI goes to work at your company: agents that run processes, an assistant every team can use, and apps built around how you operate.</p>
          </div>
          <div className="cards3">
            <article className="card spot rv">
              <AgentMock />
              <h3>AI agents</h3>
              <p>Agents take on routine processes from start to finish: reading documents, checking records, updating systems. Your people stay in charge of every decision that matters.</p>
              <Link href="/ai-solutions/ai-agents/" className="link-arrow">Explore AI agents <span>→</span></Link>
            </article>
            <article className="card spot rv d1">
              <div className="mock" aria-hidden="true"><div className="top"><i /><i /><i /></div>
                <div className="tabs-mini"><span className="on">Sales</span><span>Finance</span><span>Ops</span></div>
                <div className="chatb u">Which accounts renew this month with open tickets?</div>
                <div className="chatb a">7 accounts. 3 have priority tickets older than 5 days. I&apos;ve drafted check-in notes for each.<small>Sources · CRM · Helpdesk</small></div>
                <div className="chatb a typing" style={{ width: 56 }}><span /><span /><span /></div>
              </div>
              <h3>Company assistant</h3>
              <p>One secure AI workspace for every team, connected to your CRM, ERP, docs and inbox. Dedicated spaces for Sales, Finance, Operations and more.</p>
              <Link href="/ai-solutions/company-assistant/" className="link-arrow">Explore the company assistant <span>→</span></Link>
            </article>
            <article className="card spot rv d2">
              <div className="mock" aria-hidden="true"><div className="top"><i /><i /><i /></div>
                <div className="kpis"><div className="kpi"><small>Orders today</small><b>1,284</b></div><div className="kpi"><small>Flagged by AI</small><b className="grad-text">23</b></div></div>
                <div className="spark"><svg viewBox="0 0 200 60" preserveAspectRatio="none"><defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stopColor="#5ef3f7" /><stop offset="1" stopColor="#1d4ed8" /></linearGradient><linearGradient id="sf" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#4a9fd8" stopOpacity=".25" /><stop offset="1" stopColor="#4a9fd8" stopOpacity="0" /></linearGradient></defs><path d="M0 48 L20 42 L40 45 L60 30 L80 34 L100 22 L120 26 L140 14 L160 18 L180 8 L200 10 L200 60 L0 60Z" fill="url(#sf)" /><path d="M0 48 L20 42 L40 45 L60 30 L80 34 L100 22 L120 26 L140 14 L160 18 L180 8 L200 10" fill="none" stroke="url(#sg)" strokeWidth="2.5" /></svg></div>
              </div>
              <h3>AI apps &amp; software</h3>
              <p>Web, mobile and SaaS products engineered around your workflows, with AI built in from day one, not bolted on later.</p>
              <Link href="/ai-solutions/ai-apps/" className="link-arrow">Explore AI apps <span>→</span></Link>
            </article>
          </div>
        </div>
      </section>

      {/* AUDIT */}
      <section className="audit" aria-labelledby="audit-h">
        <div className="wrap audit-grid">
          <div className="rv">
            <span className="eyebrow">Start here</span>
            <h2 id="audit-h" style={{ fontSize: 'clamp(32px,4.4vw,52px)', margin: '16px 0 18px' }}>Start with the AI audit.</h2>
            <p style={{ fontSize: 18, color: 'var(--muted)', marginBottom: 32 }}>Learn exactly where AI will pay off in your business, and walk away with a practical, prioritised roadmap to get there.</p>
            <div className="hero-ctas"><Link href="/contact/" className="btn btn-primary">Book an intro <span className="arr">→</span></Link><Link href="/ai-solutions/ai-audit/" className="btn btn-ghost">How the audit works</Link></div>
          </div>
          <div className="steps">
            {[['Map how work really happens', 'We sit with your teams and map processes, systems, data and the apps people use every day.', ['Teams', 'Processes', 'Tech stack', 'Apps']],
              ['Score every opportunity', 'Each candidate use case is scored on value, effort, risk and data readiness, so the order of work is obvious.', ['ROI', 'Feasibility', 'Risk']],
              ['Leave with a report and a roadmap', 'An audit report plus a phased AI roadmap: what to build first, what it costs, and how success will be measured.', ['Audit report', 'AI roadmap', 'Business case']]].map(([t, p, tags], i) => (
              <div className={`step rv ${d(i)}`} key={t as string}><div className="n">0{i + 1}</div><div><h3 style={{ fontSize: 19, marginBottom: 6 }}>{t}</h3><p>{p}</p><div className="tagrow">{(tags as string[]).map((x) => <span className="tag" key={x}>{x}</span>)}</div></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* PYRAMID */}
      <section aria-labelledby="pyr-h">
        <div className="wrap pyr-grid">
          <div className="rv">
            <span className="eyebrow">Where to begin</span>
            <h2 id="pyr-h" style={{ fontSize: 'clamp(32px,4.4vw,52px)', margin: '16px 0 18px' }}>What should AI do first at your company?</h2>
            <p style={{ fontSize: 18, color: 'var(--muted)' }}>Start at the base. Routine, high-volume work is where AI is reliable today and the payback is fastest. Each step up builds on the data, trust and habits created below it.</p>
            <div className="benefits">
              <div className="benefit"><span className="ic2"><Icon name="up" size={18} /></span><div><b>More capacity, same headcount</b><span>Teams take on more work without hiring for every spike.</span></div></div>
              <div className="benefit"><span className="ic2"><Icon name="bolt" size={18} /></span><div><b>Faster turnaround</b><span>Everyday requests move in minutes instead of days.</span></div></div>
              <div className="benefit"><span className="ic2"><Icon name="check" size={18} /></span><div><b>Consistent quality</b><span>The same standard applied every time, across every team.</span></div></div>
            </div>
          </div>
          <div className="pyramid rv d1" aria-label="AI adoption pyramid">
            <div className="tier t0"><b>What&apos;s next</b><small>Models keep raising the ceiling</small></div>
            <div className="tier t1"><b>Expert work</b><small>Strategy, new products, innovation</small></div>
            <div className="tier t2"><b>Judgement work</b><small>Pricing calls, exceptions, approvals</small></div>
            <div className="tier t3"><span className="now">Start here</span><b>Routine work</b><small>Data entry, matching, triage, reporting, follow-ups</small></div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="usecases" aria-labelledby="uc-h">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">AI use cases</span><h2 id="uc-h">AI at work in every department.</h2><p>Pick a team to see where AI takes on real work today, and the systems it plugs into.</p></div>
          <UseCaseTabs />
        </div>
      </section>

      {/* HUB */}
      <section aria-labelledby="hub-h">
        <div className="wrap hub-wrap">
          <div className="rv">
            <span className="eyebrow">No new tools to learn</span>
            <h2 id="hub-h" style={{ fontSize: 'clamp(32px,4.4vw,52px)', margin: '16px 0 18px' }}>Your teams stay in their apps. The AI comes to them.</h2>
            <p style={{ fontSize: 18, color: 'var(--muted)', marginBottom: 28 }}>Norvexa connects AI to the email, chat, CRM, ERP and documents your people already use. Answers, drafts and approvals show up where work already happens.</p>
            <div className="tagrow">{['Outlook & Gmail', 'Teams & Slack', 'Salesforce & HubSpot', 'SAP & NetSuite', 'SharePoint & Drive', 'WhatsApp Business'].map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
          <div className="rv d1"><Hub /></div>
        </div>
      </section>

      {/* CONTROL */}
      <section className="control" aria-labelledby="ctl-h">
        <div className="wrap">
          <div className="sec-head center rv"><span className="eyebrow">Security &amp; governance</span><h2 id="ctl-h">It stays in your control.</h2><p>Enterprise-grade guardrails are part of every build, not an add-on.</p></div>
          <div className="cards4">
            {([['server', 'Your infrastructure', 'Deploy on your own servers or your private cloud on AWS, Azure or GCP.'], ['lock', 'Role-based access', 'Each person sees only what their role permits, inherited from your existing identity system.'], ['log', 'Full audit trail', 'Every AI action is logged: what it read, what it did and who approved it.'], ['key', 'You own everything', 'Code, prompts, data and configuration belong to you. No lock-in, ever.']] as const).map(([ic, t, p], i) => (
              <div className={`mini rv ${d(i)}`} key={t}><div className="ic2"><Icon name={ic} /></div><h3 style={{ fontSize: 18, marginBottom: 8 }}>{t}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section aria-labelledby="ctx-h">
        <div className="wrap">
          <div className="sec-head center rv"><span className="eyebrow">How it works</span><h2 id="ctx-h">Built on your company&apos;s context.</h2><p>Generic AI gives generic answers. Ours works from your knowledge and your live business data, under your team&apos;s supervision.</p></div>
          <div className="ctx rv">
            <div className="ctx-box"><h3 style={{ fontSize: 16, marginBottom: 12 }}>👥 Your team</h3><ul><li>Asks, reviews &amp; approves</li><li>Sets rules &amp; limits</li><li>Handles the exceptions</li></ul></div>
            <div className="arrow-flow" />
            <div className="ctx-mid"><h3 style={{ fontSize: 18, marginBottom: 6 }}>Norvexa AI layer</h3><p>Durable knowledge (SOPs, pricing rules, org charts) plus live context (tickets, payments due, approvals pending).</p><div className="verbs">{['reads', 'drafts', 'cross-checks', 'routes', 'updates records'].map((v) => <span key={v}>{v}</span>)}</div></div>
            <div className="arrow-flow" />
            <div className="ctx-box"><h3 style={{ fontSize: 16, marginBottom: 12 }}>🔗 Your systems</h3><ul><li>CRM · ERP · HRMS</li><li>Email · Chat · Docs</li><li>Databases · APIs</li></ul></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'linear-gradient(180deg,var(--bg),var(--bg2))' }} aria-labelledby="svc-h">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Engineering services</span><h2 id="svc-h">Full-stack engineering for global businesses.</h2><p>Beyond AI, Norvexa is a complete product and engineering partner, from first wireframe to cloud operations.</p></div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className={`svc spot rv ${d(i)}${i === 0 ? ' feat' : ''}`}>
                <span className="num">0{i + 1}</span><span className="ic3"><Icon name={s.icon} /></span><h3>{s.title}</h3><p>{s.short}</p><span className="more">Explore {s.title} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section aria-labelledby="ind-h">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Industries we serve</span><h2 id="ind-h">Solutions shaped by your industry.</h2><p>Domain-aware AI and software for the sectors where we see the strongest returns.</p></div>
          <div className="ind-grid">
            {INDUSTRIES.map((x, i) => (
              <Link key={x.slug} href={`/industries/${x.slug}/`} className={`ind rv ${d(i)}`}><div className="e" aria-hidden="true">{x.emoji}</div><h3 style={{ fontSize: 16.5, marginBottom: 6 }}>{x.title}</h3><p>{x.short}</p></Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="tech" aria-labelledby="tech-h">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Technologies</span><h2 id="tech-h">A modern, proven technology stack.</h2><p>We choose production-ready tools that scale, and stay model-agnostic so you can use the AI providers your company approves.</p></div>
          <TechTabs />
          <div style={{ marginTop: 28 }}><Link href="/technologies/" className="link-arrow">View our full technology stack <span>→</span></Link></div>
        </div>
      </section>

      {/* MARKETS */}
      <section aria-labelledby="mk-h">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Global reach</span><h2 id="mk-h">Serving clients across six key markets.</h2><p>Delivery aligned to your time zone, with local compliance in mind.</p></div>
          <div className="markets">
            {REGIONS.map((r, i) => (
              <Link key={r.slug} href={`/${r.slug}/`} className={`mkt rv ${d(i)}`}><span className="code">/{r.slug}</span><b>{r.name}</b><span>{r.currency} · {r.timezone}</span></Link>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section style={{ paddingTop: 0 }} aria-label="Global offices">
        <div className="wrap"><Offices /></div>
      </section>

      {/* LEADERSHIP */}
      <section className="band" aria-label="Leadership">
        <div className="wrap"><Leadership /><div style={{ marginTop: 28 }}><Link href="/about/" className="link-arrow">More about Norvexa <span>→</span></Link></div></div>
      </section>

      {/* INSIGHTS */}
      <section aria-labelledby="ins-h">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Insights</span><h2 id="ins-h">Ideas to plan your next move.</h2></div>
          <div className="related" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {POSTS.map((p, i) => (
              <Link key={p.slug} href={`/insights/${p.slug}/`} className={`rel rv ${d(i)}`}><small>{p.category}</small><h3 style={{ fontSize: 17 }}>{p.title}</h3><p>{p.readMins} min read →</p></Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-h">
        <div className="wrap faq-grid">
          <div className="rv"><span className="eyebrow">FAQ</span><h2 id="faq-h" style={{ fontSize: 'clamp(32px,4.4vw,48px)', margin: '16px 0 18px' }}>Before you choose a technology partner.</h2><p style={{ color: 'var(--muted)', fontSize: 17 }}>Straight answers to the questions we hear most. Something else on your mind? <Link href="/contact/" style={{ color: 'var(--blue)', fontWeight: 600 }}>Ask us directly.</Link></p></div>
          <div className="rv d1"><Faq faqs={HOME_FAQS} /></div>
        </div>
      </section>

      <Cta />
    </>
  );
}
