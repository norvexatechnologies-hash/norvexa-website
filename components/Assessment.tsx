'use client';
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';

/** Candidate assessment for AI-first digital marketing roles. Talks to /api/assessment.php (scoring, storage, HR email). */

type Track = 'intern' | 'fresher' | 'experienced';
interface Mcq { id: string; q: string; o: { id: string; t: string }[] }
interface Task { id: string; title: string; q: string }
interface Session { token: string; email: string; name: string; track: Track; label: string; deadline: number; offset: number; mcq: Mcq[]; tasks: Task[]; tools: string[] }
interface Answers { mcq: Record<string, string>; tasks: Record<string, string>; tools: Record<string, number> }

const TRACKS: { id: Track; title: string; desc: string; mins: number }[] = [
  { id: 'intern', title: 'Internship', desc: 'Students and career-switchers', mins: 30 },
  { id: 'fresher', title: 'Fresher', desc: '0–1 year of experience', mins: 35 },
  { id: 'experienced', title: 'Experienced', desc: '1+ years in digital marketing', mins: 45 },
];
const LEVELS = ['Never', 'Basic', 'Regular', 'Advanced'];
const store = {
  get: (k: string) => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch { return null; } },
  set: (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del: (k: string) => { try { localStorage.removeItem(k); } catch {} },
};
const shuffle = <T,>(a: T[]) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const post = async (data: Record<string, string>) => {
  const r = await fetch('/api/assessment.php', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' }, body: new URLSearchParams(data).toString() });
  const j = await r.json().catch(() => ({}));
  return { status: r.status, ...(j as { ok?: boolean; error?: string } & Record<string, unknown>) };
};

export function Assessment() {
  const [stage, setStage] = useState<'intro' | 'loading' | 'test' | 'submitting' | 'done' | 'already'>('intro');
  const [track, setTrack] = useState<Track>('fresher');
  const [err, setErr] = useState('');
  const [s, setS] = useState<Session | null>(null);
  const [ans, setAns] = useState<Answers>({ mcq: {}, tasks: {}, tools: {} });
  const [left, setLeft] = useState(0);
  const integrity = useRef({ blur: 0, pastes: {} as Record<string, number> });
  const sent = useRef(false);
  const ref = useRef('');

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t = p.get('track');
    if (t === 'intern' || t === 'internship') setTrack('intern');
    else if (t === 'fresher' || t === 'experienced') setTrack(t);
    ref.current = p.get('ref') || p.get('utm_source') || '';
  }, []);

  // autosave answers so a refresh or dropped connection loses nothing
  useEffect(() => { if (s && stage === 'test') store.set(`nx_assess_${s.email}`, { ans, integrity: integrity.current }); }, [ans, s, stage]);

  const submit = useCallback(async (auto = false) => {
    if (!s || sent.current) return;
    sent.current = true;
    setStage('submitting');
    const r = await post({ action: 'submit', email: s.email, token: s.token, answers: JSON.stringify({ ...ans, integrity: { ...integrity.current, auto } }) }).catch(() => ({ status: 0, ok: false } as { status: number; ok?: boolean; error?: string }));
    if (r.ok || r.error === 'done') { store.del(`nx_assess_${s.email}`); setStage('done'); window.scrollTo({ top: 0 }); return; }
    sent.current = false;
    setStage('test');
    setErr('We could not submit your answers. Check your internet connection and press Submit again. Your answers are saved on this device.');
  }, [s, ans]);

  // countdown (server clock) + auto-submit at zero
  useEffect(() => {
    if (!s || stage !== 'test') return;
    const tick = () => {
      const ms = s.deadline - (Date.now() + s.offset);
      setLeft(Math.max(0, ms));
      if (ms <= 0) submit(true);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [s, stage, submit]);

  // count tab switches and warn before leaving
  useEffect(() => {
    if (stage !== 'test') return;
    const vis = () => { if (document.visibilityState === 'hidden') integrity.current.blur++; };
    const leave = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    document.addEventListener('visibilitychange', vis);
    window.addEventListener('beforeunload', leave);
    return () => { document.removeEventListener('visibilitychange', vis); window.removeEventListener('beforeunload', leave); };
  }, [stage]);

  async function start(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr('');
    const f = new FormData(e.currentTarget);
    const data: Record<string, string> = { action: 'start', track, ref: ref.current };
    f.forEach((v, k) => (data[k] = String(v).trim()));
    if (!data.name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email || '') || !data.consent) { setErr('Please add your name, a valid email and your consent.'); return; }
    data.email = data.email.toLowerCase();
    setStage('loading');
    const r = await post(data).catch(() => ({ status: 0 } as { status: number; ok?: boolean; error?: string }));
    if (r.error === 'done') { setStage('already'); return; }
    if (!r.ok) {
      setStage('intro');
      setErr(r.status === 429 ? 'Too many attempts from this network. Please try again in an hour.' : 'Something went wrong starting the assessment. Please try again.');
      return;
    }
    const j = r as unknown as Omit<Session, 'email' | 'offset'> & { now: number };
    const saved = store.get(`nx_assess_${data.email}`);
    if (saved?.ans) { setAns(saved.ans); integrity.current = saved.integrity || integrity.current; }
    setS({ ...j, email: data.email, offset: j.now - Date.now(), mcq: j.mcq.map((q) => ({ ...q, o: shuffle(q.o) })) });
    setStage('test');
    window.scrollTo({ top: 0 });
  }

  if (stage === 'done') return (
    <div className="as-card as-center">
      <span className="eyebrow">Submitted</span>
      <h2>Thank you{s ? `, ${s.name.split(' ')[0]}` : ''}. Your assessment is in.</h2>
      <p>Our hiring team reviews every submission. If your results match the role, we&apos;ll contact you by email or phone within 5 working days to schedule a live interview.</p>
    </div>
  );
  if (stage === 'already') return (
    <div className="as-card as-center">
      <span className="eyebrow">Already completed</span>
      <h2>This email has already completed the assessment.</h2>
      <p>Each candidate can take it once. Our hiring team has your results and will be in touch if you are shortlisted.</p>
    </div>
  );

  if (!s || stage === 'intro' || stage === 'loading') return (
    <form className="as-card" onSubmit={start} noValidate>
      <h2>Start your assessment</h2>
      <p className="as-sub">Choose the track that matches you, enter your details and begin. The timer starts as soon as you press Start.</p>
      <div className="as-tracks" role="radiogroup" aria-label="Track">
        {TRACKS.map((t) => (
          <button type="button" key={t.id} role="radio" aria-checked={track === t.id} className={`as-track${track === t.id ? ' on' : ''}`} onClick={() => setTrack(t.id)}>
            <b>{t.title}</b><span>{t.desc}</span><small>{t.mins} minutes</small>
          </button>
        ))}
      </div>
      <div className="f2">
        <div className="fld"><label htmlFor="as-n">Full name*</label><input id="as-n" name="name" autoComplete="name" required /></div>
        <div className="fld"><label htmlFor="as-e">Email*</label><input id="as-e" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="f2">
        <div className="fld"><label htmlFor="as-p">Phone / WhatsApp</label><input id="as-p" name="phone" type="tel" autoComplete="tel" /></div>
        <div className="fld"><label htmlFor="as-c">City</label><input id="as-c" name="city" autoComplete="address-level2" /></div>
      </div>
      {track === 'experienced' && (
        <div className="f2">
          <div className="fld"><label htmlFor="as-y">Years of experience</label><input id="as-y" name="years" inputMode="decimal" /></div>
          <div className="fld"><label htmlFor="as-r">Current role and company</label><input id="as-r" name="current_role" /></div>
        </div>
      )}
      <div className="f2">
        <div className="fld"><label htmlFor="as-l">LinkedIn URL</label><input id="as-l" name="linkedin" type="url" placeholder="https://linkedin.com/in/…" /></div>
        <div className="fld"><label htmlFor="as-w">Portfolio / work samples</label><input id="as-w" name="portfolio" type="url" placeholder="Drive, Notion, Behance, GitHub…" /></div>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
      <ul className="as-rules">
        <li><b>One attempt per email.</b> If your connection drops, open this link again with the same email: you&apos;ll continue where you left off, and the timer keeps running.</li>
        <li><b>Part 1, quick questions:</b> answer from your own knowledge.</li>
        <li><b>Part 2, practical tasks:</b> you may use ChatGPT, Claude or any AI tool, the way you would at work. Show your prompts and your own thinking; we look for judgement, not copy-paste.</li>
        <li><b>Part 3, your tool stack:</b> rate yourself honestly. We verify it in the interview.</li>
        <li>Answers save automatically and submit when time runs out. Switching tabs is recorded.</li>
      </ul>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /> I agree to Norvexa processing my details and answers to assess my job application, as described in the <a href="/privacy-policy/" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.</label>
      {err && <div className="err" style={{ display: 'block' }}>{err}</div>}
      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }} disabled={stage === 'loading'}>
        {stage === 'loading' ? 'Preparing your questions…' : 'Start the assessment'} <span className="arr">→</span>
      </button>
    </form>
  );

  const done = Object.keys(ans.mcq).length + Object.values(ans.tasks).filter((t) => t.trim().length > 20).length;
  const total = s.mcq.length + s.tasks.length;
  const mm = Math.floor(left / 60000), ss = Math.floor((left % 60000) / 1000);
  const setTask = (id: string, v: string) => setAns((a) => ({ ...a, tasks: { ...a.tasks, [id]: v } }));

  return (
    <div>
      <div className={`as-bar${left < 5 * 60000 ? ' warn' : ''}`}>
        <span><b>{s.label}</b> · {done}/{total} answered</span>
        <span className="as-time" aria-live="polite">{mm}:{String(ss).padStart(2, '0')}</span>
      </div>

      <section className="as-card">
        <span className="eyebrow">Part 1 of 3</span>
        <h2>Quick questions</h2>
        <p className="as-sub">{s.mcq.length} questions on AI tools, automation and performance marketing. Pick the best answer.</p>
        <ol className="as-mcq">
          {s.mcq.map((q) => (
            <li key={q.id}>
              <p>{q.q}</p>
              <div className="as-opts">
                {q.o.map((o) => (
                  <label key={o.id} className={ans.mcq[q.id] === o.id ? 'on' : ''}>
                    <input type="radio" name={q.id} checked={ans.mcq[q.id] === o.id} onChange={() => setAns((a) => ({ ...a, mcq: { ...a.mcq, [q.id]: o.id } }))} />
                    {o.t}
                  </label>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="as-card">
        <span className="eyebrow">Part 2 of 3</span>
        <h2>Practical tasks</h2>
        <p className="as-sub">Show how you actually work. AI tools are allowed: include the prompts you used and explain your own decisions.</p>
        {s.tasks.map((t, i) => (
          <div className="fld as-task" key={t.id}>
            <label htmlFor={`as-${t.id}`}>{i + 1}. {t.title}</label>
            <p className="as-q">{t.q}</p>
            <textarea id={`as-${t.id}`} value={ans.tasks[t.id] || ''} maxLength={8000} rows={8}
              onChange={(e) => setTask(t.id, e.target.value)}
              onPaste={() => { integrity.current.pastes[t.id] = (integrity.current.pastes[t.id] || 0) + 1; }} />
            <small className="as-count">{(ans.tasks[t.id] || '').length}/8000</small>
          </div>
        ))}
      </section>

      <section className="as-card">
        <span className="eyebrow">Part 3 of 3</span>
        <h2>Your AI and marketing tool stack</h2>
        <p className="as-sub">Advanced means you have built real workflows or campaigns with it. Be honest: we test it live in the interview.</p>
        <div className="as-tools">
          {s.tools.map((tool) => (
            <div className="as-tool" key={tool}>
              <span>{tool}</span>
              <div role="radiogroup" aria-label={tool}>
                {LEVELS.map((l, v) => (
                  <button type="button" key={l} role="radio" aria-checked={(ans.tools[tool] ?? 0) === v} className={(ans.tools[tool] ?? 0) === v ? 'on' : ''}
                    onClick={() => setAns((a) => ({ ...a, tools: { ...a.tools, [tool]: v } }))}>{l}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {err && <div className="err" style={{ display: 'block', marginBottom: 12 }}>{err}</div>}
      <button type="button" className="btn btn-primary as-submit" disabled={stage === 'submitting'}
        onClick={() => { if (window.confirm(`Submit now? You have answered ${done} of ${total}. You can't change answers after submitting.`)) submit(false); }}>
        {stage === 'submitting' ? 'Submitting…' : 'Submit assessment'} <span className="arr">→</span>
      </button>
    </div>
  );
}
