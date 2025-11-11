import { useState, type ChangeEvent } from 'react';

type Person = {
  firstName: string;
  lastName: string;
};

const Controlled: React.FC = () => {
  console.log('RENDER');

  const [person, setPerson] = useState<Person>({
    firstName: '',
    lastName: 'Schmitt',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPerson((prevPerson) => {
      return { ...prevPerson, [event.target.name]: event.target.value };
    });
  }

  return (
    <div>
      <div>
        <label>
          Vorname:
          <input
            type="text"
            value={person.firstName}
            onChange={handleChange}
            name="firstName"
          />
        </label>
      </div>
      <div>
        <label>
          Nachname:
          <input
            type="text"
            value={person.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      Person: {person.firstName} {person.lastName}
    </div>
  );
};

export default Controlled;
