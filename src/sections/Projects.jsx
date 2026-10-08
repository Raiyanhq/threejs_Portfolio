import { lazy, useState } from 'react';
import { myProjects, moreProjects } from '../constants';
import SectionHeading from '../components/SectionHeading';
import SceneBoundary from '../components/SceneBoundary';
import Icon from '../components/Icon';
import { useMotion } from '../hooks/useMotion';
import { useDiscovery } from '../hooks/useDiscovery';
const ProjectScene = lazy(() => import('../components/ProjectScene'));
const filters = ['All projects', 'AI & Data', 'Web', 'Mobile'];

export default function Projects() {
  const { motion } = useMotion();
  const { discover } = useDiscovery();
  const [filter, setFilter] = useState('All projects');
  const [selectedId, setSelectedId] = useState(myProjects[0].id);
  const [playDemo, setPlayDemo] = useState(false);
  const projects = myProjects.filter(
    (project) => filter === 'All projects' || project.filter === filter,
  );
  const index = Math.max(
    0,
    projects.findIndex((project) => project.id === selectedId),
  );
  const project = projects[index];
  const select = (next) => {
    setSelectedId(projects[(next + projects.length) % projects.length].id);
    setPlayDemo(false);
  };
  const changeFilter = (next) => {
    setFilter(next);
    const matches = myProjects.filter(
      (item) => next === 'All projects' || item.filter === next,
    );
    if (!matches.some((item) => item.id === selectedId))
      setSelectedId(matches[0].id);
    setPlayDemo(false);
  };
  return (
    <section id="work" className="section shell">
      <SectionHeading
        number="02"
        eyebrow="SELECTED WORK"
        title={
          <>
            Ideas, made tangible<span className="accent">.</span>
          </>
        }
        description="AI companions, collaborative mobile apps, and interactive web experiences. A closer look at what I build."
      />
      <div className="project-browser-bar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((name) => (
            <button
              key={name}
              aria-pressed={filter === name}
              onClick={() => changeFilter(name)}
            >
              {name}
              <span>
                {name === 'All projects'
                  ? myProjects.length
                  : myProjects.filter((item) => item.filter === name).length}
              </span>
            </button>
          ))}
        </div>
        <span className="project-count mono">
          {String(projects.length).padStart(2, '0')} SELECTED BUILDS
        </span>
      </div>
      <div
        className="project-tabs curated-tabs"
        role="group"
        aria-label="Select a project"
      >
        {projects.map((item, i) => (
          <button
            key={item.id}
            onClick={() => select(i)}
            aria-pressed={i === index}
          >
            <span>
              {String(
                myProjects.findIndex((p) => p.id === item.id) + 1,
              ).padStart(2, '0')}
            </span>
            <span className="project-tab-label">
              <strong>{item.title}</strong>
              <small>{item.category}</small>
            </span>
            <Icon size={16} />
          </button>
        ))}
      </div>
      <div
        className="project-showcase panel"
        style={{ '--project-accent': project.accent }}
      >
        <div className="project-info" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{project.category}</p>
          <div className="project-brand-heading">
            <img src={project.logo} alt="" width="50" height="50" />
            <h3>{project.title}</h3>
          </div>
          <p className="project-role">{project.role}</p>
          <p className="project-description">{project.desc}</p>
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <Icon name="check" size={13} />
                {highlight}
              </li>
            ))}
          </ul>
          <details
            className="project-details"
            key={project.id}
            onToggle={(event) => {
              if (event.currentTarget.open) discover('project');
            }}
          >
            <summary>
              Under the hood <Icon name="plus" size={16} />
            </summary>
            <p>{project.subdesc}</p>
          </details>
          <div className="project-technologies">
            {project.tags.map((tag) => (
              <span key={tag.name}>
                {tag.path && (
                  <img
                    src={tag.path}
                    alt=""
                    loading="lazy"
                    width="18"
                    height="18"
                  />
                )}
                {tag.name}
              </span>
            ))}
          </div>
          <a
            className="project-source"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            Explore the code <Icon />
            <span className="sr-only"> on GitHub (opens in a new tab)</span>
          </a>
          <div className="project-pagination">
            <span className="mono">
              <strong>{String(index + 1).padStart(2, '0')}</strong> /{' '}
              {String(projects.length).padStart(2, '0')}
            </span>
            <div>
              <button
                className="icon-button"
                onClick={() => select(index - 1)}
                aria-label="Previous project"
                disabled={projects.length === 1}
              >
                <Icon name="left" />
              </button>
              <button
                className="icon-button"
                onClick={() => select(index + 1)}
                aria-label="Next project"
                disabled={projects.length === 1}
              >
                <Icon name="right" />
              </button>
            </div>
          </div>
        </div>
        <div className="project-visual">
          <div className="project-visual-top">
            <span className="mono">{project.year}</span>
            <span className="mono">
              {playDemo ? 'PROJECT DEMO' : 'PROJECT IDENTITY'}{' '}
              <span className="status-dot" />
            </span>
          </div>
          <div className="project-glow" aria-hidden="true" />
          <SceneBoundary
            className="project-canvas"
            label={`Interactive 3D display for ${project.title}`}
            fallback={
              <div className="scene-placeholder">
                <img src={project.logo} alt="" width="90" height="90" />
                <p>{project.title}</p>
                <span>{project.overview.focus}</span>
              </div>
            }
          >
            {(visible) => (
              <ProjectScene
                visible={visible}
                project={project}
                texture={project.texture}
                playDemo={playDemo}
              />
            )}
          </SceneBoundary>
          <div className="project-visual-bottom">
            <span>Drag sideways to explore</span>
            {project.texture ? (
              <button
                className="demo-button"
                onClick={() => setPlayDemo(!playDemo)}
                aria-pressed={playDemo}
                disabled={!motion && !playDemo}
                title={
                  !motion
                    ? 'Enable animations in the navigation to play videos'
                    : undefined
                }
              >
                <Icon name={playDemo ? 'pause' : 'play'} size={14} />
                {playDemo
                  ? 'Stop demo'
                  : motion
                    ? 'Play demo'
                    : 'Animations paused'}
              </button>
            ) : (
              <a
                className="demo-button"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                View repository <Icon size={14} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="workbench-heading">
        <span className="card-kicker">MORE FROM THE WORKBENCH</span>
        <a
          className="text-link"
          href="https://github.com/Raiyanhq?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          All repositories <Icon size={16} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="workbench-grid">
        {moreProjects.map((item) => (
          <a
            className="workbench-card panel"
            href={item.href}
            key={item.title}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-top">
              <span className="card-kicker">{item.category}</span>
              <Icon />
            </div>
            <div className="workbench-brand">
              <img
                src={item.logo}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <h3>{item.title}</h3>
            </div>
            <p>{item.desc}</p>
            <span className="workbench-cta">
              View project <Icon name="right" size={16} />
              <span className="sr-only"> on GitHub (opens in a new tab)</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
