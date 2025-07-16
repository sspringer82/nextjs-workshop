import { Actor } from '@/types/Actor';

export async function getActors(timeout = 2_000): Promise<Actor[]> {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:3001/actors');
        if (!response.ok) {
          throw new Error('unable to get actors');
        }
        resolve(await response.json());
      } catch (error) {
        reject(error);
      }
    }, timeout);
  });
}
