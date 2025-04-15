import { useEffect, useState } from 'react';

export default function useMyCustomHook() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
  }, []);

  return state;
}
