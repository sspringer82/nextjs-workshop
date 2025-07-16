export type Movie = {
  id: string;
  title: string;
  year: number;
};

export type CreateMovie = Omit<Movie, 'id'>;

export type MovieForm = {
  error: null | {
    title?: string;
    year?: string;
  };
};
