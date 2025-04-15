import './App.css';
import RHF from './forms/RHF';
import MovieList from './movie/List';
import List from './user/List';
import UserCount from './user/UserCount';
import { UserProvider } from './user/UserProvider';

function App() {
  return (
    <UserProvider>
      <>
        <List />
        <UserCount />
        <RHF />
        <hr />
        <MovieList />
      </>
    </UserProvider>
  );
}

export default App;
