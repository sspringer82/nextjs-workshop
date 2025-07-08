const movies = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'Star Wars' },
  { id: 3, title: 'Star Trek' },
];

const name = 'Basti';

const List: React.FC = () => {
  // if (name === 'Basti') {
  //   return <div>Hallo Basti</div>;
  // }

  let content = '';
  if (name === 'Basti') {
    content = 'Hallo Basti';
  }

  return (
    <div>
      <h1>Hallo {name}</h1>

      {content}

      {content === 'Basti' && <div>Hallo Basti</div>}

      {content === 'Basti' ? <div>Hallo Basti</div> : <div>Hello Stranger</div>}
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
