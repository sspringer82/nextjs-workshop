import { Movie } from '@/types/Movie';
import { NextPage } from 'next';
import { getAll } from './movie.api';
import ListItem from './components/ListItem';

const MoviesPage: NextPage = async () => {
  let movies: Movie[] = [];
  let error = null;

  try {
    movies = await getAll();
  } catch {
    error = 'Fehler beim Laden der Daten';
  }

  if (error) {
    return (
      <div className="text-red-500 text-xl font-bold border border-red-500 p-4 m-5">
        {error}
      </div>
    );
  }

  return (
    <>
      <h1>Movies list</h1>
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.length === 0 && (
              <tr>
                <td colSpan={3}>Keine Daten gefunden</td>
              </tr>
            )}
            {movies.length > 0 &&
              movies.map((movie) => <ListItem key={movie.id} movie={movie} />)}
          </tbody>
        </table>
      </>
    </>
  );
};

export default MoviesPage;
