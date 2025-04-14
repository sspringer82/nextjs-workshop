import { ReactNode, useEffect, useState } from 'react';
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
  console.log('RENDER');
  const [count, setCount] = useState(0);

  let content = <div>Keine Datensätze vorhanden</div>;

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1_000);
  }, []);

  /*
  // mount
  useEffect(() => {}, []);
  // update
  useEffect(() => {}); // bei jedem Render
  useEffect(() => {}, [count]); // nur wenn sich count ändert
  // unmount
  useEffect(() => {
    return () => {}; // wird aufgerufen wenn unmounted
  }, []);
  */

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
      <div>Count: {count}</div>
      {content}
      {/* <div>
        <label htmlFor=""></label>
        <input type="text" id="search" />
      </div> */}
    </>
  );
};

export default List;
