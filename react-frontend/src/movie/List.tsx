import { useEffect, useRef, useState } from 'react';
import { Movie } from './Movie';
import ListItem from './ListItem';
import { deleteMovie, getAllMovies } from './movie.api';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [filter, setFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((error) => setError(error));
  }, []);

  async function handleDelete(id: string): Promise<void> {
    try {
      await deleteMovie(id);
      setMovies((oldMovies) => {
        return oldMovies.filter((oldMovie) => oldMovie.id !== id);
      });
    } catch {
      setError(new Error('Failed to delete'));
    }
  }

  let content = <div>Keine Datensätze vorhanden</div>;

  if (movies.length > 0) {
    content = (
      <>
        <div>
          <label>
            Filter:
            <input type="text" ref={inputRef} />
            <button onClick={() => setFilter(inputRef.current!.value)}>
              filter
            </button>
          </label>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies
              .filter((movie) =>
                movie.title.toLowerCase().includes(filter.toLowerCase())
              )
              .map((movie) => (
                <ListItem
                  key={movie.id}
                  movie={movie}
                  onDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1 className="headline">Movie List</h1>
      {error && (
        <div style={{ border: '5px solid red', color: 'hotpink' }}>
          {error.message}
        </div>
      )}
      {content}
    </>
  );
};

export default List;
