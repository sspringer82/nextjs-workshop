# Revalidate Tag

https://nextjs.org/docs/app/api-reference/functions/revalidateTag

nutze das Tag `movie`, um die Daten beim Laden zu kennzeichnen (in `movies.api.ts`).

Wenn du einen Datensatz löschst, nutze `revalidateTag` statt `revalidatePath`, um die statisch gebauten Inhalte zu erneuern.
