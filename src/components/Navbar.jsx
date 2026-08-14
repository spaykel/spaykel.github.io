import { useEffect, useState } from 'react';
import { navigation, profile } from '../data/portfolio.js';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem('theme');
  } catch {
    storedTheme = null;
  }

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // Theme still changes for the current session if storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sameer Paykel home">
          <span>{profile.initials}</span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions" aria-label="External links">
          <a href={profile.githubUrl} aria-label="GitHub profile">
            GitHub
          </a>
          <a href={profile.linkedinUrl} aria-label="LinkedIn profile">
            LinkedIn
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
            onClick={toggleTheme}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb" />
            </span>
            <span className="theme-toggle-label">{isDark ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
