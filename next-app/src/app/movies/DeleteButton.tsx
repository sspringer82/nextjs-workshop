'use client';

import { Button } from '@/components/ui/button';
import { deleteMovie } from '@/functions/movie.function';
import { Trash2 } from 'lucide-react';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  return (
    <Button
      variant="destructive"
      onClick={() => deleteMovie(id)}
      className="active:scale-95"
    >
      <Trash2 />
      löschen
    </Button>
  );
};

export default DeleteButton;
