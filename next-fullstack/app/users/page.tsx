import { NextPage } from 'next';
import Link from 'next/link';
import DeleteButton from './components/DeleteButton';

const UserPage: NextPage = async () => {
  const response = await fetch('http://localhost:3001/users');
  const users = (await response.json()) as { id: string; name: string }[];

  return (
    <>
      <h1 className="text-4xl font-bold">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <Link href={`/users/${user.id}`}>details</Link>
            <DeleteButton id={user.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
