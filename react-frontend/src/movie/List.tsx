import { useEffect, useRef, useState } from 'react';
import { Movie } from './Movie';
import ListItem from './ListItem';
import { deleteMovie, getAllMovies } from './movie.api';
import Filter from './Filter';

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

  const filteredFilms = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredFilms.length > 0) {
    content = (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredFilms.map((movie) => (
              <ListItem key={movie.id} movie={movie} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1 className="headline">Movie List ({filteredFilms.length})</h1>
      {error && (
        <div style={{ border: '5px solid red', color: 'hotpink' }}>
          {error.message}
        </div>
      )}
      <Filter inputRef={inputRef} setFilter={setFilter} />
      {content}
    </>
  );
};

export default List;
