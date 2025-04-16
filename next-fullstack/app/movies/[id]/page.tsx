import { NextPage } from 'next';
import { getOne } from '../movie.api';
import Link from 'next/link';
import { setTimeout } from 'node:timers/promises';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
  await setTimeout(3_000);

  const { id } = await params;

  let movie;
  try {
    movie = await getOne(id);
  } catch (e) {
    if ((e as Error).message.includes('Not Found')) {
      throw notFound();
    }
    throw e;
  }

  return (
    <div>
      <h1>Details of {movie.title}</h1>

      <div>
        <strong>Title:</strong> {movie.title}
        <br />
        <strong>Year:</strong> {movie.year}
      </div>

      <Link href="/movies" className="text-blue-500">
        Back to Movies
      </Link>
    </div>
  );
};

export default MovieDetailPage;
