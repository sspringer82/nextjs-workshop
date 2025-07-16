'use client';

import { Button } from '@/components/ui/button';
import { deleteMovie } from '@/functions/movie.function';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  return (
    <Button variant="destructive" onClick={() => deleteMovie(id)}>
      löschen
    </Button>
  );
};

export default DeleteButton;
