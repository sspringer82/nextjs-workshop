'use server';

import { revalidatePath } from 'next/cache';
import { remove } from '@/app/api/movie';
import { json } from 'stream/consumers';
import ky from 'ky';
import { redirect } from 'next/navigation';
import { Movie } from '@/types/Movie';

export async function deleteMovie(id: string): Promise<void> {
  await remove(id);
  revalidatePath('/movies');
}

export type MyType = {
  error: string;
  values: Movie;
} | null;

export async function createMovie(
  errorState: MyType,
  formData: FormData
): Promise<MyType> {
  const movie = Object.fromEntries(formData.entries()) as unknown as Movie;

  return {
    error: 'no',
    values: movie,
  };

  try {
    await ky.post('http://localhost:3001/movies', { json: movie }).json();
  } catch {
    return 'Oh no';
  }

  revalidatePath('/movies');
  redirect('/movies');
}
