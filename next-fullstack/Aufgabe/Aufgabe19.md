# Serverseitige Validierung mit Server Functions

Erzeuge ein Schema für die Validierung eines Movie Datensatzes.

Übermittle die Daten des Formulars an die Server Function.

Überprüfe in der Server Function mit dem Zod-Schema `movieSchema.safeParse(data)`, ob die Daten valide sind.

Tritt ein Validierungsfehler auf, füge die Fehlermeldung in den Rückgabewert (und den State) der `useActionState` ein.

Zeige die Fehler beim jeweiligen Formularfeld an.
