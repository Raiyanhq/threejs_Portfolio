import Icon from './Icon';
import { cloudNodes, signalSymbols, tileLabels } from '../constants/workspace';

export default function WorkspaceMission({
  mode,
  game,
  onAction,
  onReset,
  earned,
  nextMode,
  onNext,
}) {
  return (
    <div
      className={`workspace-mission ${game.done ? 'mission-complete' : ''}`}
      id="workspace-mission"
      aria-labelledby="mission-title"
    >
      <div className="mission-heading">
        <span className="mono">
          {game.done ? 'MISSION COMPLETE' : 'PLAY THE WORKSPACE'}
        </span>
        <span className="mission-reward">
          {earned ? (
            <>
              <Icon name="check" size={12} /> BADGE EARNED
            </>
          ) : (
            '+100 XP'
          )}
        </span>
      </div>
      <div className="mission-title-row">
        <h3 id="mission-title">{game.done ? mode.success : mode.mission}</h3>
        <button
          className="mission-reset"
          onClick={onReset}
          aria-label={`Restart ${mode.label} game`}
        >
          Replay <span aria-hidden="true">↻</span>
        </button>
      </div>
      <p className="mission-instructions">
        {game.done
          ? `${mode.badge}. Try another world, or explore the work below.`
          : mode.instruction}
      </p>
      {mode.id === 'interface' && (
        <div
          className="layout-puzzle"
          role="group"
          aria-label="Sliding layout puzzle"
        >
          {game.tiles.map((tile, index) =>
            tile === 0 ? (
              <span
                className="layout-space"
                key="space"
                aria-label="Empty space"
              >
                {game.done ? (
                  <Icon name="check" size={18} />
                ) : (
                  <span aria-hidden="true">＋</span>
                )}
              </span>
            ) : (
              <button
                key={tile}
                className={`layout-tile ${tile === index + 1 ? 'tile-placed' : ''}`}
                disabled={game.done}
                onClick={() => onAction({ index })}
                aria-label={`Move tile ${tile}, ${tileLabels[tile]}, row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}`}
              >
                <span className="mono">0{tile}</span>
                <span>{tileLabels[tile]}</span>
                <span className="tile-wireframe" aria-hidden="true">
                  <i />
                  <i />
                </span>
              </button>
            ),
          )}
        </div>
      )}
      {mode.id === 'cloud' && (
        <div className="cloud-route-game">
          <div
            className="route-slots"
            aria-label={`${game.route.length} of 3 systems connected`}
          >
            {cloudNodes.map((node, index) => (
              <span
                className={game.route.includes(node.id) ? 'is-routed' : ''}
                key={node.id}
              >
                <span>
                  {game.route.includes(node.id) ? node.label : `0${index + 1}`}
                </span>
                {index < 2 && <Icon name="right" size={13} />}
              </span>
            ))}
          </div>
          <div className="route-controls">
            {[cloudNodes[2], cloudNodes[0], cloudNodes[1]].map((node) => (
              <button
                key={node.id}
                disabled={game.route.includes(node.id)}
                onClick={() => onAction({ node: node.id })}
              >
                <Icon
                  name={game.route.includes(node.id) ? 'check' : 'code'}
                  size={17}
                />
                <strong>{node.label}</strong>
                <span>{node.detail}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {mode.id === 'ai' && (
        <div
          className="signal-memory"
          role="group"
          aria-label="Match three pairs of signals"
        >
          {game.cards.map((card, index) => {
            const matched = game.matched.includes(index);
            const revealed = matched || game.revealed.includes(index);
            return (
              <button
                key={index}
                className={`${revealed ? 'is-revealed' : ''} ${matched ? 'is-matched' : ''}`}
                onClick={() => onAction({ index })}
                disabled={matched || game.done}
                aria-label={
                  matched
                    ? `${card}, matched`
                    : revealed
                      ? `${card}, revealed`
                      : `Reveal signal ${index + 1}`
                }
                aria-pressed={revealed}
              >
                <span className="memory-symbol" aria-hidden="true">
                  {revealed ? signalSymbols[card] : '✧'}
                </span>
                <small>
                  {matched
                    ? 'LINKED'
                    : revealed
                      ? card.toUpperCase()
                      : `SIGNAL 0${index + 1}`}
                </small>
              </button>
            );
          })}
        </div>
      )}
      <div className="mission-feedback" role="status">
        <span className="status-dot" />
        <span>{game.message}</span>
        <span className="mission-moves">
          {game.moves}{' '}
          {mode.id === 'ai'
            ? 'pairs tried'
            : mode.id === 'cloud'
              ? '/ 3'
              : 'moves'}
        </span>
      </div>
      {game.done && (
        <div className="mission-next">
          <span>
            <Icon name="check" size={15} /> {mode.badge}
          </span>
          {nextMode ? (
            <button onClick={onNext}>
              Enter {nextMode.label} <Icon name="right" size={14} />
            </button>
          ) : (
            <a href="#work">
              Explore the real builds <Icon name="right" size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
