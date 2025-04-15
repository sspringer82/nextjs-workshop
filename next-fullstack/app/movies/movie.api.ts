import { Movie } from '@/types/Movie';
import ky from 'ky';

export function getAll() {
  return ky.get<Movie[]>('http://localhost:3001/movies').json();
}
