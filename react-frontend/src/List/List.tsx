import React, { type ReactNode } from 'react';
import type { Movie } from '../types/Movie';

const movies: Movie[] = [
  { id: 1, title: 'Die Schlümpfe', year: 2011 },
  { id: 2, title: 'Shrek', year: 2001 },
  { id: 3, title: 'Toy Story', year: 1995 },
];

const List: React.FC = () => {
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
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
            </tr>
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
