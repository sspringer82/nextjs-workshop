import ky from 'ky';
import { NextPage } from 'next';
import Link from 'next/link';
import { json } from 'zod/v4/mini';

type Props = {
  searchParams: Promise<{ query?: string }>;
};

const UsersPage: NextPage<Props> = async ({ searchParams }) => {
  const { query } = await searchParams;

  const users = await ky
    .get<{ id: string; name: string; role: string }[]>(
      `${process.env.BACKEND_URL}/users`
    )
    .json();

  return (
    <div>
      <h1>Users Page {query}</h1>

      {users
        .filter((user) => !query || user.name.includes(query))
        .map((user) => (
          <div key={user.id}>
            <h2>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h2>
            <p>{user.role}</p>
          </div>
        ))}
    </div>
  );
};

export default UsersPage;
