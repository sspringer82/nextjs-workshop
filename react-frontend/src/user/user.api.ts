import { User } from './User';

const baseUrl = 'http://localhost:3001/users';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error('whoops');
  }
  return response.json();
}
