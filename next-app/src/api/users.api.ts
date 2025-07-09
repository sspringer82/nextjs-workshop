import { User } from '@/types/User';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('unable to get all users');
  }
  return response.json();
}
