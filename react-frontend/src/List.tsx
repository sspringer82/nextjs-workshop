import React from 'react';
import { movies } from './movies';
import ListItem from './ListItem';

const List: React.FC = () => {
  return (
    <>
      <h1>Meine Filmliste</h1>

      <div>
        {movies.length === 0 ? (
          <strong>There are no movies</strong>
        ) : (
          movies.map((movie) => <ListItem movie={movie} key={movie.id} />)
        )}
      </div>
    </>
  );
};

export default List;
