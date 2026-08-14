import { profile } from '../data/portfolio.js';

export default function About() {
  return (
    <section className="section shell about-layout" id="about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">About</p>
        <h2 id="about-title">A technical generalist with a software foundation.</h2>
      </div>
      <figure className="about-photo">
        <img src="/about.jpg" alt="Sameer Paykel outdoors" />
      </figure>
      <div className="section-copy">
        <p>{profile.about}</p>
        <p>
          I care about building useful systems, communicating clearly, and understanding
          the operational context around the technology I work on.
        </p>
      </div>
    </section>
  );
}
