import { Movie } from '@/types/Movie';
import Link from 'next/link';

type Props = {
  movie: Movie;
};

const ListItem: React.FC<Props> = ({ movie }) => {
  return (
    <tr key={movie.id}>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>
        <Link href={`/movies/${movie.id}`}>Details</Link>
      </td>
    </tr>
  );
};

export default ListItem;
