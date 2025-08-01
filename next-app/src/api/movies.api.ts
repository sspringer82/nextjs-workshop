import { CreateMovie, Movie } from '@/types/Movie';

const BASE_URL = process.env.BACKEND_URL;

export async function getAllMovies(): Promise<Movie[]> {
  const response = await fetch(`${BASE_URL}/movies`, {
    next: { tags: ['movie'] },
  });
  if (!response.ok) {
    throw new Error('unable to get all movies');
  }
  return response.json();
}

export async function getAllMoviesDelayed(timeout = 2000): Promise<Movie[]> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(`${BASE_URL}/movies`);
      if (!response.ok) {
        throw new Error('unable to get all movies');
      }
      resolve(response.json());
    }, timeout);
  });
}

export async function getMovieById(id: string): Promise<Movie> {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  if (!response.ok) {
    throw new Error(`unable to get movie with ${id}`);
  }
  return response.json();
}

export async function getMovieByIdDelayed(
  id: string,
  timeout = 2000
): Promise<Movie> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(`${BASE_URL}/movies/${id}`);

        if (response.status === 404) {
          throw new Error('Not Found');
        }

        if (!response.ok) {
          throw new Error(`unable to get movie with ${id}`);
        }
        resolve(response.json());
      } catch (error) {
        reject(error);
      }
    }, timeout);
  });
}

export async function deleteMovie(id: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`unable to delete movie with id ${id}`);
  }
}

export async function createMovie(movie: CreateMovie): Promise<Movie> {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  if (!response.ok) {
    throw new Error('unable to create movie');
  }
  return response.json();
}
