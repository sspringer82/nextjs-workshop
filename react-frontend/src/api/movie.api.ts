import type { Movie } from '../types/Movie';

const baseUrl = 'http://localhost:3001';

export async function getAllMovies(): Promise<Movie[]> {
  const response = await fetch(`${baseUrl}/movies`);
  if (!response.ok) {
    throw new Error('Whoops');
  }
  return response.json();
}
