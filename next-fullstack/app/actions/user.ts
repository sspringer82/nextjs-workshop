'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { setTimeout } from 'timers/promises';

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

export async function createUser(
  errorState: string,
  formData: FormData
): Promise<string> {
  const user = {
    name: formData.get('name'),
    role: formData.get('role'),
  };

  await setTimeout(10_000);

  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      return 'foo';
    }
  } catch (error) {
    return 'oh no!';
  }
  revalidatePath('/users');
  redirect('/users');
}
