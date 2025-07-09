import { getMovieById } from '@/api/movies.api';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

const MoviesDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  const movie = await getMovieById(id);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.year}</h2>
      <p>Lorem ipsum...</p>
      <Link href="/movies">back to list</Link>
    </div>
  );
};

export default MoviesDetailPage;
