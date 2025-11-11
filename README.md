Hallo Welt

Mittagspause: 11:30

GitHub Repo: https://github.com/sspringer82/nextjs-workshop

Setup:

- npm create vite@latest
  npm create vite@latest react-frontend -- --template react-ts

Start:

npm run dev

Links:

- https://react.dev/learn/thinking-in-react
- https://overreacted.io/a-complete-guide-to-useeffect/
- HTTP Libs
  - https://github.com/sindresorhus/ky
  - https://github.com/axios/axios
- Schema Validierung: https://zod.dev/
- https://tanstack.com/query/latest

Komponenten:

- Name beginnt mit einem Großbuchstaben
- Komponente ist eine Funktion, die JSX zurückgibt
- Eine Komponente pro Datei
- Die Komponentendatei heißt wie die Komponente

Backend:

1. `npm install json-server`
2. `react-frontend/data.json` aus dem repo kopieren (https://github.com/sspringer82/nextjs-workshop)
3. `npx json-server -p 3001 data.json`
4. parallel dazu `npm run dev`
