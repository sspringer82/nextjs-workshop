import { getAllUsers } from '@/api/users.api';
import { NextPage } from 'next';

type Props = {
  params: Promise<{ userId: string }>;
};

const UsersDetailPage: NextPage<Props> = async ({ params }) => {
  const { userId } = await params;

  return <h1>User Details works {userId}</h1>;
};

export default UsersDetailPage;

export async function generateStaticParams() {
  const users = await getAllUsers();

  const data = users.map((user) => ({ userId: user.id }));
  data.splice(0, 4);
  return data;
}
