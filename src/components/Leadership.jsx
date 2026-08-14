import { leadership } from '../data/portfolio.js';

export default function Leadership() {
  return (
    <section className="section shell compact-section" aria-labelledby="leadership-title">
      <div className="section-heading">
        <p className="eyebrow">Leadership</p>
        <h2 id="leadership-title">Involvement beyond the job title.</h2>
      </div>

      <div className="leadership-list">
        {leadership.map((item) => (
          <article className="leadership-item" key={item.organization}>
            <div>
              <h3>{item.organization}</h3>
              <p>{item.role}</p>
            </div>
            <div>
              <time>{item.period}</time>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
