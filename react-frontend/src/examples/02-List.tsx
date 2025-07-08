import React from 'react';
import { movies } from './movies';

const List: React.FC = () => {
  let content;

  if (movies.length === 0) {
    content = <strong>There are no movies</strong>;
  } else {
    content = movies.map((movie) => (
      <div key={movie.id}>
        {movie.title} ({movie.year})
      </div>
    ));
  }

  return (
    <>
      <h1>Meine Filmliste</h1>

      <div>{content}</div>
    </>
  );
};

export default List;
