'use client';

import { deleteMovie } from '@/app/actions/movie';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  id: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const DeleteButton: React.FC<Props> = ({ id, ...props }) => {
  return (
    <button {...props} onClick={() => deleteMovie(id)}>
      löschen
    </button>
  );
};

export default DeleteButton;
