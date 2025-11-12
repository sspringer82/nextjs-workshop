import type { CreateMovie, Movie } from '../types/Movie';

export async function getMovies() {
  const response = await fetch('http://localhost:3001/movies');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export async function createMovie(newMovie: CreateMovie): Promise<Movie> {
  const response = await fetch('http://localhost:3001/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  if (!response.ok) {
    throw new Error('whoops');
  }
  return response.json();
}
