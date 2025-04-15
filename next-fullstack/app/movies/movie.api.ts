import { Movie } from '@/types/Movie';
import ky from 'ky';
const baseUrl = 'http://localhost:3001/movies';
export function getAll() {
  return ky.get<Movie[]>(baseUrl).json();
}

export function getOne(id: string) {
  return ky.get<Movie>(`${baseUrl}/${id}`).json();
}
