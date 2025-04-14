import { ReactNode } from 'react';
import { User } from './User';

// export default function List(): ReactNode {
//   return <div>Hallo Welt</div>;
// }

const users: User[] = [
  { id: '1', name: 'klaus', role: 'admin' },
  { id: '2', name: 'anna', role: 'editor' },
  { id: '3', name: 'peter', role: 'viewer' },
  { id: '4', name: 'maria', role: 'editor' },
  { id: '5', name: 'john', role: 'admin' },
  { id: '6', name: 'susan', role: 'viewer' },
];

const List: React.FC = () => {
  let content = <div>Keine Datensätze vorhanden</div>;

  if (users.length > 0) {
    content = (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1 className="headline">User List {users.length}</h1>
      {content}
      {/* <div>
        <label htmlFor=""></label>
        <input type="text" id="search" />
      </div> */}
    </>
  );
};

export default List;
