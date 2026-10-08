import { useReducer } from 'react';
import { cloudNodes } from '../constants/workspace';

const initialBoard = [4, 1, 2, 0, 5, 3];
const initialCards = ['spark', 'orbit', 'delta', 'orbit', 'spark', 'delta'];
const adjacent = (a, b) =>
  Math.abs(Math.floor(a / 3) - Math.floor(b / 3)) +
    Math.abs((a % 3) - (b % 3)) ===
  1;
const solved = (tiles) =>
  tiles.every((tile, index) => tile === (index + 1) % 6);
const initialState = {
  interface: {
    tiles: initialBoard,
    moves: 0,
    done: false,
    message: 'Start with the tile beside the empty space.',
  },
  cloud: {
    route: [],
    moves: 0,
    done: false,
    message: 'Awaiting a request. Select Gateway to begin.',
  },
  ai: {
    cards: initialCards,
    revealed: [],
    matched: [],
    moves: 0,
    done: false,
    message: 'Six signals. Three hidden connections.',
  },
};

function reducer(state, action) {
  const current = state[action.mode];
  if (action.type === 'reset')
    return {
      ...state,
      [action.mode]: {
        ...initialState[action.mode],
        ...(action.mode === 'interface' ? { tiles: action.board } : {}),
        ...(action.mode === 'ai' ? { cards: action.cards } : {}),
      },
    };
  if (current.done) return state;
  if (action.mode === 'interface') {
    const empty = current.tiles.indexOf(0);
    if (!adjacent(empty, action.index))
      return {
        ...state,
        interface: {
          ...current,
          message:
            'That tile is too far away. Choose one directly beside the space.',
        },
      };
    const tiles = [...current.tiles];
    [tiles[empty], tiles[action.index]] = [tiles[action.index], tiles[empty]];
    const done = solved(tiles);
    return {
      ...state,
      interface: {
        tiles,
        done,
        moves: current.moves + 1,
        message: done
          ? 'Layout restored. Interface architect earned.'
          : `Tile ${tiles[empty]} moved. Keep arranging 01–05.`,
      },
    };
  }
  if (action.mode === 'cloud') {
    const expected = cloudNodes[current.route.length];
    if (action.node !== expected.id)
      return {
        ...state,
        cloud: {
          ...current,
          message: `Not connected yet. ${expected.label} is the next stop.`,
        },
      };
    const route = [...current.route, action.node];
    const done = route.length === cloudNodes.length;
    return {
      ...state,
      cloud: {
        route,
        done,
        moves: current.moves + 1,
        message: done
          ? 'Request delivered. Cloud navigator earned.'
          : `${expected.label} online. Next stop: ${cloudNodes[route.length].label}.`,
      },
    };
  }
  if (action.mode === 'ai') {
    if (
      current.matched.includes(action.index) ||
      current.revealed.includes(action.index)
    )
      return state;
    const revealed =
      current.revealed.length === 2
        ? [action.index]
        : [...current.revealed, action.index];
    const pair = revealed.length === 2;
    const match =
      pair && current.cards[revealed[0]] === current.cards[revealed[1]];
    const matched = match ? [...current.matched, ...revealed] : current.matched;
    const done = matched.length === 6;
    return {
      ...state,
      ai: {
        ...current,
        revealed,
        matched,
        done,
        moves: current.moves + (pair ? 1 : 0),
        message: done
          ? 'Constellation activated. Pattern finder earned.'
          : match
            ? 'Connection found. Find the next pair.'
            : pair
              ? 'Different signals. Choose another card to try again.'
              : 'One signal revealed. Find its match.',
      },
    };
  }
  return state;
}

export default function useWorkspaceGame() {
  const [games, dispatch] = useReducer(reducer, initialState);
  const act = (mode, payload) => dispatch({ type: 'play', mode, ...payload });
  const reset = (mode) => {
    // Shuffle through legal moves so every sliding puzzle is solvable.
    const board = [1, 2, 3, 4, 5, 0];
    let previous = -1;
    for (let i = 0; i < 20; i++) {
      const empty = board.indexOf(0);
      const choices = board
        .map((_, index) => index)
        .filter((index) => adjacent(empty, index) && index !== previous);
      const next = choices[Math.floor(Math.random() * choices.length)];
      [board[empty], board[next]] = [board[next], board[empty]];
      previous = empty;
    }
    const cards = [...initialCards];
    for (let i = cards.length - 1; i > 0; i--) {
      const next = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[next]] = [cards[next], cards[i]];
    }
    dispatch({
      type: 'reset',
      mode,
      board: solved(board) ? initialBoard : board,
      cards,
    });
  };
  return { games, act, reset };
}
