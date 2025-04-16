'use server';

import { revalidatePath } from 'next/cache';
import { remove } from '@/app/api/movie';
import { json } from 'stream/consumers';
import ky from 'ky';
import { redirect } from 'next/navigation';

export async function deleteMovie(id: string): Promise<void> {
  await remove(id);
  revalidatePath('/movies');
}

export type MyType = {
  error: string;
  values: { title: string; year: string };
} | null;

export async function createMovie(
  errorState: MyType,
  formData: FormData
): Promise<MyType> {
  const movie = {
    title: formData.get('title')!.toString(),
    year: formData.get('year')!.toString(),
  };
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
