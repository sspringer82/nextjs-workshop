import type React from 'react';
import type { Movie } from '../types/Movie';

type Props = {
  movie: Movie;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ movie, onDelete }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>
        <button onClick={() => onDelete(movie.id)}>löschen</button>
      </td>
    </tr>
  );
};
export default ListItem;
