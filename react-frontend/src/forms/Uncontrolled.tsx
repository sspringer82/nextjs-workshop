import { FormEvent, useRef, useState } from 'react';

type Form = {
  firstName: string;
};

const Uncontrolled: React.FC = () => {
  const [person, setPerson] = useState<Form>({ firstName: 'Hans-Peter' });

  console.log('RENDER');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log(inputRef.current!.value);
    event.preventDefault();
    console.log('Hier könnte dein Wert stehen ' + inputRef.current!.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={inputRef} defaultValue={person.firstName} />
        </label>
      </div>
      <button type="submit">ok</button>
    </form>
  );
};
export default Uncontrolled;
