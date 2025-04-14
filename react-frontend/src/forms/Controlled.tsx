import { ChangeEvent, FormEvent, useState } from 'react';

type Form = {
  firstName: string;
  lastName: string;
};

const Controlled: React.FC = () => {
  console.log('RENDER');
  const [state, setState] = useState<Form>({ firstName: '', lastName: '' });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Hier könnte dein Wert stehen:' + state.firstName);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          FirstName:
          <input
            type="text"
            value={state.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          LastName:
          <input
            type="text"
            value={state.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">ok</button>
    </form>
  );
};
export default Controlled;
