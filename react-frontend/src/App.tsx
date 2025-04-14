import './App.css';
import Controlled from './forms/Controlled';
import RHF from './forms/RHF';
import Uncontrolled from './forms/Uncontrolled';
import MovieList from './movie/List';

function App() {
  return (
    <>
      <RHF />
      <hr />
      <MovieList />
    </>
  );
}

export default App;
