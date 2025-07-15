'use client';

import { NextPage } from 'next';
import { lazy, Suspense, useState } from 'react';
// import LazyComponent from './LazyComponent';

const LazyComponent = lazy(() => import('./LazyComponent'));

const SuspensePage: NextPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      Suspense Works
      <button
        style={{ border: '1px solid black' }}
        onClick={() => setShow(!show)}
      >
        Toggle Lazy Component
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};

export default SuspensePage;
