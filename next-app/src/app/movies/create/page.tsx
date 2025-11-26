'use client';

import { createMovieFunction, State } from '@/functions/movie.function';
import { NextPage } from 'next';
import { useActionState } from 'react';

const CreateMoviePage: NextPage = () => {
  const [state, submitAction] = useActionState<State, FormData>(
    createMovieFunction,
    {
      error: '',
      values: {
        title: '',
        year: 0,
      },
    }
  );

  return (
    <form action={submitAction}>
      {state.error}
      <div style={{ margin: 1 }}>
        <label>
          Title:{' '}
          <input
            className="border"
            type="text"
            name="title"
            defaultValue={state.values.title}
          />
        </label>
      </div>
      <div style={{ margin: 1 }}>
        <label>
          Year:{' '}
          <input
            className="border"
            type="number"
            name="year"
            value={state.values.year}
          />
        </label>
      </div>
      <div>
        <button type="submit" className="border">
          save
        </button>
      </div>
    </form>
  );
};

export default CreateMoviePage;
