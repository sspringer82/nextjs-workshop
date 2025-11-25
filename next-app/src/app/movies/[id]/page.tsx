import { getMovieById } from '@/api/movie.api';
import BackButton from '@/components/BackButton';
import { NextPage } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const movie = await getMovieById(id);

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <BackButton />
    </>
  );
};

export default MovieDetailPage;
