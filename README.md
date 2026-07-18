# Gana con Interés

Calculadora de interés compuesto para fondos de inversión, planes de
pensiones y cuentas remuneradas. Next.js (App Router), static export,
desplegado en GitHub Pages.

**Demo:** https://jlfernandezfernandez.github.io/compound-interest-calculator/

## Stack

- Next.js 16 (static export) + React 19 + TypeScript
- Tailwind CSS, Radix UI
- Redux Toolkit (estado del formulario)
- Chart.js

## Desarrollo

```bash
npm install
npm run dev
```

La app sirve bajo `/compound-interest-calculator` (basePath fijo, igual que en producción).

## Build

```bash
npm run build
```

Genera el sitio estático en `out/`.

## Deploy

Cada push a `main` dispara `.github/workflows/deploy-gh-pages.yml`, que
compila el proyecto y publica `out/` en GitHub Pages.

## Licencia

MIT
