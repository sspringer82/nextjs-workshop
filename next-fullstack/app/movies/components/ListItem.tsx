import { Movie } from '@/types/Movie';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

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
      <td>
        <DeleteButton id={movie.id} />
      </td>
    </tr>
  );
};

export default ListItem;
