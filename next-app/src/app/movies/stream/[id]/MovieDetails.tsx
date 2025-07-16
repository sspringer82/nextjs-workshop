import { getMovieByIdDelayed } from '@/api/movies.api';

type Props = {
  id: string;
};

const MovieDetails: React.FC<Props> = async ({ id }) => {
  const movie = await getMovieByIdDelayed(id, 2000);

  return (
    <div>
      <h1>Movie Details {movie.title}</h1>
    </div>
  );
};

export default MovieDetails;
