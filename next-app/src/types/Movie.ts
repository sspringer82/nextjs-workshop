import z from 'zod/v4';

export const MovieSchema = z.object({
  id: z.string(),
  title: z.string(),
  year: z.coerce.number().int(),
});

export type Movie = z.infer<typeof MovieSchema>;
