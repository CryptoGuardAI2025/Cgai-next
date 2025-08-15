
# CGAI – Next.js + TypeScript + Tailwind (DE/EN, TradingView, KI‑Mock, Shop‑PDFs)

## Quickstart
npm i
npm run dev
# http://localhost:3000

## Build & Deploy (GitHub Pages)
npm run build
# erzeugt ./out – diesen Ordner in dein Pages‑Repo pushen
# Unterpfad? next.config.js -> basePath/assetPrefix setzen.

## Ersetzen / Erweiterungen
- TradingView: components/TradingViewWidget.tsx (symbol/interval/theme/locale/container_id)
- Stripe: pages/shop.tsx (Buttons → Checkout‑Links). API‑Key nicht im Client; später Serverless‑Route.
- KI: components/PredictionTool.tsx (Mock) → echte API
- Logo/Bilder: /public/logo.png, /public/images/hero-8k.png
- Texte: /locales/de|en/common.json
