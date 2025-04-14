import { User } from './User';

const baseUrl = 'http://localhost:3001/userssws';

export async function getAllUsers(): Promise<User[]> {
  return [];
  // try {
  //   const response = await fetch(baseUrl);
  //   if (!response.ok) {
  //     throw new Error('whoops');
  //   }
  //   return response.json();
  // } catch (error) {}
}
