# State & Lifecycle

Speichere die Filmdaten im State der Komponente.

Der State ist initial leer (leeres Array).

Nutze useEffect, um beim mounten der Komponente die Daten in den State zu schreiben.

## Tipp

useState ist ein generic und akzeptiert den State-Type:

```ts
useState<Movie[]>([]);
```

```ts
useEffect(() => {
  // do things
}, []);
```
