import { useEffect, useRef, useState } from 'react';
import { useDiscovery } from '../hooks/useDiscovery';
import Icon from './Icon';

const checkpoints = [
  {
    id: 'interface',
    title: 'Interface architect',
    hint: 'Restore the layout in Interface.',
    href: '#world-interface',
  },
  {
    id: 'cloud',
    title: 'Cloud navigator',
    hint: 'Route a deployment in Cloud.',
    href: '#world-cloud',
  },
  {
    id: 'ai',
    title: 'Pattern finder',
    hint: 'Match the signals in Applied AI.',
    href: '#world-ai',
  },
  {
    id: 'education',
    title: 'Find the foundation',
    hint: 'Expand my education details.',
    href: '#education-trigger',
  },
  {
    id: 'toolkit',
    title: 'Inspect the toolkit',
    hint: 'Choose a skill category.',
    href: '#toolkit',
  },
  {
    id: 'project',
    title: 'Go under the hood',
    hint: 'Open the details of any project.',
    href: '#work',
  },
  {
    id: 'experience',
    title: 'Follow the journey',
    hint: 'Select a role on my timeline.',
    href: '#experience',
  },
];

export default function DiscoveryTrail() {
  const { enabled, setEnabled, completed } = useDiscovery();
  const [open, setOpen] = useState(true);
  const toggle = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (enabled && open)
      map.current?.querySelector('button')?.focus({ preventScroll: true });
  }, [enabled, open]);
  const count = checkpoints.filter(({ id }) => completed.includes(id)).length;
  const next = checkpoints.find(({ id }) => !completed.includes(id));
  if (!enabled) return null;

  const close = () => {
    setOpen(false);
    toggle.current?.focus();
  };
  const navigate = (event, href) => {
    event.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (href.startsWith('#world-')) target.click();
      if (!target.matches('a, button, input, [tabindex]'))
        target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start', behavior: 'auto' });
    }
  };

  return (
    <aside
      className="discovery-dock"
      aria-label="Portfolio discovery trail"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          close();
        }
      }}
    >
      <div
        ref={map}
        id="discovery-map"
        className="discovery-map"
        hidden={!open}
      >
        <div className="discovery-map-heading">
          <span className="card-kicker">THE DISCOVERY TRAIL</span>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Collapse discovery trail"
          >
            <Icon name="minus" size={16} />
          </button>
        </div>
        <h2>
          {next ? 'A little curiosity goes far.' : 'Full-stack explorer.'}
        </h2>
        <p>
          {next
            ? 'Three playable worlds. Four discoveries in the work. Follow the clues and earn your explorer passport.'
            : 'All seven discoveries complete. Thanks for getting to know the person behind the code.'}
        </p>
        <ol className="discovery-checkpoints">
          {checkpoints.map((checkpoint, index) => {
            const done = completed.includes(checkpoint.id);
            return (
              <li key={checkpoint.id} className={done ? 'is-discovered' : ''}>
                <a
                  href={checkpoint.href}
                  onClick={(event) => navigate(event, checkpoint.href)}
                >
                  <span className="checkpoint-node">
                    {done ? (
                      <Icon name="check" size={14} />
                    ) : (
                      String(index + 1).padStart(2, '0')
                    )}
                  </span>
                  <span>
                    <strong>
                      {checkpoint.title}
                      <span className="sr-only">
                        {done ? ', completed' : ''}
                      </span>
                    </strong>
                    <small>{checkpoint.hint}</small>
                  </span>
                  <Icon name="right" size={15} />
                </a>
              </li>
            );
          })}
        </ol>
        {!next && (
          <a
            className="button button-primary discovery-reward"
            href="#contact"
            onClick={(event) => navigate(event, '#contact')}
          >
            Build something together <Icon name="arrow" size={16} />
          </a>
        )}
        <div className="discovery-map-footer">
          <span>No timer. Explore your way.</span>
          <button
            onClick={() => {
              setEnabled(false);
              document
                .getElementById('discovery-start')
                ?.focus({ preventScroll: true });
            }}
          >
            Exit trail
          </button>
        </div>
      </div>
      <button
        ref={toggle}
        className="discovery-toggle"
        aria-expanded={open}
        aria-controls="discovery-map"
        onClick={() => setOpen(!open)}
      >
        <span
          className="discovery-progress"
          style={{ '--progress': `${(count / checkpoints.length) * 100}%` }}
        >
          <Icon name={next ? 'compass' : 'check'} size={19} />
        </span>
        <span>
          <strong>{next ? 'Discovery trail' : 'All signals connected'}</strong>
          <small>
            {count} / {checkpoints.length} checkpoints ·{' '}
            {open ? 'Hide map' : 'Open map'}
          </small>
        </span>
        <Icon name={open ? 'minus' : 'plus'} size={16} />
      </button>
      <span className="sr-only" role="status">
        {count} of {checkpoints.length} discoveries completed.
        {next
          ? ` Next clue: ${next.hint}`
          : ' All signals connected. You are a full-stack explorer.'}
      </span>
    </aside>
  );
}
