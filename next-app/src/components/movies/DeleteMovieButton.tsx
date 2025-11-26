'use client';

import { deleteMovieFunction } from '@/functions/movie.function';
import { Button } from '@/components/ui/button';

type Props = {
  id: string;
};

const DeleteMovieButton: React.FC<Props> = ({ id }) => {
  return (
    <Button variant="destructive" onClick={() => deleteMovieFunction(id)}>
      🗑️ delete
    </Button>
  );
};

export default DeleteMovieButton;
