import React from 'react';
import ListItem from './ListItem';
import Filter from './Filter';
import Form from './Form';
import useList from './useList';

const List: React.FC = () => {
  const {
    darkmode,
    error,
    setFilter,
    movies,
    filter,
    handleDeleteMovie,
    handleSave,
  } = useList();

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
