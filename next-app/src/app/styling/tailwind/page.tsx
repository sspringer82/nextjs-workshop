import { NextPage } from 'next';

const StylingPage: NextPage = () => {
  return (
    <div className="border-2 border-blue-500 shadow-lg m-8">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-600 mt-12 mb-8 drop-shadow-2xl">
        Hallo Welt
      </h1>
    </div>
  );
};

export default StylingPage;
