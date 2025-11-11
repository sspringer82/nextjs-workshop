import { useRef, useState } from 'react';

type Person = {
  firstName: string;
};

const Uncontrolled: React.FC = () => {
  console.log('RENDER');

  const [person, setPerson] = useState<Person>({
    firstName: '',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    setPerson({
      firstName: inputRef.current?.value || '',
    });
  }

  return (
    <div>
      <div>
        <label>
          Vorname: <input type="text" ref={inputRef} onBlur={handleSubmit} />
        </label>
        <button onClick={handleSubmit}>save</button>
      </div>
      Person: {person.firstName}
    </div>
  );
};

export default Uncontrolled;
