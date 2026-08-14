import { profile } from '../data/portfolio.js';

const heroLinks = [
  { label: 'LinkedIn', href: profile.linkedinUrl },
  { label: 'GitHub', href: profile.githubUrl },
  { label: 'Resume', href: profile.resumeUrl },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export default function Hero() {
  return (
    <section className="hero shell section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software • Data • Strategy</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-lede">{profile.headline}</p>
        <div className="hero-actions" aria-label="Primary links">
          {heroLinks.map((link) => (
            <a key={link.label} className="button" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="hero-panel" aria-label="Professional highlights">
        <div>
          <span className="panel-label">Current</span>
          <strong>Strategic Operations Analyst</strong>
          <p>Lockheed Martin</p>
        </div>
        <div>
          <span className="panel-label">Foundation</span>
          <strong>Computer Science</strong>
          <p>Cal Poly San Luis Obispo</p>
        </div>
        <div>
          <span className="panel-label">Focus</span>
          <strong>Software, data, analysis</strong>
          <p>Practical systems with technical depth.</p>
        </div>
      </aside>
    </section>
  );
}
