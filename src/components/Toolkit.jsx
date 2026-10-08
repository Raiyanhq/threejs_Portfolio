import { useState } from 'react';
import { toolkitCategories } from '../constants';
import Icon from './Icon';
import { useDiscovery } from '../hooks/useDiscovery';

export default function Toolkit() {
  const [selected, setSelected] = useState('cloud');
  const { discover } = useDiscovery();
  const active = toolkitCategories.find((category) => category.id === selected);
  const choose = (id) => {
    setSelected(id);
    discover('toolkit');
  };
  return (
    <article
      id="toolkit"
      className="panel about-stack toolkit-card"
      aria-labelledby="toolkit-title"
    >
      <div className="card-top">
        <span className="card-kicker">MY TOOLKIT</span>
        <span className="toolkit-mark">
          <Icon name="code" size={19} />
        </span>
      </div>
      <h3 id="toolkit-title">
        The whole stack.
        <br />
        One curious mind.
      </h3>
      <div
        className="toolkit-tabs"
        role="group"
        aria-label="Toolkit categories"
      >
        {toolkitCategories.map((category) => (
          <button
            key={category.id}
            aria-pressed={selected === category.id}
            aria-controls="toolkit-page"
            onClick={() => choose(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div
        className="toolkit-page"
        id="toolkit-page"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="toolkit-page-heading">
          <span className="mono">
            {String(toolkitCategories.indexOf(active) + 1).padStart(2, '0')} /{' '}
            {active.label.toUpperCase()}
          </span>
          <span className="toolkit-page-dot" />
        </div>
        <h4>{active.caption}</h4>
        <p>{active.description}</p>
        {active.groups.map((group) => (
          <div className="toolkit-skill-group" key={group.label}>
            <h5>
              {group.label}
              <span>{group.items.length}</span>
            </h5>
            <div className="toolkit-chips">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={
                    ['Jenkins', 'AWS', 'Python', 'React.js'].includes(skill)
                      ? 'is-highlighted'
                      : ''
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="toolkit-summary">
        <Icon name="code" size={14} />
        <span>
          {active.groups.reduce(
            (total, group) => total + group.items.length,
            0,
          )}{' '}
          tools & concepts · {active.label}
        </span>
      </div>
    </article>
  );
}
