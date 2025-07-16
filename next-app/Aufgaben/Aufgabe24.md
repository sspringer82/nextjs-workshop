# Create Movie

erzeuge eine neue Seite `movies/create/page.tsx` - als client Component mit `use client`

Implementiere ein Formular zur Erstellung eines neuen Movies.

Nutze die `useActionState`-Funktion, um das Formular abzusenden.

```ts
const [, submitAction] = useActionState<State, FormData>(createMovie, {
    error: '',
  });

  <form action={submitAction}>
```

Implementiere die createMovie-Funktion als Server Function `use server`

Speichere die Daten mit einem POST-Request im Backend

nutze redirect in der Server Function für die Weiterleitung auf die Liste https://nextjs.org/docs/app/api-reference/functions/redirect
