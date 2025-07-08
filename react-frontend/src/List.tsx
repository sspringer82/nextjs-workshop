import React, { useEffect, useState } from 'react';
import { movies as movieData } from './movies';
import ListItem from './ListItem';
import type { Movie } from './types/Movie';

const List: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  function handleDeleteMovie(id: string) {
    setMovies((prevMovies) => {
      return structuredClone(prevMovies).filter((movie) => movie.id !== id);
    });
  }

  return (
    <>
      <h1>Meine Filmliste</h1>

      <div>
        {movies.length === 0 ? (
          <strong>There are no movies</strong>
        ) : (
          movies.map((movie) => (
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
