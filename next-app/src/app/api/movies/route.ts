import { getAllMovies } from '@/api/movies.api';

export async function GET() {
  const movies = await getAllMovies();

  return Response.json(movies);
}
