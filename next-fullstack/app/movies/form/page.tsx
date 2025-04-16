'use client';

import { createMovie, MyType } from '@/app/actions/movie';
import { NextPage } from 'next';
import { useActionState } from 'react';

const MovieFormPage: NextPage = () => {
  const [error, submitAction, isPending] = useActionState<MyType, FormData>(
    createMovie,
    null
  );

  return (
    <>
      {error && <div>{error.error}</div>}
      <h1>Create new movie</h1>
      <form action={submitAction}>
        <div>
          <label>
            Title:{' '}
            <input
              type="text"
              name="title"
              defaultValue={error?.values.title}
            />
          </label>
        </div>
        <div>
          <label>
            Year:{' '}
            <input type="text" name="year" defaultValue={error?.values.year} />
          </label>
        </div>
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default MovieFormPage;
