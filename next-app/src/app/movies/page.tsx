import { getMovies } from '@/api/movie.api';
import Filter from '@/components/movies/Filter';
import List from '@/components/movies/List';
import { Movie } from '@/types/Movie';
import { NextPage } from 'next';

type Props = {
  searchParams: Promise<{ filter: string }>;
};

const MoviesPage: NextPage<Props> = async ({ searchParams }) => {
  const { filter } = await searchParams;

  let movies: Movie[] = [];

  try {
    movies = await getMovies();
  } catch (error) {
    console.error(error);
    return <div>There was an error</div>;
  }

  const filteredMovies = movies.filter((movie) => {
    if (!filter) return true;
    return movie.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Movie List</h1>
      <Filter initialValue={filter} />
      <List movies={filteredMovies} />
    </>
  );
};

export default MoviesPage;
