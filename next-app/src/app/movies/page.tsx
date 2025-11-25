import { getMovies } from '@/api/movie.api';
import { Movie } from '@/types/Movie';
import { NextPage } from 'next';

const MoviesPage: NextPage = async () => {
  let movies: Movie[] = [];

  try {
    movies = await getMovies();
  } catch (error) {
    console.error(error);
    return <div>There was an error</div>;
  }

  return (
    <>
      <h1>Movie List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.length === 0 && (
            <tr>
              <td colSpan={2}>No movies there!</td>
            </tr>
          )}
          {movies.length > 0 &&
            movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default MoviesPage;
