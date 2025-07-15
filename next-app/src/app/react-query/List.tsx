'use client';

import { getAllMoviesDelayed } from '@/api/movies.api';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

const List: React.FC = () => {
  const { data: movies } = useSuspenseQuery({
    queryKey: ['movieList'],
    queryFn: () => getAllMoviesDelayed(10_000),
  });

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
        </li>
      ))}
    </ul>
  );
};

export default List;
