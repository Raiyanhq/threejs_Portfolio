import { createContext, useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const MotionContext = createContext(null);

export function MotionProvider({ children }) {
  const reducedMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });
  const [override, setOverride] = useState(null);
  const motion = override ?? !reducedMotion;
  return (
    <MotionContext.Provider
      value={{ motion, toggleMotion: () => setOverride(!motion) }}
    >
      <div data-motion={motion ? 'on' : 'off'}>{children}</div>
    </MotionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMotion() {
  return useContext(MotionContext);
}
