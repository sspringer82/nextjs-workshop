import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import type { Movie } from './types/Movie';
import { getAllMovies } from './api/movie.api';
import Filter from './Filter';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');

  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(() => {
        setError('Oh nein, ein Fehler ist aufgetreten');
      });
  }, []);

  function handleDeleteMovie(id: string) {
    setMovies((prevMovies) => {
      return structuredClone(prevMovies).filter((movie) => movie.id !== id);
    });
  }

  return (
    <>
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
    </>
  );
};

export default List;
