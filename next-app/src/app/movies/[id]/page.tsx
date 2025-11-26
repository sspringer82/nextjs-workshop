import { getMovieById, getMovies } from '@/api/movie.api';
import BackButton from '@/components/BackButton';
import { NextPage } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const movie = await getMovieById(id);

  // throw new Error('☠️');

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <BackButton />
    </>
  );
};

export default MovieDetailPage;

export async function generateStaticParams() {
  try {
    const movies = await getMovies();
    return movies.map((movie) => ({
      id: movie.id,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
