'use client';

import { deleteMovie } from '@/app/actions/movie';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  return <button onClick={() => deleteMovie(id)}>löschen</button>;
};

export default DeleteButton;
