import { Movie } from './Movie';

const baseUrl = 'http://localhost:3001/movie';

export async function getAllMovies(): Promise<Movie[]> {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}
