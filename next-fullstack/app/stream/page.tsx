import { NextPage } from 'next';
import C1 from './components/C1';
import C2 from './components/C2';
import { Suspense } from 'react';
import { PacmanLoader } from 'react-spinners';

const StreamPage: NextPage = () => {
  return (
    <>
      <h1>Hello Stream</h1>

      <Suspense fallback={<PacmanLoader />}>
        <C1 />
      </Suspense>
      <Suspense fallback={<div>lade ⏱️ C2</div>}>
        <C2 />
      </Suspense>
    </>
  );
};

export default StreamPage;
