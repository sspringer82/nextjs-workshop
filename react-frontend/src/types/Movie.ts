export type Movie = {
  id: number;
  title: string;
  year: number;
};

export type CreateMovie = Omit<Movie, 'id'>;
