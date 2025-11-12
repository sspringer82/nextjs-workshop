import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import type { Movie } from '../types/Movie';

type MoviesContextType = [Movie[], Dispatch<SetStateAction<Movie[]>>] | null;

const MoviesContext = createContext<MoviesContextType>(null);

type Props = {
  children: ReactNode;
};

export const MoviesProvider: React.FC<Props> = ({ children }) => {
  const movieState = useState<Movie[]>([]);

  return <MoviesContext value={movieState}>{children}</MoviesContext>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useMoviesContext() {
  const moviesContext = useContext(MoviesContext);

  if (moviesContext === null) {
    throw new Error('useMoviesContext must be used within a MoviesProvider');
  }

  return moviesContext;
}
