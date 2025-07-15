# Liste Filtern mit searchParams

Erzeuge eine neue Seite auf der du die Liste der Filme nach Titel filtern kannst

Erzeuge ein neues Verzeichnis app/filter und dort eine page.tsx

Stelle die Liste wie gewohnt dar.

Erzeuge ein Formular, mit dem die Liste gefiltert werden kann. Beim Absenden des Formulars: setze die Suchparameter. Nutze dafür den Next Router:

```ts
import { useRouter } from 'next/navigation';

const router = useRouter();

router.push(`/filter?query=${encodeURIComponent(query)}`);
```

Nutze die searchParams-Prop, um auf die Suchparameter zuzugreifen:

```ts
interface Props {
  searchParams: Promise<{ query?: string }>;
}

const FilterMoviesPage: NextPage<Props> = async ({ searchParams }) => {
  const {query} = await searchParams;

```
