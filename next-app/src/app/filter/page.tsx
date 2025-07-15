import { getAllMovies } from '@/api/movies.api';
import { NextPage } from 'next';
import Filter from './Filter';

type Props = {
  searchParams: Promise<{ filter?: string }>;
};

const FilterPage: NextPage<Props> = async ({ searchParams }) => {
  const { filter } = await searchParams;

  const filterString = filter || '';

  const movies = await getAllMovies();

  return (
    <>
      <Filter />

      <ul>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filterString.toLowerCase())
          )
          .map((movie) => (
            <li key={movie.id}>
              {movie.title} ({movie.year})
            </li>
          ))}
      </ul>
    </>
  );
};

export default FilterPage;
