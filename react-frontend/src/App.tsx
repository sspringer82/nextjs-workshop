import './App.css';
import useMyCustomHook from './customHook/useMyCustomHook';
import Controlled from './forms/Controlled';
import RHF from './forms/RHF';
import Uncontrolled from './forms/Uncontrolled';
import MovieList from './movie/List';

function App() {
  console.log('RENDER ME');

  const count = useMyCustomHook();
  return (
    <>
      <div>{count}</div>
      <RHF />
      <hr />
      <MovieList />
    </>
  );
}

export default App;
