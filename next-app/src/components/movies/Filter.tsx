'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  initialValue?: string;
};

const Filter: React.FC<Props> = ({ initialValue = '' }) => {
  const router = useRouter();

  console.log(initialValue);

  const [filter, setFilter] = useState<string>(initialValue);

  function doFilter() {
    router.push(`/movies?filter=${encodeURIComponent(filter)}`);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        doFilter();
      }}
    >
      <input
        type="text"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
      <button type="submit">filter</button>
    </form>
  );
};

export default Filter;
