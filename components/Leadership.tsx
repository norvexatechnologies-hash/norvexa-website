import { PEOPLE } from '@/lib/content';

export function Leadership({ heading = true }: { heading?: boolean }) {
  return (
    <>
      {heading && (
        <div className="sec-head rv">
          <span className="eyebrow">Leadership</span>
          <h2>The people <span className="grad-text">behind Norvexa.</span></h2>
          <p>Experienced leaders in technology, delivery and international business, accountable for every engagement.</p>
        </div>
      )}
      <div className="people">
        {PEOPLE.map((p, i) => (
          <article className={`person rv ${['', 'd1', 'd2'][i % 3]}`} key={p.name} itemScope itemType="https://schema.org/Person">
            <div className="ph">{p.photo ? <img src={p.photo} alt={`${p.name}, ${p.role}`} width={300} height={400} loading="lazy" itemProp="image" /> : <span className="grad-text">{p.name[0]}</span>}</div>
            <div className="info"><h3 itemProp="name">{p.name}</h3><div className="role" itemProp="jobTitle">{p.role}</div><p>{p.bio}</p>{p.linkedin && <a className="li" href={p.linkedin} rel="noopener">LinkedIn ↗</a>}</div>
          </article>
        ))}
      </div>
    </>
  );
}
