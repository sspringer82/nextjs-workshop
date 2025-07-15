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
- VSCode plugin für React: ES7 React/Redux/GraphQL/React-Native snippets
- Thinking in React https://react.dev/learn/thinking-in-react
- "Dynamic functions" in next https://nextjs.org/docs/messages/sync-dynamic-apis
- STyling (https://nextjs.org/docs/app/getting-started/css)
  - Klassennamen: https://github.com/lukeed/clsx oder https://github.com/JedWatson/classnames
  - https://sass-lang.com/
  - https://styled-components.com/
- Suspense
  - Suspense: https://react.dev/reference/react/Suspense
  - Lazy Loading: https://react.dev/reference/react/lazy
  - Data Fetching (React-query): https://tanstack.com/query/latest
  - https://www.davidhu.io/react-spinners/
- https://nextjs.org/docs/app/api-reference/file-conventions

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
