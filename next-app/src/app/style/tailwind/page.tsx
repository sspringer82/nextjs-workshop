import { NextPage } from 'next';

const TailwindPage: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tailwind CSS styling</h1>
      <div className="w-[100px] h-[100px] bg-[hotpink] border-2 border-[plum] rounded-lg shadow-2xl" />
    </div>
  );
};

export default TailwindPage;
