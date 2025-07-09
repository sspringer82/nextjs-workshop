import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type User = {
  firstname: string;
  lastname: string;
};

const UserForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<User>({
    defaultValues: { firstname: 'John', lastname: 'Doe' },
  });

  useEffect(() => {
    setTimeout(() => {
      reset({ firstname: 'Jane', lastname: 'Doe' });
    }, 3_000);
  }, [reset]);

  function onSubmit(data: User) {
    console.log(data);
  }

  return (
    <section>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Firstname: <input type="text" {...register('firstname')} />
        </label>
        <br />
        <label>
          Lastname: <input type="text" {...register('lastname')} />
        </label>
        <br />
        <button type="submit">save</button>
      </form>
    </section>
  );
};

export default UserForm;
