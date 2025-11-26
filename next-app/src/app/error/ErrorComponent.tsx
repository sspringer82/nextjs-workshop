'use client';

import { useState } from 'react';

const ErrorComponent: React.FC = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('An error has occurred!');
  }

  return (
    <div>
      <button
        style={{ border: '2px solid red' }}
        onClick={() => {
          setError(true);
        }}
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorComponent;
