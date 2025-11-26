'use server';

import ky from 'ky';
import { revalidatePath } from 'next/cache';

export async function deleteMovie(id: string) {
  await ky.delete(process.env.BACKEND_URL + '/movies/' + id);
  revalidatePath('/movies');
}
