import ky from 'ky';

export function remove(id: string) {
  return ky.delete(`http://localhost:3001/movies/${id}`);
}
