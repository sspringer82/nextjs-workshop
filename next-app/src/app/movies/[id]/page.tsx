import { getMovieByIdDelayed } from '@/api/movies.api';
import { Movie } from '@/types/Movie';
import { NextPage } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

const MoviesDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  let movie: Movie;
  try {
    movie = await getMovieByIdDelayed(id, 10);
  } catch (error) {
    if (error && error instanceof Error && error.message === 'Not Found') {
      notFound();
    } else {
      throw error;
    }
  }

  return (
    <div>
      <h1>{movie!.title}</h1>
      <h2>{movie!.year}</h2>
      <p>Lorem ipsum...</p>
      <Link href="/movies">back to list</Link>
    </div>
  );
};

export default MoviesDetailPage;
