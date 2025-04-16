'use server';

import { revalidatePath } from 'next/cache';
import { remove } from '@/app/api/movie';

export async function deleteMovie(id: string): Promise<void> {
  await remove(id);
  revalidatePath('/movies');
}
