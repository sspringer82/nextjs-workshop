import { useState } from 'react';

type Item = { id: number; name: string };

const Delete: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  function handleDelete(id: number) {
    console.log('Deleting item with id:', id);
    setItems((prevItems) => {
      const clone = structuredClone(prevItems);
      return clone.filter((item) => item.id !== id);
    });
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default Delete;
