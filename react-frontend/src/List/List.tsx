import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ReactNode,
} from 'react';
import type { Movie } from '../types/Movie';
import ListItem from './ListItem';
import { getMovies } from './movies.api';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
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

  // Fehlerfall
  if (error) {
    content = <div>{error}</div>;
    // Empty State
  } else if (movies.length === 0) {
    content = <div>Keine Lieblingsfilme vorhanden.</div>;
    // Normalfall
  } else {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );
    content = (
      <>
        <label>
          Filter:
          <input
            type="text"
            placeholder="deine Suche"
            value={filter}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFilter(event.target.value)
            }
          />
        </label>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td colSpan={2}>Keine Filme gefunden.</td>
              </tr>
            ) : (
              filteredMovies.map((movie) => (
                <ListItem
                  key={movie.id}
                  movie={movie}
                  onDelete={handleDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </>
    );
  }

  // Rendering
  return (
    <div>
      <h1>Meine Lieblingsfilme</h1>

      {content}
    </div>
  );
};
export default List;
