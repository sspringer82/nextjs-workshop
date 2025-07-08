import type { Movie } from './types/Movie';

type Props = {
  movie: Movie;
};

const ListItem: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      {movie.title} ({movie.year})
    </div>
  );
};

export default ListItem;
