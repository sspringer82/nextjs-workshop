import z from 'zod/v4';

const movieSchema = z.object({
  title: z.string().min(2, 'Zu kurz!!!').max(10, 'Zu lang!!!'),
  year: z.coerce.number().int().gte(1900).lte(2025),
});

export default movieSchema;
