import { NextPage } from 'next';

const StylingPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-12 mb-8 drop-shadow-lg">
        Hallo Welt
      </h1>
    </div>
  );
};

export default StylingPage;
