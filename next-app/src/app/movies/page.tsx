import { getAllMovies } from '@/api/movies.api';
import { NextPage } from 'next';

const MoviesPage: NextPage = async () => {
  try {
    const movies = await getAllMovies();

    let content;

    if (movies.length === 0) {
      content = <div>No movies found</div>;
    } else {
      content = (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h1>Movie list</h1>
        {content}
      </div>
    );
  } catch {
    return <div>An error occured</div>;
  }
};

export default MoviesPage;
