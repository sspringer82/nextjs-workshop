import { useForm } from 'react-hook-form';
import type { CreateMovie, Movie } from '../types/Movie';
import { createMovie } from '../api/movies.api';

const Form: React.FC = () => {
  const { handleSubmit, register } = useForm<CreateMovie>();

  async function onSubmit(data: CreateMovie) {
    const response = await createMovie(data);
    console.log('Erfolg:', response);
  }

  return (
    <section>
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Titel: <input type="text" {...register('title')} />
          </label>
        </div>
        <div>
          <label>
            Jahr: <input type="number" {...register('year')} />
          </label>
        </div>
        <button type="submit">speichern</button>
      </form>
    </section>
  );
};

export default Form;
