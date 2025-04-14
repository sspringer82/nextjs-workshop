import { Movie } from './Movie';

type Props = {
  movie: Movie;
  onDelete: (id: string) => Promise<void>;
};

const ListItem: React.FC<Props> = ({ movie, onDelete }) => {
  return (
    <tr>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>
        <button onClick={() => onDelete(movie.id)}>löschen</button>
      </td>
    </tr>
  );
};

export default ListItem;
