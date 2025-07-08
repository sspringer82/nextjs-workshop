import { useState, type ChangeEvent } from 'react';

const Controlled: React.FC = () => {
  const [value, setValue] = useState('Hans-Dieter');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleClick() {
    console.log(value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} name="myName" />
      <button onClick={handleClick}>push me</button>
    </div>
  );
};

export default Controlled;
