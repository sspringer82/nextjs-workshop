'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateMovie, CreateMovieSchema } from '@/types/Movie';
import { saveMovie } from '@/functions/movie.function';
import { Button } from '@/components/ui/button';

const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<CreateMovie>({
    resolver: zodResolver(CreateMovieSchema),
    reValidateMode: 'onChange',
    mode: 'onBlur',
  });

  async function onSubmit(data: CreateMovie) {
    return saveMovie(data);
    // await handleCreate(data);
    // reset();
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
        <Button variant="outline" type="submit">
          speichern
        </Button>
      </form>
    </section>
  );
};

export default Form;
