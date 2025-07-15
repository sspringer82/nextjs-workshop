'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import clsx from 'clsx';
import './style.css';

const StylingPage: NextPage = () => {
  const [color, setColor] = useState('hotpink');

  const isWarningActive = false;

  return (
    <div>
      <h1 style={{ fontSize: 'xxx-large', fontWeight: 'bold', color: color }}>
        Hallo Welt
      </h1>
      <button
        className={clsx('myButton', { warning: isWarningActive })}
        onClick={() => setColor(color === 'hotpink' ? 'blue' : 'hotpink')}
      >
        invert
      </button>
    </div>
  );
};

export default StylingPage;
