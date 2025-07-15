import { getAllUsers } from '@/api/users.api';
import { NextPage } from 'next';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

const UsersPage: NextPage = async () => {
  try {
    const users = await getAllUsers();
    let content;

    if (users.length === 0) {
      content = <div>No users found</div>;
    } else {
      content = (
        <ul className="list-disc list-inside space-y-2">
          {users.map((user) => (
            <li key={user.id} className="text-lg text-gray-700">
              <Link href={`/users/${user.id}`}>{user.name}</Link>
              <DeleteButton id={user.id} />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h1 className="text-2xl font-bold text-center my-4">User List</h1>
        {content}
      </div>
    );
  } catch {
    <div className="text-red-500 text-center font-semibold mt-4">
      Oh noooo! 👻
    </div>;
  }
};

export default UsersPage;
