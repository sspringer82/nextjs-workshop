import type { Movie } from '../types/Movie';

import ky from 'ky';

const baseUrl = 'http://localhost:3001';

export async function getAllMovies(): Promise<Movie[]> {
  return ky.get(`${baseUrl}/movies`).json();

  // const response = await fetch(`${baseUrl}/movies`);
  // if (!response.ok) {
  //   throw new Error('Whoops');
  // }
  // return response.json();
}
