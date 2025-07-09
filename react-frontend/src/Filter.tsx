import { useRef, useState, type ChangeEvent } from 'react';

type Props = {
  setFilter: (filter: string) => void;
  isControlled: boolean;
};

const Filter: React.FC<Props> = ({ setFilter, isControlled = false }) => {
  const filterRef = useRef<HTMLInputElement>(null);
  const [controlledFilter, setControlledFilter] = useState<string>('');

  if (isControlled) {
    function handleFiltler(event: ChangeEvent<HTMLInputElement>) {
      setControlledFilter(event.target.value);
      setFilter(event.target.value.toLowerCase());
    }

    return (
      <label>
        Filter:
        <input type="text" value={controlledFilter} onChange={handleFiltler} />
      </label>
    );
  } else {
    function handleFilter() {
      const filterValue = filterRef.current?.value || '';

      setFilter(filterValue.toLowerCase());
    }

    return (
      <label>
        Filter:
        <input type="text" ref={filterRef} />
        <button onClick={handleFilter}>filter</button>
      </label>
    );
  }
};

export default Filter;
