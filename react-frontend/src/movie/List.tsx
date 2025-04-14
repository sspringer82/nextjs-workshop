import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import ListItem from './ListItem';
import { getAllMovies } from './movie.api';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((error) => setError(error));
  }, []);

  function handleDelete(id: string): void {
    setMovies((oldMovies) => {
      return oldMovies.filter((oldMovie) => oldMovie.id !== id);
    });
  }

  let content = <div>Keine Datensätze vorhanden</div>;

  if (error) {
    content = <span>Error: {error.message}</span>;
  } else if (movies.length > 0) {
    content = (
      <table>
        <thead>
          <tr>
            <th>ID</th>
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
    <>
      <h1 className="headline">Movie List</h1>
      {content}
    </>
  );
};

export default List;
