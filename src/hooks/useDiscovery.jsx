import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const DiscoveryContext = createContext(null);

export function DiscoveryProvider({ children }) {
  const [enabled, setEnabled] = useState(false);
  const [completed, setCompleted] = useState([]);
  const discover = useCallback((id) => {
    setCompleted((previous) =>
      previous.includes(id) ? previous : [...previous, id],
    );
  }, []);
  const value = useMemo(
    () => ({ enabled, setEnabled, completed, discover }),
    [enabled, completed, discover],
  );
  return (
    <DiscoveryContext.Provider value={value}>
      {children}
    </DiscoveryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDiscovery() {
  return useContext(DiscoveryContext);
}
