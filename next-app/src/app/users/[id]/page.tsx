import { NextPage } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

const UsersDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  return <h1>User Details works {id}</h1>;
};

export default UsersDetailPage;
