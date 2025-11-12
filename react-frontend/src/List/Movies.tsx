import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import type { CreateMovie, Movie } from '../types/Movie';
import { createMovie, getMovies } from '../api/movies.api';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getMovies()
      .then((data) => setMovies(data))
      .catch((error) => {
        console.error(error);
        setError('Whoops, da ist etwas schiefgelaufen!');
      });
  }, []);

  function handleDelete(id: string) {
    setMovies((prevMovies) => {
      const clone = structuredClone(prevMovies);
      return clone.filter((movie) => movie.id !== id);
    });
  }

  async function handleCreate(movie: CreateMovie) {
    const newMovie: Movie = await createMovie(movie);
    setMovies((prevMovies) => {
      const clone = structuredClone(prevMovies);
      clone.push(newMovie);
      return clone;
    });
  }

  return (
    <>
      <Form handleCreate={handleCreate} />
      <List error={error} movies={movies} handleDelete={handleDelete} />
    </>
  );
};

export default Movies;
