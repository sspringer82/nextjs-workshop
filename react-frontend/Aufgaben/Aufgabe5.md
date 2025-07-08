# Data Fetching

Lade die Daten der Movieliste vom Backend (http://localhost:3001/movies)

Lagere die Data-Fetching Logik in eine eigene Datei aus.

```ts
fetch('http://localhost:3001/movies')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

```ts
async function fetchData() {
  const response = await fetch('http://localhost:3001/movies');
  const data = await response.json();
  return data;
}
```

Bonus: Errorhandling! Zeige eine Fehlermeldung an, wenn der Server nicht erreichbar ist (Backend ausschalten) oder der Endpunkt eine 404 liefert (URL-Pfad ändern).
