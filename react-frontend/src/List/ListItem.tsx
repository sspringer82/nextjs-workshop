import type React from 'react';
import type { Movie } from '../types/Movie';
import { useMovies } from './useMovies';

type Props = {
  movie: Movie;
};

const ListItem: React.FC<Props> = ({ movie }) => {
  const { handleDelete } = useMovies(false);

  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>
        <button onClick={() => handleDelete(movie.id)}>löschen</button>
      </td>
    </tr>
  );
};
export default ListItem;
