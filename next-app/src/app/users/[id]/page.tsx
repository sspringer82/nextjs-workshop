import ky from 'ky';
import { NextPage } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

const UserDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  const user = await ky
    .get<{ name: string; role: string }>(
      `${process.env.BACKEND_URL}/users/${id}`
    )
    .json();

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
