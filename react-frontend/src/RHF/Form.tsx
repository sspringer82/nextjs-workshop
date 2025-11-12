import { useForm } from 'react-hook-form';

type Person = {
  firstName: string;
  lastName: string;
};

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<Person>();

  function onSubmit(data: Person) {
    console.log(data);
  }

  return (
    <div>
      <h1>Person erzeugen</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Vorname: <input type="text" {...register('firstName')} />
          </label>
        </div>
        <div>
          <label>
            Nachname: <input type="text" {...register('lastName')} />
          </label>
        </div>
        <button type="submit">speichern</button>
      </form>
    </div>
  );
};

export default Form;
