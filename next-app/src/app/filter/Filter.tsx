'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Filter: React.FC = () => {
  const router = useRouter();

  const [filter, setFilter] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push('/filter?filter=' + encodeURIComponent(filter));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ border: '1px solid black' }}
        type="text"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
