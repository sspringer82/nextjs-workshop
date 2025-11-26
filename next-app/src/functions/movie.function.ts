'use server';

import { createMovie, deleteMovie } from '@/api/movie.api';
import { CreateMovieSchema } from '@/types/Movie';
import ky from 'ky';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteMovieFunction(id: string) {
  await deleteMovie(id);
  revalidatePath('/movies');
}

export type State = {
  error: string;
};

export async function createMovieFunction(
  state: State,
  formdata: FormData
): Promise<State> {
  const movie = Object.fromEntries(formdata.entries());
  const result = CreateMovieSchema.parse(movie);
  await createMovie(result);

  return {
    error: 'whatever',
  };
  redirect('/movies');
}
