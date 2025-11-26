import { CreateMovie, Movie, MovieSchema } from '@/types/Movie';
import ky from 'ky';
import { setTimeout } from 'node:timers/promises';
import z from 'zod/v4';

const moviePath = 'movies';
const url = `${process.env.BACKEND_URL}/${moviePath}`;

export async function getMovies(): Promise<Movie[]> {
  const movies = await ky.get<Movie[]>(url).json();
  return z.array(MovieSchema).parse(movies);
}

export async function getMovieById(id: string): Promise<Movie> {
  await setTimeout(500);
  const movie = await ky.get<Movie>(`${url}/${id}`).json();
  return MovieSchema.parse(movie);
}

export async function deleteMovie(id: string): Promise<void> {
  await ky.delete(process.env.BACKEND_URL + '/movies/' + id);
}

export async function createMovie(movie: CreateMovie) {
  return ky.post(`${process.env.BACKEND_URL}/movies`, { json: movie }).json();
}
