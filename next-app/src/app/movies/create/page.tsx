'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createMovie } from '@/functions/movie.function';
import { MovieForm } from '@/types/Movie';
import { NextPage } from 'next';
import { useActionState } from 'react';

const CreateMoviePage: NextPage = () => {
  const [state, submitAction] = useActionState<MovieForm, FormData>(
    createMovie,
    {
      error: null,
      values: null,
    }
  );

  return (
    <div>
      <h1>Create movie</h1>
      {state.serverError && (
        <div className="text-red-500">{state.serverError}</div>
      )}
      <form action={submitAction}>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" defaultValue={state.values?.title} />
        {state?.error?.title && (
          <div className="text-red-500">{state.error.title}</div>
        )}
        <br />
        <Label htmlFor="year">Year</Label>
        <Input type="number" name="year" defaultValue={state.values?.year} />
        {state?.error?.year && (
          <div className="text-red-500">{state.error.year}</div>
        )}
        <br />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default CreateMoviePage;
