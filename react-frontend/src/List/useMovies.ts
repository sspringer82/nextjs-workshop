import { useState, useEffect } from 'react';
import { getMovies, deleteMovie, createMovie } from '../api/movies.api';
import type { CreateMovie, Movie } from '../types/Movie';
import { useMoviesContext } from './MoviesProvider';

type ReturnType = {
  movies: Movie[];
  error: string;
  handleDelete: (id: string) => Promise<void>;
  handleCreate: (movie: CreateMovie) => Promise<void>;
};

export function useMovies(loadData = false): ReturnType {
  const [movies, setMovies] = useMoviesContext();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (loadData) {
      getMovies()
        .then((data) => setMovies(data))
        .catch((error) => {
          console.error(error);
          setError('Whoops, da ist etwas schiefgelaufen!');
        });
    }
  }, []);

  async function handleDelete(id: string) {
    try {
      await deleteMovie(id);

      setMovies((prevMovies) => {
        const clone = structuredClone(prevMovies);
        return clone.filter((movie) => movie.id !== id);
      });
    } catch (error) {
      console.error(error);
      setError('Datensatz konnte nicht gelöscht werden');
    }
  }

  async function handleCreate(movie: CreateMovie) {
    const newMovie: Movie = await createMovie(movie);
    setMovies((prevMovies) => {
      const clone = structuredClone(prevMovies);
      clone.push(newMovie);
      return clone;
    });
  }

  return { movies, error, handleDelete, handleCreate };
}
