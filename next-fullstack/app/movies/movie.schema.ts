import { z } from 'zod';

export const movieSchema = z.object({
  title: z.string().min(2).max(10),
  year: z.coerce.number().min(1900).max(2025),
});
