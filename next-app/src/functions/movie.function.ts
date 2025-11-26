'use server';

import { createMovie, deleteMovie } from '@/api/movie.api';
import { CreateMovie, CreateMovieSchema } from '@/types/Movie';
import ky from 'ky';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteMovieFunction(id: string) {
  await deleteMovie(id);
  revalidatePath('/movies');
}

export type State = {
  error: string;
  values: {
    title: string;
    year: number;
  };
};

export async function createMovieFunction(
  state: State,
  formdata: FormData
): Promise<State> {
  const movie = Object.fromEntries(formdata.entries());
  try {
    const result = CreateMovieSchema.parse(movie);
    await createMovie(result);
  } catch (error) {
    return {
      error: 'Validation failed' + error,
      values: movie as unknown as CreateMovie,
    };
  }
  redirect('/movies');
}

export async function saveMovie(newMovie: CreateMovie) {
  await createMovie(newMovie);
  redirect('/movies');
}
