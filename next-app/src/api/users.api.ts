import { User } from '@/types/User';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('unable to get all users');
  }
  return response.json();
}

export async function getUserById(id: string, delay = 2_000): Promise<User> {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`);
        if (!response.ok) {
          throw new Error(`unable to get user with id ${id}`);
        }
        resolve(await response.json());
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

export async function deleteUser(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`unable to delete user with id ${id}`);
  }
}
