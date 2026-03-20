# Hisar Backhaus (React + Vite)

Artisan Bakery & Cafe front-end (Tailwind v4 + React).

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- motion/react
- lucide-react

## Requirements

- Node.js (LTS recommended)

## Environment Variables

AI Studio runtime için konfigürasyon içerir.

`.env.local` dosyasını `.env.example`'dan oluştur:

- `GEMINI_API_KEY` (AI Studio runtime tarafından kullanılır)
- `APP_URL` (AI Studio'da otomatik set edilir)

## Setup

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`

Dev server:
`http://localhost:3000/`

## Production

- Build: `npm run build`
- Preview: `npm run preview`

## Quality Checks

- Typecheck: `npm run lint`
