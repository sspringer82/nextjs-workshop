import { Movie, MovieSchema } from '@/types/Movie';
import ky from 'ky';
import z from 'zod/v4';

const moviePath = 'movies';
const url = `${process.env.BACKEND_URL}/${moviePath}`;

export async function getMovies(): Promise<Movie[]> {
  const movies = await ky.get<Movie[]>(url).json();
  return z.array(MovieSchema).parse(movies);
}
