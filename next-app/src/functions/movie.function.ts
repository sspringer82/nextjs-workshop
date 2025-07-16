'use server';

import { deleteMovie as deleteMovieApi } from '@/api/movies.api';
import { revalidatePath } from 'next/cache';

export async function deleteMovie(id: string): Promise<void> {
  await deleteMovieApi(id);
  revalidatePath('/movies');
}
