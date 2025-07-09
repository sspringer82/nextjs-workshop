import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import type { CreateMovie, Movie } from './types/Movie';
import { createMovie, deleteMovieById, getAllMovies } from './api/movie.api';
import Filter from './Filter';
import Form from './Form';
import { useDarkmodeContext } from './DarkmodeProvider';

const List: React.FC = () => {
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

  return (
    <div
      style={{
        backgroundColor: darkmode ? 'black' : 'white',
        color: darkmode ? 'white' : 'black',
      }}
    >
      <h1>Meine Filmliste</h1>

      {error !== '' && <div>{error}</div>}

      <Filter setFilter={setFilter} isControlled={true} />

      <div>
        {movies.length === 0 ? (
          <strong>There are no movies</strong>
        ) : (
          movies
            .filter((movie) => movie.title.toLowerCase().includes(filter))
            .map((movie) => (
              <ListItem
                movie={movie}
                key={movie.id}
                onDelete={handleDeleteMovie}
              />
            ))
        )}
      </div>
      <hr />
      <Form onSave={handleSave} />
    </div>
  );
};

export default List;
