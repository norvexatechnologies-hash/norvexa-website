const APPS: [string, string, string][] = [['Outlook', '#0078d4', 'OL'], ['Teams', '#5059c9', 'MT'], ['Slack', '#4a154b', 'SL'], ['Salesforce', '#00a1e0', 'SF'], ['SAP', '#0a6ed1', 'SAP'], ['Drive', '#1fa463', 'GD'], ['WhatsApp', '#25d366', 'WA'], ['Jira', '#0052cc', 'JI'], ['Excel', '#107c41', 'XL'], ['HubSpot', '#ff7a59', 'HS']];

export function Hub() {
  const pts = APPS.map((a, i) => {
    const ang = (i / APPS.length) * Math.PI * 2 - Math.PI / 2;
    return { a, x: +(50 + Math.cos(ang) * 41).toFixed(2), y: +(50 + Math.sin(ang) * 41).toFixed(2), i };
  });
  return (
    <div className="hub" aria-hidden="true">
      <svg className="lines" viewBox="0 0 100 100">
        {pts.map(({ x, y, i }) => (
          <g key={i}>
            <line x1="50" y1="50" x2={x} y2={y} stroke="#c9d6ee" strokeWidth=".3" strokeDasharray="1 1" />
            <circle r=".9" className="flow-dot">
              <animateMotion dur={`${2.2 + (i % 3) * 0.5}s`} repeatCount="indefinite" path={`M${x} ${y} L50 50`} begin={`${i * 0.3}s`} />
            </circle>
          </g>
        ))}
      </svg>
      <div className="center-node"><img src="/logo-light.png" alt="" width={140} height={30} /></div>
      {pts.map(({ a, x, y, i }) => (
        <div key={i} className="app" style={{ left: `${x}%`, top: `${y}%` }}>
          <b style={{ background: a[1] }}>{a[2]}</b><span>{a[0]}</span>
        </div>
      ))}
    </div>
  );
}
