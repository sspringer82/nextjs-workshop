import { useEffect, useState } from 'react';
import Child from './Child';

const Parent: React.FC = () => {
  const [movies, setMovies] = useState<string[]>([]);

  useEffect(() => {
    setMovies(['Inception', 'Interstellar', 'The Dark Knight']);
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <Child movie={movie} />
      ))}
    </ul>
  );
};

export default Parent;
