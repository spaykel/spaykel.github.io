import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section className="section shell" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">Professional work, structured for growth.</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="experience-item" key={item.company}>
            <div className="experience-meta">
              <span>{item.type}</span>
              <time>{item.period}</time>
            </div>
            <div className="experience-body">
              <h3>{item.company}</h3>
              <p className="role">{item.role}</p>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
