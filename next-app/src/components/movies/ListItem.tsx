import { Movie } from '@/types/Movie';
import Link from 'next/link';

type Props = {
  movie: Movie;
};

const ListItem: React.FC<Props> = ({ movie }) => {
  return (
    <tr>
      <td>
        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
      </td>
      <td>{movie.year}</td>
    </tr>
  );
};

export default ListItem;
