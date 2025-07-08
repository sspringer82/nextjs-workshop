import type { Movie } from './types/Movie';

type Props = {
  movie: Movie;
  onDelete: (id: string) => void;
};

const ListItem: React.FC<Props> = ({ movie, onDelete }) => {
  return (
    <div>
      {movie.title} ({movie.year}){' '}
      <button onClick={() => onDelete(movie.id)}>🗑️</button>
    </div>
  );
};

export default ListItem;
