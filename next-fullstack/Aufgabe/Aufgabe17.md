# Löschen von Movies

Implementiere die Möglichkeit einen Moviedatensatz zu löschen.

Implementiere die delteMovie Server Function in /app/actions/movie.ts - (inklusive http call)

Implementiere eine Button-Komponente, die eine Id des zu löschenden Datensatzes erhält und die deleteMovie Function aufruft.

In der Server Function, ruf die `revalidatePath('/movies');`Funktion auf, um die statischen Inhalte neu zu generieren.
