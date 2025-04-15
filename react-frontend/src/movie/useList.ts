import { useState, useRef, useEffect } from 'react';
import { Movie, CreateMovie } from './Movie';
import { getAllMovies, deleteMovie, createMovie } from './movie.api';

export default function useList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [filter, setFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((error) => setError(error));
  }, []);

  async function handleDelete(id: string): Promise<void> {
    try {
      await deleteMovie(id);
      setMovies((oldMovies) => {
        return oldMovies.filter((oldMovie) => oldMovie.id !== id);
      });
    } catch {
      setError(new Error('Failed to delete'));
    }
  }

  async function handleCreate(newMovie: CreateMovie) {
    const createdMovie = await createMovie(newMovie);
    setMovies((prevMovies) => {
      return [...prevMovies, createdMovie];
    });
  }

  const filteredFilms = movies.filter((movie) => {
    return (
      movie.title && movie.title.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return {
    filteredFilms,
    handleDelete,
    handleCreate,
    error,
    inputRef,
    setFilter,
  };
}
