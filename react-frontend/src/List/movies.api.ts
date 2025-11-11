export async function getMovies() {
  const response = await fetch('http://localhost:3001/movies');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
