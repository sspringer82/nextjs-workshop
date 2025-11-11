import React, { useEffect, useState, type ReactNode } from 'react';
import type { Movie } from '../types/Movie';
import ListItem from './ListItem';
import { getMovies } from './movies.api';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    // setTimeout(() => {
    //   setMovies(initialMovies);
    // }, 1_000);
    // data fetching
    getMovies()
      .then((data) => setMovies(data))
      .catch((error) => {
        console.error(error);
        setError('Whoops, da ist etwas schiefgelaufen!');
      });
  }, []);

  function handleDelete(id: number) {
    setMovies((prevMovies) => {
      const clone = structuredClone(prevMovies);
      return clone.filter((movie) => movie.id !== id);
    });
  }

  let content: ReactNode;

  if (error) {
    content = <div>{error}</div>;
  } else if (movies.length === 0) {
    content = <div>Keine Lieblingsfilme vorhanden.</div>;
  } else {
    content = (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <ListItem key={movie.id} movie={movie} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <h1>Meine Lieblingsfilme</h1>
      {content}
    </div>
  );
};
export default List;
