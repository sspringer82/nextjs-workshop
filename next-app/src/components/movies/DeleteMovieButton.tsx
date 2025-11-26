'use client';

import { deleteMovieFunction } from '@/functions/movie.function';

type Props = {
  id: string;
};

const DeleteMovieButton: React.FC<Props> = ({ id }) => {
  return <button onClick={() => deleteMovieFunction(id)}>🗑️ delete</button>;
};

export default DeleteMovieButton;
