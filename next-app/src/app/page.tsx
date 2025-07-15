'use client';

import MoviesPage from './movies/page';

export default function Home() {
  return (
    <>
      <MoviesPage />
      <h1 onClick={() => alert('foo')}>Hallo Welt!!</h1>
    </>
  );
}
