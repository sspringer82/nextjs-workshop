'use server';

import { deleteUser as apiDeleteUser } from '@/api/users.api';
import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string): Promise<void> {
  await apiDeleteUser(id);
  revalidatePath('/users');
}

export type State = {
  error: string;
};

export async function createUser(
  error: State,
  formData: FormData
): Promise<State> {
  const user = Object.fromEntries(formData.entries()) as { name: string };

  console.log('save', user.name);

  return { error: '' };
}
