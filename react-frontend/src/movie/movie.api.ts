import { Movie } from './Movie';

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
