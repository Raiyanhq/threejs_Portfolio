import { lazy, useState } from 'react';
import { workExperiences, experienceGroups } from '../constants';
import SectionHeading from '../components/SectionHeading';
import SceneBoundary from '../components/SceneBoundary';
import Icon from '../components/Icon';
import { useDiscovery } from '../hooks/useDiscovery';
const DeveloperScene = lazy(() => import('../components/DeveloperScene'));

export default function Experience() {
  const { discover } = useDiscovery();
  const [expanded, setExpanded] = useState(
    () => new Set([workExperiences[0].id]),
  );
  const [selected, setSelected] = useState(workExperiences[0]);
  const [reacting, setReacting] = useState(false);
  const select = (role) => {
    discover('experience');
    setSelected(role);
    setReacting(true);
    setExpanded((previous) => {
      const next = new Set(previous);
      if (next.has(role.id)) next.delete(role.id);
      else next.add(role.id);
      return next;
    });
  };
  return (
    <section id="experience" className="section shell">
      <SectionHeading
        number="03"
        eyebrow="EXPERIENCE & IMPACT"
        title={
          <>
            Every role. A new perspective<span className="accent">.</span>
          </>
        }
        description="A path through research, data, and software engineering—with a return to keep building."
      />
      <div className="experience-layout">
        <aside className="experience-aside panel">
          <div className="card-top">
            <span className="card-kicker">A CAREER IN MOTION</span>
            <span className="status-dot" />
          </div>
          <SceneBoundary
            className="developer-scene"
            label="3D developer character reacts to experience selection"
          >
            {(visible) => (
              <DeveloperScene
                visible={visible}
                animation={reacting ? selected.animation : 'idle'}
              />
            )}
          </SceneBoundary>
          <div className="impact-stat" aria-live="polite">
            <strong>{selected.highlight.value}</strong>
            <span>{selected.highlight.label}</span>
            <small>{selected.name}</small>
          </div>
          <div className="career-signal">
            <span className="mono">THE THROUGH LINE</span>
            <p>
              Understand the problem.
              <br />
              Build something that matters.
            </p>
            <div className="career-dates">
              <span>2023</span>
              <span className="career-track">
                <i />
                <i />
                <i />
              </span>
              <span>2026</span>
            </div>
          </div>
          <p className="scene-hint">
            Select a role to explore the details <Icon name="right" size={15} />
          </p>
        </aside>
        <div className="career-timeline">
          <div className="timeline-key">
            <span className="status-dot" />
            <span>Most recent first</span>
            <span>2023 — 2026</span>
          </div>
          {experienceGroups.map((company) => (
            <section
              key={company.id}
              className="company-group"
              aria-labelledby={`company-${company.id}`}
            >
              <div className="company-heading">
                <div className="company-logo">
                  <img
                    src={company.icon}
                    alt=""
                    loading="lazy"
                    width="46"
                    height="46"
                  />
                </div>
                <div>
                  <h3 id={`company-${company.id}`}>{company.name}</h3>
                  <p>
                    {company.note}
                    <span> · </span>
                    {company.range}
                  </p>
                </div>
              </div>
              {company.journey && (
                <div
                  className="company-journey"
                  aria-label="Career progression at Cox Communications"
                >
                  {company.journey.map((step, index) => (
                    <span key={step}>
                      {index > 0 && <Icon name="right" size={12} />}
                      <span
                        className={
                          index === company.journey.length - 1
                            ? 'journey-current'
                            : ''
                        }
                      >
                        {step}
                      </span>
                    </span>
                  ))}
                </div>
              )}
              <div className="company-roles">
                {workExperiences
                  .filter((role) => role.group === company.id)
                  .map((role) => {
                    const open = expanded.has(role.id);
                    return (
                      <article
                        key={role.id}
                        className={`timeline-role ${open ? 'is-expanded' : ''} ${selected.id === role.id ? 'is-selected' : ''}`}
                      >
                        <span className="timeline-node" aria-hidden="true" />
                        <h4>
                          <button
                            className="role-trigger"
                            id={`trigger-${role.id}`}
                            aria-expanded={open}
                            aria-controls={`detail-${role.id}`}
                            onClick={() => select(role)}
                            onPointerEnter={() => {
                              if (selected.id === role.id) setReacting(true);
                            }}
                            onPointerLeave={() => setReacting(false)}
                            onBlur={() => setReacting(false)}
                          >
                            <span className="role-summary">
                              <span className="role-period">
                                {role.duration}
                                {role.badge && (
                                  <span className="return-badge">
                                    {role.badge}
                                  </span>
                                )}
                              </span>
                              <span className="role-title">{role.pos}</span>
                              <span className="role-meta">
                                {role.employment} <span>·</span> {role.tenure}
                              </span>
                              <span className="role-location">
                                {role.location}
                              </span>
                            </span>
                            <span className="role-expand">
                              <Icon name={open ? 'minus' : 'plus'} size={17} />
                            </span>
                          </button>
                        </h4>
                        <div
                          className="role-detail"
                          id={`detail-${role.id}`}
                          role="region"
                          aria-labelledby={`trigger-${role.id}`}
                          hidden={!open}
                        >
                          {role.summary && (
                            <p className="role-context">{role.summary}</p>
                          )}
                          {role.bullets.length > 0 && (
                            <ul>
                              {role.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                          {role.tags.length > 0 && (
                            <div className="tags">
                              {role.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
