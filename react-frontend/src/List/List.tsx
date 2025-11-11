import React, { useEffect, useState, type ReactNode } from 'react';
import type { Movie } from '../types/Movie';
import ListItem from './ListItem';

const initialMovies: Movie[] = [
  { id: 1, title: 'Die Schlümpfe', year: 2011 },
  { id: 2, title: 'Shrek', year: 2001 },
  { id: 3, title: 'Toy Story', year: 1995 },
];

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setMovies(initialMovies);
    }, 1_000);
  }, []);

  let content: ReactNode;

  if (movies.length === 0) {
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
            <ListItem key={movie.id} movie={movie} />
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
