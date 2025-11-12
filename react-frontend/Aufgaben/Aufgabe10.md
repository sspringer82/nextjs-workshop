# Provider und Context API

Erzeuge einen Context, um die Movies vorzuhalten `createContext`

Definiere dazu einen passenden Context Typ

Erzeuge einen Provider und eine zugehörige Komponente, die die ihr übergebenen children rendert.

generiere einen customHook für den Zugriff auf den Context (`useMovieContext`)

Füge den Provider in die App-Komponente (als Elternkomponente der Movies) ein.

Binde den Context in die Movies-Komponente ein und ersetze useState durch den Aufruf von `useMovieContext` (beide sind API-kompatibel)

Erzeuge eine zusätzliche Komponente, die die Anzahl der Movies anzeigt. Diese Komponente soll keine Kindkomponte der Movies Komponente sein.
