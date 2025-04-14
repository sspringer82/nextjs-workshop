export type Movie = {
  id: string;
  title: string;
  year: number;
};
export type CreateMovie = Omit<Movie, 'id'>;
