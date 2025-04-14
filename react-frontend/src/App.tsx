import { useCallback, useState } from 'react';
import './App.css';
import MovieList from './movie/List';
import UserList from './user/List';

function App() {
  const [showList, setShowList] = useState(true);

  return (
    <>
      <button onClick={() => setShowList((prev) => !prev)}>toggleList</button>
      {showList && <UserList />}
      <hr />
      <MovieList />
    </>
  );
}

export default App;
