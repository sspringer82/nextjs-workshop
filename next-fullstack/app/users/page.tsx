import { NextPage } from 'next';

const UserPage: NextPage = async () => {
  const response = await fetch('http://localhost:3001/users');
  const users = (await response.json()) as { id: string; name: string }[];

  return (
    <>
      <h1 className="text-4xl font-bold">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
