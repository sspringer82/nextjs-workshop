import { useEffect, useState } from 'react';

const StateLifecycle: React.FC = () => {
  console.log('RENDER');

  const [state, setState] = useState('noname');
  const [address, setAddress] = useState({
    street: 'Mainstreet 42',
    city: 'Nürnberg',
  });

  // mount
  useEffect(() => {
    fetch('http://de')
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  // every update
  useEffect(() => {
    console.log('bei jedem update');
  });

  // dedicated update
  useEffect(() => {
    console.log('nur bei myValue change');
  }, [myValue]);

  // unmount
  useEffect(() => {
    return () => {
      console.log('cleanup');
    };
  });

  return (
    <div>
      {state} <br />
      <button onClick={() => setState('Dieter' + Math.random())}>
        change name
      </button>
      <br />
      {address.street} {address.city} <br />
      <button
        onClick={() => {
          setAddress((prevAddress) => {
            // const clone = structuredClone(prevAddress);
            // clone.city = 'Hamburg';
            // return clone;
            return { ...prevAddress, city: 'Hamburg' };
          });
        }}
      >
        change address
      </button>
    </div>
  );
};

export default StateLifecycle;
