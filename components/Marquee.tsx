import { APPS, MODELS, LIGHT_BG, type Tech } from '@/lib/content';

const Pill = ({ t }: { t: Tech }) => (
  <div className="pill"><b style={{ background: t[1], color: LIGHT_BG.includes(t[1]) ? '#0a1230' : '#fff' }}>{t[2]}</b>{t[0]}</div>
);

export function Marquee() {
  return (
    <div className="marquee">
      <p className="mq-label">Works with the tools your teams already use</p>
      <div className="track" aria-hidden="true">{[...APPS, ...APPS].map((t, i) => <Pill key={i} t={t} />)}</div>
      <div className="track rev" aria-hidden="true">{[...MODELS, ...MODELS].map((t, i) => <Pill key={i} t={t} />)}</div>
      <p className="sr">Integrations include {APPS.map((a) => a[0]).join(', ')}. Technologies include {MODELS.map((a) => a[0]).join(', ')}.</p>
    </div>
  );
}
