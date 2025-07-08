import { useRef } from 'react';

const Uncontrolled: React.FC = () => {
  console.log('RENDER');

  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    console.log(inputRef.current!.value);
    console.log('Hier könnte Ihr Wert stehen: ');
  }

  function setValue() {
    inputRef.current!.value = 'Hastdunichtgesehen';
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>click me</button>
      <button onClick={setValue}>click me harder</button>
    </div>
  );
};

export default Uncontrolled;
