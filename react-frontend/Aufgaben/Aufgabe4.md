# click handling

Implementiere eine Möglichkeit, um Datensätze zu löschen.

Füge einen button pro Zeile hinzu, registriere einen Eventhandler, mit dem du den jeweiligen Datensatz löschen kannst.

```tsx
<button onClick={() => ...{}}>click me</button>
```

## Tipp:

um den State der Elternkomponente zu manipulieren, definiere eine Funktion in der Elternkomponente und übergib sie der Kindkomponten.

Element aus einem Array löschen:

```ts
myArr.filter((el) => el.id !== id);
```

```ts
function deleteMe(id: string) {}

(id: string) => void
```

```tsx
<ListItem movie={movie} onDelete={handleDelete}>

type Props = {
  movie: Movie;
  onDelete: (id: string) => void
}
```
