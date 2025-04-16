'use client';

import { createUser } from '@/app/actions/user';
import { NextPage } from 'next';
import { useActionState } from 'react';

const UserForm: NextPage = () => {
  const [error, submitAction, isPending] = useActionState<string, FormData>(
    createUser,
    ''
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (isPending) {
    return <div>jaja, ich mach ja schon</div>;
  }

  return (
    <>
      <h1>create new user</h1>
      <form action={submitAction}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              style={{ border: '1px solid lightgrey' }}
            />
          </label>
        </div>
        <div>
          <label>
            Role:
            <input
              type="text"
              name="role"
              style={{ border: '1px solid lightgrey' }}
            />
          </label>
        </div>
        <button type="submit">speichern</button>
      </form>
    </>
  );
};

export default UserForm;
