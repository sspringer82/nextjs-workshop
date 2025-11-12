import z from 'zod/v4';

export const MovieSchema = z.object({
  title: z.string().min(2, 'too short!').max(10, 'too long!'),
  year: z
    .int('Year is required')
    .gte(1900, 'must be after 1900')
    .lte(new Date().getFullYear(), 'must be this year or earlier'),
});
