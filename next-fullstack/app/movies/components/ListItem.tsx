import { Movie } from '@/types/Movie';

type Props = {
  movie: Movie;
};

const ListItem: React.FC<Props> = ({ movie }) => {
  return (
    <tr key={movie.id}>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
    </tr>
  );
};

export default ListItem;
