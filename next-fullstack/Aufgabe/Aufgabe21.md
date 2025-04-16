# Testing

Erzeuge ein Testsetup
Pakete:
@vitejs/plugin-react
@testing-library/jest-dom
@testing-library/react
jsdom
vitest

package.json:
`scripts: "Test": "vitest"``

vitest.config.ts

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setupTests.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

test/setupTests.ts

```ts
// test/setupTests.js
import '@testing-library/jest-dom';
```

Kopiere den Button.test.tsx und sorg dafür dass er grün wird.
