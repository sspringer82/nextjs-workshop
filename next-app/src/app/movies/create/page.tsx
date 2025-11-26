'use client';

import { createMovieFunction, State } from '@/functions/movie.function';
import { NextPage } from 'next';
import { useActionState } from 'react';

const CreateMoviePage: NextPage = () => {
  const [, submitAction] = useActionState<State, FormData>(
    createMovieFunction,
    {
      error: '',
    }
  );

  return (
    <form action={submitAction}>
      <div style={{ margin: 1 }}>
        <label>
          Title: <input className="border" type="text" name="title" />
        </label>
      </div>
      <div style={{ margin: 1 }}>
        <label>
          Year: <input className="border" type="number" name="year" />
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
