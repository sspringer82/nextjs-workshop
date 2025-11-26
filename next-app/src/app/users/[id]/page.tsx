import ky from 'ky';
import { NextPage } from 'next';
import { setTimeout } from 'node:timers/promises';
import UserLoading from './loading';

type Props = {
  params: Promise<{ id: string }>;
};

async function fetchUser(id: string) {
  await setTimeout(2000);

  const user = await ky
    .get<{ name: string; role: string }>(
      `${process.env.BACKEND_URL}/users/${id}`
    )
    .json();
  return user;
}

const UserDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  const user = await fetchUser(id);

  return (
    <>
      <h1>User details work ({id})</h1>
      <div>
        {user.name} ({user.role})
      </div>
    </>
  );
};

export default UserDetailPage;

export function generateStaticParams() {
  return [
    {
      id: '1',
    },
    { id: '9ec1' },
  ];
}
