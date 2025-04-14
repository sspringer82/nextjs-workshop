# Löschen von Datensätzen

In der Handlerfunktion für das Löschen: DELETE Call zum Server

```
fetch('http://localhost:3001/movies/:id', {
  method: 'DELETE'
})
```

Variante 1: Liste neu vom Server holen
Variante 2: Datensatz zusätzlich im Frontend löschen

Bonus: api-Logik in eine eigene Funktion auslagern
Bonus: Error Handling!
