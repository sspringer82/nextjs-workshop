import { NextPage } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const UserDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return <h1 className="text-4xl font-bold">User Detail Page {id}</h1>;
};

export default UserDetailPage;
