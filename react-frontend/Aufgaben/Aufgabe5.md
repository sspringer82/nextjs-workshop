# Data Fetching

Lade die Daten der Movieliste vom Backend (http://localhost:3001/movies)

Lagere die Data-Fetching Logik in eine eigene Datei aus.

```ts
fetch('http://localhost:3001/movies')
  .then((response) => response.json())
  .then((data) => console.log(data));
```
