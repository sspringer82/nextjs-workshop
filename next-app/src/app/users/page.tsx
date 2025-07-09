import { getAllUsers } from '@/api/users.api';
import { NextPage } from 'next';

const UsersPage: NextPage = async () => {
  try {
    const users = await getAllUsers();
    let content;

    if (users.length === 0) {
      content = <div>No users found</div>;
    } else {
      content = (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h1>User List</h1>
        {content}
      </div>
    );
  } catch {
    return <div>Oh noooo! 👻</div>;
  }
};

export default UsersPage;
