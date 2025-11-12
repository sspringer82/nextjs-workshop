import MovieCount from './List/MovieCount';
import Movies from './List/Movies';
import { MoviesProvider } from './List/MoviesProvider';

const App: React.FC = () => {
  return (
    <MoviesProvider>
      <MovieCount />
      <Movies />
    </MoviesProvider>
  );
};

export default App;
