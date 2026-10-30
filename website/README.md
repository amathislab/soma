# SOMA project page

This folder holds the source for the SOMA project page, served at
<https://cnai.epfl.ch/soma/>.

The page is built with [Astro](https://astro.build/) and adapted from the
[academic project page template](https://github.com/RomanHauksson/academic-project-astro-template).

## Deploying

The workflow in `.github/workflows/website.yml` (at the repository root) builds this folder and publishes it to
GitHub Pages on every push to `projectpage`. One-time setup in the repository settings:

1. **Settings → Pages**: set **Source** to **GitHub Actions**.
2. **Settings → Environments → github-pages → Deployment branches**: add `projectpage`.

## Local preview

Requires Node.js 22.12 or later.

```bash
cd website
npm install
npm run dev     # http://localhost:4321/soma/
npm run build   # static site in website/dist/
```
