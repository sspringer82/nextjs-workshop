# Serverseitige Validierung mit Server Functions

Erzeuge ein Schema für die Validierung eines Movie Datensatzes.

Übermittle die Daten des Formulars an die Server Function.

Überprüfe in der Server Function mit dem Zod-Schema `movieSchema.safeParse(data)`, ob die Daten valide sind.

Tritt ein Validierungsfehler auf, füge die Fehlermeldung in den Rückgabewert (und den State) der `useActionState` ein.

Zeige die Fehler beim jeweiligen Formularfeld an.

`const movie = Object.fromEntries(formData.entries()) as unknown as Movie;`

```
{"success": false,
"errors": [
  {
    "code": "too_small",
    "minimum": 2,
    "type": "string",
    "inclusive": true,
    "exact": false,
    "message": "String must contain at least 2 character(s)",
    "path": [
      "title"
    ]
  },
  {
    "code": "too_small",
    "minimum": 1900,
    "type": "number",
    "inclusive": true,
    "exact": false,
    "message": "Number must be greater than or equal to 1900",
    "path": [
      "year"
    ]
  }
]
}
```
