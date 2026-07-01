# AditSingh10.github.io

Personal portfolio site for Adit Singh, built as a static Vite + React + TypeScript site and deployed with GitHub Pages.

Live site: <https://AditSingh10.github.io>

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Vitest and Testing Library
- GitHub Actions for Pages deployment

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Run lint:

```bash
npm run lint
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content

Portfolio content lives in `src/data/portfolio.ts`. The current site uses resume-backed content plus public GitHub project links. LinkedIn is used as an outbound link only.

The current resume PDF is intentionally not published because it includes a phone number. To add a public resume later:

1. Create a public-safe PDF without private contact details.
2. Add it to `public/resume.pdf`.
3. Set `resumeUrl: '/resume.pdf'` in `src/data/portfolio.ts`.
4. Run `npm test` and `npm run build`.

## Deployment

This repository is named `AditSingh10.github.io`, so GitHub Pages serves it at the user-site root:

```text
https://AditSingh10.github.io
```

Deployment is handled by `.github/workflows/deploy.yml`. On every push to `main`, the workflow:

1. Installs dependencies with `npm ci`.
2. Runs `npm test`.
3. Builds the static site with `npm run build`.
4. Uploads `dist/` to GitHub Pages.

The Vite base path is `/`, which is correct for a GitHub Pages user site.
