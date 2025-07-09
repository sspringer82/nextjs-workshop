import { useForm } from 'react-hook-form';
import type { CreateMovie } from './types/Movie';

type Props = {
  onSave: (newMovie: CreateMovie) => Promise<void>;
};

const Form: React.FC<Props> = ({ onSave }) => {
  const { register, handleSubmit, reset } = useForm<CreateMovie>();

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
      </div>
      <div>
        <label>
          Year: <input type="text" {...register('year')} />
        </label>
      </div>
      <div>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default Form;
