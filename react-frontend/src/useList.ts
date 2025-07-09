import { useEffect, useState } from 'react';
import { getAllMovies, deleteMovieById, createMovie } from './api/movie.api';
import { useDarkmodeContext } from './DarkmodeProvider';
import type { Movie, CreateMovie } from './types/Movie';

export default function useList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');

  const [filter, setFilter] = useState<string>('');

  const [darkmode] = useDarkmodeContext();

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(() => {
        setError('Oh nein, ein Fehler ist aufgetreten');
      });
  }, []);

  async function handleDeleteMovie(id: string) {
    try {
      await deleteMovieById(id);

      setMovies((prevMovies) => {
        return structuredClone(prevMovies).filter((movie) => movie.id !== id);
      });
    } catch {
      setError('Löschen hat nicht geklappt');
    }
  }

  async function handleSave(movie: CreateMovie) {
    try {
      const createdMovie = await createMovie(movie);
      setMovies((prevMovies) => [...prevMovies, createdMovie]);
    } catch {
      setError('unable to create');
    }
  }

  return {
    darkmode,
    error,
    setFilter,
    movies,
    filter,
    handleDeleteMovie,
    handleSave,
  };
}
