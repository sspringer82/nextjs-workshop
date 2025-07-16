'use client';

import { createUser, State } from '@/functions/user.function';
import { NextPage } from 'next';
import { useActionState } from 'react';

const UserCreatePage: NextPage = () => {
  const [, submitAction] = useActionState<State, FormData>(createUser, {
    error: '',
  });

  return (
    <form action={submitAction}>
      Name: <input type="text" name="name" />
      <button>ok</button>
    </form>
  );
};

export default UserCreatePage;
