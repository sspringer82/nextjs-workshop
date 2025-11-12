# Schema Validierung

https://www.react-hook-form.com/get-started/#SchemaValidation

Installiere die erforderlichen Pakete: `npm install @hookform/resolvers zod`

Erzeuge ein Schema mit Zod für das Movie-Objekt:

- Der title soll mindestens (min) 2 Zeichen und maximal (max) 10 Zeichen lang sein
- Das year soll eine positive (positive) Ganzzahl (int) sein, die größer oder gleich (min) 1900 und höchstens (max) 2025 ist.

Binde den Resolver in das Formular ein:

```ts
import { zodResolver } from '@hookform/resolvers/zod';

useForm({
  resolver: zodResolver(schema),
});
```

falls ein Validierungsfehler vorliegt, kannst du über `const { formState:{ errors } } = useForm(...` darauf zugreifen.

Die Fehler liegen im errors-Objekt unter den jeweiligen Feldnamen.

Zeige eine Fehlermeldung an, falls ein Fehler vorhanden ist.

```ts
const schema = z.object({
  title: z.string().min(2).max(10),
  year: z.coerce.number().int().gte(1900).lte(2025),
});
```
