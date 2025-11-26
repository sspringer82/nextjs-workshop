import z from 'zod/v4';

export const MovieSchema = z
  .object({
    id: z.string(),
    title: z.string().min(1).max(200),
    year: z.coerce.number().int(),
  })
  .strip();

export type Movie = z.infer<typeof MovieSchema>;

export const CreateMovieSchema = MovieSchema.pick({
  title: true,
  year: true,
}).strip();
export type CreateMovie = z.infer<typeof CreateMovieSchema>;
