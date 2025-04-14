import { CreateMovie, Movie } from './Movie';

const baseUrl = 'http://localhost:3001/movies';

export async function getAllMovies(): Promise<Movie[]> {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export async function deleteMovie(id: string): Promise<void> {
  const response = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Failed to Delete');
  }
}

export async function createMovie(newMovie: CreateMovie): Promise<Movie> {
  const response = await fetch(baseUrl, {
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
