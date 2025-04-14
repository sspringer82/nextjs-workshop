import { useForm } from 'react-hook-form';
import { CreateMovie, Movie } from './Movie';

type Props = {
  onCreate: (newMovie: CreateMovie) => void;
};

const Form: React.FC<Props> = ({ onCreate }) => {
  const { handleSubmit, register } = useForm<CreateMovie>();

  function onSubmit(values: CreateMovie) {
    onCreate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Title: <input {...register('title')} />
        </label>
      </div>
      <div>
        <label>
          Year: <input type="number" {...register('year')} />
        </label>
      </div>
      <button type="submit">OK</button>
    </form>
  );
};

export default Form;
