import { Button } from '@/components/ui/button';
import { deleteMovie } from '@/functions/movie.function';
import { Trash2 } from 'lucide-react';

type Props = {
  id: string;
};

const DeleteForm: React.FC<Props> = ({ id }) => {
  const deleteMovieById = deleteMovie.bind(null, id);
  return (
    <form action={deleteMovieById}>
      <Button variant="secondary">
        <Trash2 />
      </Button>
    </form>
  );
};

export default DeleteForm;
