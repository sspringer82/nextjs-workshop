'use server';

import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string): Promise<void> {
  console.log('Hello my name is: ', process.pid);

  const response = await fetch('http://localhost:3001/users/' + id, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('whoopsi');
  }

  revalidatePath('/users');
}
