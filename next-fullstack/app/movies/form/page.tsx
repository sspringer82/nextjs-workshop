'use client';

import { createMovie, MyType } from '@/app/actions/movie';
import { NextPage } from 'next';
import { useActionState } from 'react';

const MovieFormPage: NextPage = () => {
  const [error, submitAction] = useActionState<MyType, FormData>(
    createMovie,
    null
  );

  console.log(error);

  return (
    <>
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
          {error?.error.title && (
            <div style={{ color: 'red' }}>{error.error.title}</div>
          )}
        </div>
        <div>
          <label>
            Year:{' '}
            <input type="text" name="year" defaultValue={error?.values.year} />
          </label>
          {error?.error.year && (
            <div style={{ color: 'red' }}>{error.error.year}</div>
          )}
        </div>
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default MovieFormPage;
