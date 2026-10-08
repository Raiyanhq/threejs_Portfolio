import { lazy, useEffect, useState } from 'react';
import SceneBoundary from '../components/SceneBoundary';
import Icon from '../components/Icon';
import WorkspaceControls from '../components/WorkspaceControls';
import { workspaceModes } from '../constants/workspace';
import WorkspaceMission from '../components/WorkspaceMission';
import useWorkspaceGame from '../hooks/useWorkspaceGame';
import { useDiscovery } from '../hooks/useDiscovery';
const HeroScene = lazy(() => import('../components/HeroScene'));

export default function Hero() {
  const { enabled, setEnabled, discover, completed } = useDiscovery();
  const [mode, setMode] = useState(workspaceModes[0]);
  const [visited, setVisited] = useState(['interface']);
  const { games, act, reset } = useWorkspaceGame();
  const game = games[mode.id];
  const earned = workspaceModes.filter((item) => completed.includes(item.id));
  const nextMode = workspaceModes.find(
    (item) => item.id !== mode.id && !completed.includes(item.id),
  );
  useEffect(() => {
    workspaceModes.forEach((item) => {
      if (games[item.id].done) discover(item.id);
    });
  }, [games, discover]);
  const selectMode = (next) => {
    setMode(next);
    const signals = visited.includes(next.id) ? visited : [...visited, next.id];
    setVisited(signals);
  };
  return (
    <section
      id="home"
      className={`hero shell hero-mode-${mode.id}`}
      style={{ '--signal-color': mode.color }}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" /> SOFTWARE ENGINEER & CREATIVE BUILDER
        </span>
        <span className="mono hero-location">ATLANTA, GA · 33.75° N</span>
      </div>
      <div className="hero-copy">
        <p className="hero-intro">
          Hey, I’m Raiyan <span className="wave">✳</span>
        </p>
        <h1>
          Engineering ideas.
          <br />
          <span>Building what’s next.</span>
        </h1>
        <p className="hero-description">
          From intelligent applications to reliable cloud systems.
          <br className="desktop-break" /> I turn complex problems into things
          people can use.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <Icon name="right" />
          </a>
          <a className="text-link" href="#experience">
            The experience behind it <Icon />
          </a>
        </div>
        <div className="hero-discovery">
          <button
            id="discovery-start"
            onClick={() => setEnabled(!enabled)}
            aria-pressed={enabled}
          >
            <Icon name="compass" size={18} />{' '}
            {enabled ? 'Discovery trail on' : 'Take the discovery trail'}{' '}
            <Icon name={enabled ? 'check' : 'right'} size={14} />
          </button>
          <span>Three playable worlds. Seven discoveries.</span>
        </div>
        <div
          className="world-passport"
          role="group"
          aria-label={`${earned.length} of 3 world badges earned`}
        >
          <div className="passport-heading">
            <span className="mono">YOUR EXPLORER PASSPORT</span>
            <strong>{earned.length * 100} XP</strong>
          </div>
          <div className="passport-badges">
            {workspaceModes.map((item) => (
              <span
                key={item.id}
                className={completed.includes(item.id) ? 'is-earned' : ''}
                style={{ '--badge-color': item.color }}
                title={
                  completed.includes(item.id)
                    ? `${item.badge} earned`
                    : `Complete the ${item.label} mission`
                }
              >
                <Icon
                  name={completed.includes(item.id) ? 'check' : 'compass'}
                  size={15}
                />
                <span>{item.badge}</span>
              </span>
            ))}
          </div>
          <p>
            {earned.length === 3
              ? 'Three worlds mastered. Keep exploring the story behind them.'
              : 'Play at your own pace. Each completed world earns a badge.'}
          </p>
        </div>
      </div>
      <div className="hero-world" data-world={mode.id}>
        <div className="world-heading">
          <span className="mono">{mode.chapter}</span>
          <span className="world-state">
            <span className="status-dot" />
            {game.done ? 'MISSION COMPLETE' : 'INTERACTIVE WORLD'}
          </span>
        </div>
        <WorkspaceControls
          mode={mode}
          visited={visited}
          completed={earned.map((item) => item.id)}
          onSelect={selectMode}
        />
        <div className="workspace-stage" id="workspace-stage" key={mode.id}>
          <div className="world-atmosphere" aria-hidden="true" />
          <SceneBoundary
            className="hero-canvas"
            label={`${mode.title} Interactive 3D scene`}
            fallback={
              <div className={`world-fallback world-fallback-${mode.id}`}>
                <span aria-hidden="true">
                  {mode.id === 'interface'
                    ? '⌘'
                    : mode.id === 'cloud'
                      ? '☁'
                      : '✦'}
                </span>
                <strong>{mode.title}</strong>
                <p>Play the mission below to connect this world.</p>
              </div>
            }
          >
            {(visible) => (
              <HeroScene
                visible={visible}
                mode={mode}
                game={game}
                onAction={(payload) => act(mode.id, payload)}
              />
            )}
          </SceneBoundary>
          <div className="world-telemetry" aria-hidden="true">
            <span>
              {mode.id === 'interface'
                ? `${game.tiles.filter((tile, index) => tile > 0 && tile === index + 1).length}/5 BLOCKS ALIGNED`
                : mode.id === 'cloud'
                  ? `${game.route.length}/3 SYSTEMS ONLINE`
                  : `${game.matched.length / 2}/3 CONNECTIONS FOUND`}
            </span>
            <span>{game.done ? '● CONNECTED' : '● AWAITING INPUT'}</span>
          </div>
        </div>
        <div className="workspace-deck">
          <WorkspaceMission
            mode={mode}
            game={game}
            earned={completed.includes(mode.id)}
            onAction={(payload) => act(mode.id, payload)}
            onReset={() => reset(mode.id)}
            nextMode={nextMode}
            onNext={() => {
              if (!nextMode) return;
              selectMode(nextMode);
              const button = document.getElementById(`world-${nextMode.id}`);
              button?.focus({ preventScroll: true });
              button?.scrollIntoView({ block: 'center', behavior: 'auto' });
            }}
          />
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">
          FULL-STACK <span>/</span> CLOUD <span>/</span> APPLIED AI
        </span>
        <a href="#about" className="scroll-cue">
          Scroll to discover <span>↓</span>
        </a>
      </div>
    </section>
  );
}
