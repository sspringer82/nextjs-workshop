import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Person = {
  firstName: string;
  lastName: string;
};

const personSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
});

const RHF: React.FC = () => {
  const { handleSubmit, register } = useForm<Person>({
    resolver: zodResolver(personSchema),
    mode: 'onBlur',
  });

  function onSubmit(values: Person) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Firstname: <input {...register('firstName')} />
        </label>
      </div>
      <div>
        <label>
          Lastname: <input {...register('lastName')} />
        </label>
      </div>
      <button type="submit">OK</button>
    </form>
  );
};

export default RHF;
