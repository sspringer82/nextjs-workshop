import { getUserById } from '@/api/users.api';
import { NextPage } from 'next';

type Props = {
  params: Promise<{ userId: string }>;
};

const UsersDetailPage: NextPage<Props> = async ({ params }) => {
  const { userId } = await params;

  const user = await getUserById(userId, 10_000);

  return <h1>Hello {user.name}</h1>;
};

export default UsersDetailPage;

// export async function generateStaticParams() {
//   const users = await getAllUsers();

//   const data = users.map((user) => ({ userId: user.id }));
//   data.splice(0, 4);
//   return data;
// }
