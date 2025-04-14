import { Dispatch, RefObject, SetStateAction } from 'react';

type Props = {
  inputRef: RefObject<HTMLInputElement | null>;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ inputRef, setFilter }) => {
  return (
    <div>
      <label>
        Filter:
        <input type="text" ref={inputRef} />
        <button onClick={() => setFilter(inputRef.current!.value)}>
          filter
        </button>
      </label>
    </div>
  );
};

export default Filter;
