import { profile } from '../data/portfolio.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer shell">
      <p>
        {profile.name} <span>{year}</span>
      </p>
      <div>
        <a href={profile.githubUrl}>GitHub</a>
        <a href={profile.linkedinUrl}>LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}
