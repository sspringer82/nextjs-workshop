'use client';

import { deleteMovie } from '@/functions/movie.function';

type Props = {
  id: string;
};

const DeleteMovieButton: React.FC<Props> = ({ id }) => {
  return <button onClick={() => deleteMovie(id)}>🗑️ delete</button>;
};

export default DeleteMovieButton;
