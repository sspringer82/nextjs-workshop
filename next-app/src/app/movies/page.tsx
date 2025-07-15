import { getAllMovies } from '@/api/movies.api';
import { NextPage } from 'next';
import Link from 'next/link';
import { H1 } from './style';

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
              <Link href={`/movies/${movie.id}`} prefetch={false}>
                {movie.title} ({movie.year})
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <H1>Movie list</H1>
        {content}
      </div>
    );
  } catch {
    return <div>An error occured</div>;
  }
};

export default MoviesPage;
