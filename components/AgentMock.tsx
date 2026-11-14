'use client';
import { useEffect, useState } from 'react';

const STEPS: [string, string, string, string][] = [['ok', '✓', 'Read 38 supplier invoices', '0.4s'], ['ok', '✓', 'Matched to purchase orders', '1.2s'], ['wait', '!', '2 price mismatches flagged', 'review'], ['run', '●', 'Posting approved entries to ERP', '…'], ['ok', '✓', 'Summary sent to Finance lead', 'done']];

export function AgentMock() {
  const [n, setN] = useState(STEPS.length);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => { i = (i + 1) % 11; setN(Math.min(i, STEPS.length)); }, 650);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mock" aria-label="AI agent processing invoices">
      <div className="top"><i /><i /><i /></div>
      {STEPS.slice(0, n).map((s) => (
        <div className="step-row" key={s[2]}><span className={`s ${s[0]}`}>{s[1]}</span>{s[2]}<em>{s[3]}</em></div>
      ))}
    </div>
  );
}
