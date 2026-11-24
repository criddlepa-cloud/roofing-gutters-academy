# Roofing & Gutters Academy

A picture-heavy field guide to roofs and gutters for someone learning the trade in sales and lead generation around Brighton and Denver, Colorado. It is a standalone Next.js site. It does not depend on any other project.

The site covers roof anatomy (with a clickable diagram), materials, gutters, damage patterns, Colorado code basics, insurance-claim steps and the residential roofing statutes, a glossary, and a quiz.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The project is configured with `output: "export"` in `next.config.ts`, so the build writes a static site to `out/`. No server, no database, and no environment variables are required.

## Deploy to Vercel as a new project

This repository is its own project. Create a **new** Vercel project and import this repository. Do not attach it to an existing project.

1. In Vercel, choose **Add New Project** and import this Git repository.
2. Framework preset: **Next.js**. Root directory: the repository root.
3. Build command: `npm run build`. Output: leave the Next.js default. Vercel detects the static export.
4. No environment variables.
5. Deploy.

A local static check, after `npm run build`, is to open `out/index.html` or serve the `out` folder.

## Photographs

Photos live in `public/images/` and are credited on the Attributions page. They come from Wikimedia Commons. Diagrams are original SVG.

## What this site is not

It is not a building-department ruling, a manufacturer manual, legal advice, or an insurance coverage opinion. Local amendments and the policy control.
