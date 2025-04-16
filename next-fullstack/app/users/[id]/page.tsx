import { NextPage } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];
}

const UserDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return <h1 className="text-4xl font-bold">User Detail Page {id}</h1>;
};

export default UserDetailPage;
