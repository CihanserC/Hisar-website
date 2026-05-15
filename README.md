# Hisar Website

Repository for the Hisar Backhaus web presence: the main marketing site lives in **proje-adin**. Other folders may hold design assets, menus, or alternate experiments.

## Quick start (main site)

```bash
cd proje-adin
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

## Documentation

- Full stack details, environment variables, and scripts: [proje-adin/README.md](proje-adin/README.md)

## Repository layout

| Path | Description |
|------|-------------|
| `proje-adin/` | Production-facing React + Vite app (Tailwind v4, i18n, pages: home, about, menu, contact) |
| `hisar-backhaus/` | Separate Vite/React scaffold (optional; see that folder if you use it) |

Static assets for the site are typically under `proje-adin/src/assets/` (for example `logo/`).
