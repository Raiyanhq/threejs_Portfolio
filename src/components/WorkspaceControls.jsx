import Icon from './Icon';

import { workspaceModes } from '../constants/workspace';

export default function WorkspaceControls({
  mode,
  visited,
  completed,
  onSelect,
}) {
  return (
    <div
      className="workspace-console"
      id="workspace-controls"
      style={{ '--signal-color': mode.color }}
      tabIndex={-1}
    >
      <div className="workspace-console-header">
        <span className="mono">THREE WORLDS / CHOOSE YOUR MISSION</span>
        <span className="workspace-signal-count">
          {completed.length} / 3 SOLVED
        </span>
      </div>
      <div
        className="workspace-modes"
        role="group"
        aria-label="Workspace modes"
      >
        {workspaceModes.map((item, index) => (
          <button
            key={item.id}
            aria-pressed={item.id === mode.id}
            aria-controls="workspace-stage workspace-mission"
            id={`world-${item.id}`}
            title={`${item.label}: ${item.mission}${visited.includes(item.id) ? ' · visited' : ''}`}
            onClick={() => onSelect(item)}
            style={{ '--mode-color': item.color }}
          >
            <span className="workspace-mode-node">
              {completed.includes(item.id) ? (
                <Icon name="check" size={12} />
              ) : (
                `0${index + 1}`
              )}
            </span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="workspace-readout" aria-live="polite" aria-atomic="true">
        <strong>{mode.title}</strong>
        <span>{mode.description}</span>
      </div>
    </div>
  );
}
