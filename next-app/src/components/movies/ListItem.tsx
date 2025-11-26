import { Movie } from '@/types/Movie';
import Link from 'next/link';
import DeleteMovieButton from './DeleteMovieButton';
import { deleteMovie } from '@/api/movie.api';
import { revalidatePath } from 'next/cache';

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
      <td>
        <DeleteMovieButton id={movie.id} />
      </td>
    </tr>
  );
};

export default ListItem;
