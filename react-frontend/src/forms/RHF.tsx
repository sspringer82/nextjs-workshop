import { useForm } from 'react-hook-form';

type Person = {
  firstName: string;
  lastName: string;
};

const RHF: React.FC = () => {
  const { handleSubmit, register } = useForm<Person>();

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
