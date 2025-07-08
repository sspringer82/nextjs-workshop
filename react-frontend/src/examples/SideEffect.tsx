import { useEffect, useRef, useState } from 'react';

const SideEffect: React.FC = () => {
  console.log('Sideeffect');
  const [count, setCount] = useState<number>(0);

  const intervalRef = useRef<number>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1_000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div>{count}</div>;
};

export default SideEffect;
