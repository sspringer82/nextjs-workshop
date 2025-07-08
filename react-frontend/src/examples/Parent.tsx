import { useEffect, useState } from 'react';
import Child from './Child';

const Parent: React.FC = () => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setName('Paul');
    }, 2_000);
  }, []);

  return (
    <div>
      <h1>Parent works</h1>

      <Child name={name} setName={setName} />
    </div>
  );
};

export default Parent;
