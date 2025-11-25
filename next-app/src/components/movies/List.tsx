import { Movie } from '@/types/Movie';
import ListItem from './ListItem';

type Props = {
  movies: Movie[];
};

const List: React.FC<Props> = ({ movies }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.length === 0 && (
          <tr>
            <td colSpan={2}>No movies there!</td>
          </tr>
        )}
        {movies.length > 0 &&
          movies.map((movie) => <ListItem key={movie.id} movie={movie} />)}
      </tbody>
    </table>
  );
};

export default List;
