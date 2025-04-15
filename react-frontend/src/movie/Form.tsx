import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateMovie, movieSchema } from './movie.schema';

type Props = {
  onCreate: (newMovie: CreateMovie) => void;
};

const Form: React.FC<Props> = ({ onCreate }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateMovie>({
    resolver: zodResolver(movieSchema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={handleSubmit(onCreate)}>
      <div>
        <label>
          Title: <input {...register('title')} />
        </label>
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>
          Year: <input type="number" {...register('year')} />
        </label>
        {errors.year && <p>{errors.year.message}</p>}
      </div>
      <button type="submit">OK</button>
    </form>
  );
};

export default Form;
