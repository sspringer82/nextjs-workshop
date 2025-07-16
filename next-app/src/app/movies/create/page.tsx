'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createMovie } from '@/functions/movie.function';
import { MovieForm } from '@/types/Movie';
import { NextPage } from 'next';
import { useActionState } from 'react';

const CreateMoviePage: NextPage = () => {
  const [error, submitAction] = useActionState<MovieForm, FormData>(
    createMovie,
    {
      error: null,
    }
  );

  return (
    <div>
      <h1>Create movie</h1>
      <form action={submitAction}>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" />
        {error?.error?.title && (
          <div className="text-red-500">{error.error.title}</div>
        )}
        <br />
        <Label htmlFor="year">Year</Label>
        <Input type="number" name="year" />
        {error?.error?.year && (
          <div className="text-red-500">{error.error.year}</div>
        )}
        <br />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default CreateMoviePage;
