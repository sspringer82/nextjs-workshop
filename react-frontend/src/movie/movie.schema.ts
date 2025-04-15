import { z } from 'zod';

export const movieSchema = z.object({
  title: z.string().min(2, 'Zu kurz!!!').max(10, 'Zu lang!!!'),
  year: z.coerce.number().int().min(1900).max(2025),
});

export type CreateMovie = z.infer<typeof movieSchema>;
