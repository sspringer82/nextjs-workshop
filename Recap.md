# React Basics

- Setup einer SPA mit vite
- Funktionskomponenten + JSX
  - Schleifen (Array.map)
  - Bedingungen (if + Variablen, &&, ?:)
- State: `const [state, setState] = useState<string>('bla')`
- Lifecycle mit useEffect für Mount, Update und Unmount
- Komponentenhierarchie
  - Eltern + Kindkomponenten
  - Datenfluss mit Props (input + output)
- Eventhandling
  - click, change, etc.
  - über Eventhandler in Attributen (z.B. onClick)
- Data Fetching
  - Daten nach dem Mounten laden
  - Data Fetching aus der Komponente auslagern
- Formulare
  - Uncontrolled Components mit useRef und direktem Zugriff auf die Elemente
  - Controlled Components mit value und onChange und sync mit dem State
  - react-hook-form zur komfortablen Steuerung von Formularen
  - Validierung mit zod
- Context API
  - Provider stellt einen Wert für einen Komponentenbaum zur Verfügung
  - useContext greift auf den Wert des nächstgelegenen Providers zu
- Custom Hooks
  - Auslagern von Funktionalität in eine Funktion
  - Funktion kann Hooks (useState, useEffect, useContext) verwenden
  - Ziel: Komponenten werden kleiner und Wiederverwendbarkeit

# Next

- Setup mit create-next-app
- Routing mit dem App-Router
  - Dateisystembasiert
  - Bildet URL-Pfad im Dateisystem ab
  - Einstiegspunkt: page.tsx
- Server Components
  - asynchron
  - direktes Data Fetching
  - Fehlerbehandlung über try/catch
  - Werden statisch zur Buildzeit gerendert
  - Kein Lifecycle, kein State, keine User Interaktion
- Dynamisches Rendern
  - Komponenten werden on demand serverseitig gerendert
  - Variablen im Pfad ([id]) - Zugriff über asynchrone params-Prop
  - dynamische Funktionen wie cookies, headers, searchParams-Prop oder fetch-cache Disabled
  - generatedStaticParams: liefert dynamische Daten zur Buildzeit
- Navigation
  - Link-Komponente mit prefetching by default
