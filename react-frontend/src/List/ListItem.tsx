import type React from 'react';
import type { Movie } from '../types/Movie';

type Props = {
  movie: Movie;
};

const ListItem: React.FC<Props> = ({ movie }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
    </tr>
  );
};
export default ListItem;
