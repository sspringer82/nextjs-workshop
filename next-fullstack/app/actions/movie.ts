'use server';

import { revalidatePath } from 'next/cache';
import { remove } from '@/app/api/movie';
import ky from 'ky';
import { redirect } from 'next/navigation';
import { Movie } from '@/types/Movie';
import { movieSchema } from '../movies/movie.schema';

export async function deleteMovie(id: string): Promise<void> {
  await remove(id);
  revalidatePath('/movies');
}

export type MyType = {
  error: {
    title?: string;
    year?: string;
  };
  values: Movie;
} | null;

export async function createMovie(
  errorState: MyType,
  formData: FormData
): Promise<MyType> {
  const movie = Object.fromEntries(formData.entries()) as unknown as Movie;

  const result = movieSchema.safeParse(movie);
  if (result.success) {
    const movieToCreate = result.data;

    await ky
      .post('http://localhost:3001/movies', { json: movieToCreate })
      .json();

    revalidatePath('/movies');
    redirect('/movies');
  } else {
    const errors: {
      title?: string;
      year?: string;
    } = {};

    const yearError = result.error.errors.find((e) => e.path.includes('year'));
    if (yearError) {
      errors.year = yearError.message;
    }

    const titleError = result.error.errors.find((e) =>
      e.path.includes('title')
    );
    if (titleError) {
      errors.title = titleError.message;
    }

    return {
      error: errors,
      values: movie,
    };
  }
}
