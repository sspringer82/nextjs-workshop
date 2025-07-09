import { useForm } from 'react-hook-form';
// import type { CreateMovie } from './types/Movie';
import { zodResolver } from '@hookform/resolvers/zod';
import movieSchema from './movie.schema';
import type z from 'zod/v4';

type Props = {
  onSave: (newMovie: CreateMovie) => Promise<void>;
};

type CreateMovie = z.infer<typeof movieSchema>;

const Form: React.FC<Props> = ({ onSave }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateMovie>({
    resolver: zodResolver(movieSchema),
    reValidateMode: 'onBlur',
  });

  async function onSubmit(data: CreateMovie) {
    await onSave(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Title: <input type="text" {...register('title')} />
        </label>
        {errors.title && <div>{errors.title.message}</div>}
      </div>
      <div>
        <label>
          Year: <input type="text" {...register('year')} />
        </label>
        {errors.year && <div>{errors.year.message}</div>}
      </div>
      <div>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default Form;
