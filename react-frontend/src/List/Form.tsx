import { useForm } from 'react-hook-form';
import type { CreateMovie } from '../types/Movie';
import { zodResolver } from '@hookform/resolvers/zod';
import { MovieSchema } from '../types/Movie.schema';

type Props = {
  handleCreate: (movie: CreateMovie) => Promise<void>;
};

const Form: React.FC<Props> = ({ handleCreate }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<CreateMovie>({
    resolver: zodResolver(MovieSchema),
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });

  async function onSubmit(data: CreateMovie) {
    await handleCreate(data);
    reset();
  }

  return (
    <section>
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Titel: <input type="text" {...register('title')} />
          </label>
          {errors.title?.message && (
            <div style={{ color: 'red', fontWeight: 'bold' }}>
              {errors.title?.message}
            </div>
          )}
        </div>
        <div>
          <label>
            Jahr:{' '}
            <input
              type="number"
              {...register('year', { valueAsNumber: true })}
            />
          </label>
          {errors.year?.message && (
            <div style={{ color: 'red', fontWeight: 'bold' }}>
              {errors.year?.message}
            </div>
          )}
        </div>
        <button type="submit">speichern</button>
      </form>
    </section>
  );
};

export default Form;
