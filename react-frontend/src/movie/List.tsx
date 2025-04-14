import { useEffect, useState } from 'react';
import { movies as movieData } from './data';
import { Movie } from './Movie';
import ListItem from './ListItem';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  let content = <div>Keine Datensätze vorhanden</div>;

  if (movies.length > 0) {
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
            <ListItem key={movie.id} movie={movie} />
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
