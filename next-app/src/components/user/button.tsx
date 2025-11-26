'use client';

import { doItAction } from '@/actions/user.actions';

const Button: React.FC = () => {
  return (
    <button
      onClick={() => {
        doItAction('World');
        console.log('Hello Client');
      }}
    >
      click me
    </button>
  );
};

export default Button;
