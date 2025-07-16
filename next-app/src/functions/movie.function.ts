'use server';

import { deleteMovie as deleteMovieApi } from '@/api/movies.api';
import { revalidateTag } from 'next/cache';

export async function deleteMovie(id: string): Promise<void> {
  await deleteMovieApi(id);
  // revalidatePath('/movies');
  revalidateTag('movie');
}
