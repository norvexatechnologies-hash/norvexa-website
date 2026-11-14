import { JsonLd } from './JsonLd';
import { faqLd } from '@/lib/seo';

export function Faq({ faqs, schema = true }: { faqs: [string, string][]; schema?: boolean }) {
  return (
    <div className="faq">
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>{q}<span className="pm" aria-hidden="true">+</span></summary>
          <p>{a}</p>
        </details>
      ))}
      {schema && <JsonLd data={faqLd(faqs)} />}
    </div>
  );
}
