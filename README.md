# Guten Morgen und herzlich willkommen zum Next.js-Workshop

Repository: https://github.com/sspringer82/nextjs-workshop

## links

- https://github.com/facebook/create-react-app (deprecated)
- Build system für React https://vite.dev/
- Axios (HTTP Request) https://axios-http.com/docs/intro
- ky (Axios Alternative) https://github.com/sindresorhus/ky
- Formulare:
  - React Hook Form (das Gute): https://react-hook-form.com/
  - Formik (das nicht so Gute): https://formik.org/
  - React Hook Form Validierung: https://react-hook-form.com/get-started#SchemaValidation

## Setup

1. `npm create vite@latest`
2. Namen vergeben (react-frontend)
3. React auswählen
4. TypeScript auswählen
5. `cd react-frontend`
6. dependencies installieren: `npm install`
7. starten: `npm run dev`
8. Browser öffnen: http://localhost:5173

## Cloning

- Structured Clone (JS basic): https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
- Immutability Helper (der mit der komischen Syntax): https://github.com/kolodny/immutability-helper
- Immer.js: https://immerjs.github.io/immer/
- Immutablejs: https://immutable-js.com/

## Backend

1. Verzeichnis `backend` erstellen
2. `data.json` ins `backend` Verzeichnis kopieren.
3. `npm install json-server`
4. `package.json` => `scripts` => `"backend": "json-server -p 3001 backend/data.json"`
5. In einer separaten Konsole `npm run backend`
