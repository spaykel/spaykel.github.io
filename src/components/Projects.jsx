import { projects } from '../data/portfolio.js';

const hasUrl = (url) => url && !url.startsWith('[Add');

export default function Projects() {
  return (
    <section className="section shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">Selected technical work.</h2>
        </div>
        <p>
          A focused look at projects spanning language design, artificial intelligence,
          mobile development, and full-stack engineering.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <div className="project-visual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                {hasUrl(project.githubUrl) ? <a href={project.githubUrl}>GitHub</a> : null}
                {hasUrl(project.demoUrl) ? <a href={project.demoUrl}>Demo</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
