import './App.css';
import Controlled from './forms/Controlled';
import Uncontrolled from './forms/Uncontrolled';
import MovieList from './movie/List';

function App() {
  return (
    <>
      <Uncontrolled />
      <hr />
      <MovieList />
    </>
  );
}

export default App;
