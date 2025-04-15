# Inline styles

style={{backgroundColor: 'hotpink'}}
Objektnotation + CSS Properties werden in camelCase geschrieben
Schlecht weil: unordentlicher Code

# CSS Imports

import 'style.css';

Reguläres CSS in einer separten Datei, global gültig
Schlecht weil: global gültig

# CSS Modules

```
import styles from './page.module.css'

<h1 classname={styles.headline}>...
```

Klassenbasiertes CSS in einer separten Datei mit automatischem Namespacing

# Tailwind

Utility First CSS Framework basiert auf (sehr viele) Klassen
Konfiguration über Next Initialisierung

# Sass

`npm install --save-dev sass`

CSS Präprozessor (Nesting, Variablen, Mixins,...)

`import './styles.scss';`

# Styled Components

`npm install styled-components``

Limitiert auf Client Components, basieren auf template Strings und erzeugen neue Komponenten

```ts
const Headline = styled.h1`
  color: darkgreen;
  background-color: lightred;
  font-size: xx-large;
  text-decoration: underline;
`;
```
