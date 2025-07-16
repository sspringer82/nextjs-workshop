'use server';

import {
  deleteMovie as deleteMovieApi,
  createMovie as createMovieApi,
} from '@/api/movies.api';
import { CreateMovie, MovieForm } from '@/types/Movie';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { z } from 'zod/v4';

export async function deleteMovie(id: string): Promise<void> {
  await deleteMovieApi(id);
  // revalidatePath('/movies');
  revalidateTag('movie');
}

const createMovieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  year: z.coerce
    .number()
    .int()
    .min(1900, 'Year must be a valid year')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
});

export async function createMovie(
  state: MovieForm,
  formData: FormData
): Promise<MovieForm> {
  console.log(formData);

  const newMovie = Object.fromEntries(
    formData.entries()
  ) as unknown as CreateMovie;

  const parsed = createMovieSchema.safeParse(newMovie);

  if (!parsed.success) {
    const errors = z.flattenError(parsed.error);

    return {
      error: {
        title: errors.fieldErrors?.title?.join(' ') || '',
        year: errors.fieldErrors?.year?.join(' ') || '',
      },
      values: newMovie,
    };
  }

  try {
    await createMovieApi(parsed.data);
  } catch {
    return {
      serverError: 'Failed to create movie',
      error: null,
      values: newMovie,
    };
  }

  revalidatePath('/movies');
  redirect('/movies');

  return state;
}
