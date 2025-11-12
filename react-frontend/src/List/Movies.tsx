import Form from './Form';
import List from './List';
import { useMovies } from './useMovies';

const Movies: React.FC = () => {
  const { movies, error, handleCreate } = useMovies(true);
  return (
    <>
      <Form handleCreate={handleCreate} />
      <List error={error} movies={movies} />
    </>
  );
};

export default Movies;
