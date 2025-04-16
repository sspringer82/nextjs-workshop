'use client';

import { deleteMovie } from '@/app/actions/movie';
import ky from 'ky';
import { revalidatePath } from 'next/cache';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  // return <button onClick={() => deleteMovie(id)}>löschen</button>;
  return (
    <button
      onClick={() => {
        'use server';
        ky.delete(`http://localhost:3001/movies/${id}`);
        revalidatePath('/movies');
      }}
    >
      löschen
    </button>
  );
};

export default DeleteButton;
