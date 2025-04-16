'use client';

import { useEffect } from 'react';

export default function ErrorHandler({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Ein Fehler ist aufgetreten</h1>
      <button onClick={() => reset()}>retry</button>
    </div>
  );
}
