# Gana con Interés

Calculadora de interés compuesto (Next.js, static export).

## Desarrollo

```bash
npm install
npm run dev
```

App sirve bajo `/compound-interest-calculator` (basePath fijo para GitHub Pages).

## Build

```bash
npm run build
```

Genera el sitio estático en `out/`.

## Deploy

Push a `main` dispara `.github/workflows/deploy-gh-pages.yml`, que publica `out/` en GitHub Pages:
https://jlfernandezfernandez.github.io/compound-interest-calculator/
