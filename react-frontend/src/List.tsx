import React from 'react';
import { movies } from './movies';

const List: React.FC = () => {
  return (
    <>
      <h1>Meine Filmliste</h1>

      <div>
        {movies.length === 0 ? (
          <strong>There are no movies</strong>
        ) : (
          movies.map((movie) => (
            <div key={movie.id}>
              {movie.title} ({movie.year})
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default List;
