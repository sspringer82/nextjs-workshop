'use server';

import {
  deleteMovie as deleteMovieApi,
  createMovie as createMovieApi,
} from '@/api/movies.api';
import { CreateMovie, MovieForm } from '@/types/Movie';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteMovie(id: string): Promise<void> {
  await deleteMovieApi(id);
  // revalidatePath('/movies');
  revalidateTag('movie');
}

export async function createMovie(state: MovieForm, formData: FormData) {
  console.log(formData);

  const newMovie = Object.fromEntries(
    formData.entries()
  ) as unknown as CreateMovie;

  console.log(newMovie);

  createMovieApi({ title: newMovie.title, year: Number(newMovie.year) });

  revalidatePath('/movies');
  redirect('/movies');

  return state;
}
