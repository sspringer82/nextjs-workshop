import { ReactNode, useEffect, useState } from 'react';
import { User } from './User';
import ListItem from './ListItem';

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

function Headline() {
  return <h1>Headline</h1>;
}

const List: React.FC = () => {
  const [count, setCount] = useState(0);

  let content = <div>Keine Datensätze vorhanden</div>;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1_000);

    return () => {
      console.log('cleanup');
      clearInterval(interval);
    };
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
          <ListItem key={user.id} user={user} />
        ))}
      </ul>
    );
  }

  return (
    <>
      <Headline />
      <h1 className="headline">User List {users.length}</h1>
      <div>Count: {count}</div>
      {content}
      {/* <div>
        <label htmlFor=""></label>
        <input type="text" id="search" />
      </div> */}

      <button
        onClick={(event) => {
          console.log(event.target);
          console.log('Hallo welt');
        }}
      >
        Click me
      </button>
    </>
  );
};

export default List;
