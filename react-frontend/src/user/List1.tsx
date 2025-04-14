import { ReactNode } from 'react';

// export default function List(): ReactNode {
//   return <div>Hallo Welt</div>;
// }

const users = [
  { id: 1, name: 'klaus', role: 'admin' },
  { id: 2, name: 'anna', role: 'editor' },
  { id: 3, name: 'peter', role: 'viewer' },
  { id: 4, name: 'maria', role: 'editor' },
  { id: 5, name: 'john', role: 'admin' },
  { id: 6, name: 'susan', role: 'viewer' },
];

const List: React.FC = () => {
  return (
    <>
      <h1>User List {users.length}</h1>
      {users.length === 0 && <div>Keine Datensätze vorhanden</div>}
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
