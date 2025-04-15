import { useEffect, useState } from 'react';
import { User } from './User';
import ListItem from './ListItem';
import { getAllUsers } from './user.api';
import useList from './useList';

const List: React.FC = () => {
  const users = useList<User>(getAllUsers);

  let content = <div>no data</div>;

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
      <h1 className="headline">User List {users.length}</h1>
      {content}
    </>
  );
};

export default List;
