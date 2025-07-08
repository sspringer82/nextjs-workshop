import { useState, type ChangeEvent } from 'react';

type Address = {
  street: string;
  city: string;
};

const ComplexControlled: React.FC = () => {
  const [value, setValue] = useState<Address>({
    street: '',
    city: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  }

  function handleClick() {
    console.log(value);
  }

  return (
    <div>
      <label>
        Street:{' '}
        <input name="street" value={value.street} onChange={handleChange} />
      </label>
      <br />
      <label>
        City: <input name="city" value={value.city} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleClick}>push me</button>
    </div>
  );
};

export default ComplexControlled;
