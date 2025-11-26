'use client';

import { doItAction, doSomethingElseAction } from '@/actions/user.actions';

const Button: React.FC = () => {
  return (
    <div>
      <button
        onClick={() => {
          doItAction('World');
          console.log('Hello Client');
        }}
      >
        click me
      </button>
      <button onClick={() => doSomethingElseAction()}>do something else</button>
    </div>
  );
};

export default Button;
