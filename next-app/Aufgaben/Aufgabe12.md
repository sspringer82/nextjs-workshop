# Neue Next App

Erzeuge mit `npx create-next-app@latest` eine neue Next App.

What is your project named? next-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like your code inside a `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to use Turbopack for `next dev`? Yes
Would you like to customize the import alias (`@/*` by default)? No

Bonus: binde den React Compiler ein

`npm install babel-plugin-react-compiler`

Start (dev): `npm run dev`
Prod build: `npm run build && npm start`

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
```
