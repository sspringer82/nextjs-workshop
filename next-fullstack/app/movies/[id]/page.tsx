import { NextPage } from 'next';
import { getOne } from '../movie.api';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const MovieDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  const movie = await getOne(id);

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
