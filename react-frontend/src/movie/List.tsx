import { useEffect, useState } from 'react';
import { movies as movieData } from './data';
import { Movie } from './Movie';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    { id: '23d21', title: 'Movie 1', year: 1900 },
  ]);

  useEffect(() => {
    // setMovies(movieData);
    setMovies((prev) => {
      return [...prev, ...movieData];
    });
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
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
            </tr>
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
