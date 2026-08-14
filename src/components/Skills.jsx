import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section className="section shell" id="skills" aria-labelledby="skills-title">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title">A compact technical toolkit.</h2>
        </div>
        <p>Tools and technologies I have used across software engineering, data work, and technical analysis.</p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <section className="skill-group" key={group.category} aria-labelledby={`skill-${group.category}`}>
            <h3 id={`skill-${group.category}`}>{group.category}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
