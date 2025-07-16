export type Movie = {
  id: string;
  title: string;
  year: number;
};

export type CreateMovie = Omit<Movie, 'id'>;

export type MovieForm = {
  serverError?: string;
  error: null | {
    title?: string;
    year?: string;
  };
  values: CreateMovie | null;
};
