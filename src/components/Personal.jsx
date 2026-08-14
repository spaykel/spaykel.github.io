import { personal } from '../data/portfolio.js';

export default function Personal() {
  return (
    <section className="section shell personal-section" aria-labelledby="personal-title">
      <div>
        <p className="eyebrow">Personal</p>
        <h2 id="personal-title">{personal.title}</h2>
      </div>
      <p>{personal.body}</p>
    </section>
  );
}
