'use server';

import { deleteMovie } from '@/api/movie.api';
import { revalidatePath } from 'next/cache';

export async function deleteMovieFunction(id: string) {
  await deleteMovie(id);
  revalidatePath('/movies');
}
