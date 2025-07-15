'use server';

import { deleteUser as apiDeleteUser } from '@/api/users.api';
import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string): Promise<void> {
  await apiDeleteUser(id);
  revalidatePath('/users');
}
