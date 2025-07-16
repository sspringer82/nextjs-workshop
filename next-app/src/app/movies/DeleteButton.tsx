'use client';

import { deleteMovie } from '@/functions/movie.function';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  return (
    <button className="border px-3 py-1" onClick={() => deleteMovie(id)}>
      löschen
    </button>
  );
};

export default DeleteButton;
