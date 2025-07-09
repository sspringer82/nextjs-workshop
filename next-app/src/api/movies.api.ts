import { Movie } from '@/types/Movie';

export async function getAllMovies(): Promise<Movie[]> {
  const response = await fetch('http://localhost:3001/movies');
  if (!response.ok) {
    throw new Error('unable to get all movies');
  }
  return response.json();
}
