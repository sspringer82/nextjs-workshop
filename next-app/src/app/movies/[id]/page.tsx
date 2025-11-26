import { getMovieById, getMovies } from '@/api/movie.api';
import BackButton from '@/components/BackButton';
import { Movie } from '@/types/Movie';
import { HTTPError } from 'ky';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  let movie: Movie | null = null;
  try {
    movie = await getMovieById(id);
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound();
    } else {
      throw error;
    }
  }

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
