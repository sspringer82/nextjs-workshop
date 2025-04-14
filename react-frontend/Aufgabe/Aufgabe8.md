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
