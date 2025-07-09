# Movie Creation

Voraussetzung: `npm install react-hook-form`

Erzeuge ein Formular, um einen Film zu erzeugen. Felder: title, year

Definiere einen Submithandler `onSubmit`, der die Daten mit einem POST-Request zum Server sendet und die Liste aktualisiert.

```ts
 function onSubmit(values: Person) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
```

Form Element Registrierung: `<input {...register('firstName')} />`

```ts
export async function createMovie(newMovie: CreateMovie): Promise<Movie> {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  });
  if (!response.ok) {
    throw new Error('whoops');
  }
  return response.json();
}
```
