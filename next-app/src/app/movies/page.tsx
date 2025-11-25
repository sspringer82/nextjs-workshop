import { getMovies } from '@/api/movie.api';
import List from '@/components/movies/List';
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
      <List movies={movies} />
    </>
  );
};

export default MoviesPage;
