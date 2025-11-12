import { useMoviesContext } from './MoviesProvider';
import { useMovies } from './useMovies';

const MovieCount: React.FC = () => {
  // const [movies] = useMoviesContext();

  const { movies } = useMovies();

  return (
    <div
      style={{
        position: 'fixed',
        top: 8,
        right: 12,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.6)',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: 4,
        fontSize: 12,
      }}
    >
      {movies.length} movies found
    </div>
  );
};

export default MovieCount;
