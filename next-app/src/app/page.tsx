import { getMovies } from '@/api/movie.api';
import { NextPage } from 'next';

const Home: NextPage = async () => {
  let movies;
  try {
    movies = await getMovies();
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    movies = [];
  }

  return <h1>Home Page works movies: {movies.length}</h1>;
};

export default Home;
