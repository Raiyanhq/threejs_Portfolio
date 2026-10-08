export const workspaceModes = [
  {
    id: 'interface',
    label: 'Interface',
    color: '#b5efd2',
    title: 'The interface studio.',
    description: 'Slide the tiles. Bring the layout into focus.',
    chapter: '01 / THE MAKER’S DESK',
    mission: 'Restore the layout',
    instruction:
      'Slide a tile next to the empty space. Put 01–05 in order, with the space last.',
    success: 'Layout restored. Ready to ship.',
    badge: 'Interface architect',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    color: '#9dc9ff',
    title: 'The deployment district.',
    description: 'A floating city of systems. You connect the route.',
    chapter: '02 / ABOVE THE CLOUD',
    mission: 'Bring the system online',
    instruction:
      'Route a request: enter through Gateway, process in Compute, then save in Storage.',
    success: 'Deployment complete. All systems online.',
    badge: 'Cloud navigator',
  },
  {
    id: 'ai',
    label: 'Applied AI',
    color: '#d6b6ff',
    title: 'The signal constellation.',
    description: 'Find the patterns. Light up the network.',
    chapter: '03 / INSIDE THE NETWORK',
    mission: 'Connect matching signals',
    instruction:
      'Reveal two cards at a time. Match all three pairs to activate the constellation.',
    success: 'Patterns connected. The network is awake.',
    badge: 'Pattern finder',
  },
];

export const cloudNodes = [
  {
    id: 'gateway',
    label: 'Gateway',
    detail: 'Receive',
    position: [-4, -0.8, 0],
  },
  { id: 'compute', label: 'Compute', detail: 'Process', position: [0, 1, -1] },
  { id: 'storage', label: 'Storage', detail: 'Save', position: [4, -0.8, 0] },
];
export const tileLabels = [
  'Space',
  'Navigation',
  'Hero',
  'Projects',
  'Toolkit',
  'Contact',
];
export const signalSymbols = { spark: '✦', orbit: '◎', delta: '△' };
