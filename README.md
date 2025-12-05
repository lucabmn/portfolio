<div align="center">

# ✨ Portfolio

<p align="center">
  <strong>Ein modernes, minimalistisches Developer-Portfolio</strong>
</p>

<p align="center">
  <a href="https://lucabmn.de">
    <img src="https://img.shields.io/badge/Live_Demo-00CDB8?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/lucabmn/portfolio/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  </a>
</p>

<br />

<img src="https://github.com/lucabmn/portfolio/blob/main/public/assets/preview.png" alt="Portfolio Preview" width="100%" style="border-radius: 12px;" />

</div>

<br />

## 🎯 Übersicht

Ein persönliches Portfolio mit modernem Design, glassmorphism Effekten und einem atmosphärischen Dark-Theme. Entwickelt mit den neuesten Webtechnologien für beste Performance und User Experience.

<br />

## ⚡ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      <br><strong>Next.js 14</strong>
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br><strong>React 18</strong>
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
      <br><strong>TypeScript</strong>
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br><strong>Tailwind</strong>
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
      <br><strong>Vercel</strong>
    </td>
  </tr>
</table>

<br />

## ✨ Features

<table>
  <tr>
    <td>🎨</td>
    <td><strong>Modernes Design</strong></td>
    <td>Glassmorphism, Gradient Mesh, atmosphärische Effekte</td>
  </tr>
  <tr>
    <td>🌙</td>
    <td><strong>Dark Theme</strong></td>
    <td>Elegantes dunkles Farbschema mit Cyan-Akzenten</td>
  </tr>
  <tr>
    <td>⚡</td>
    <td><strong>Performance</strong></td>
    <td>Optimiert für schnelle Ladezeiten und SEO</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Responsive</strong></td>
    <td>Perfekte Darstellung auf allen Geräten</td>
  </tr>
  <tr>
    <td>🎭</td>
    <td><strong>Animationen</strong></td>
    <td>Smooth transitions mit Framer Motion</td>
  </tr>
  <tr>
    <td>📝</td>
    <td><strong>Blog Support</strong></td>
    <td>MDX-basiertes Blog-System integriert</td>
  </tr>
</table>

<br />

## 🚀 Quick Start

### Voraussetzungen

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (empfohlen)

### Installation

```bash
# Repository klonen
git clone https://github.com/lucabmn/portfolio.git

# In das Verzeichnis wechseln
cd portfolio

# Dependencies installieren
pnpm install

# Development Server starten
pnpm dev
```

Die Seite ist dann unter **http://localhost:3000** erreichbar.

<br />

## 📁 Projektstruktur

```
portfolio/
├── public/              # Statische Assets
│   ├── me.png          # Profilbild
│   └── projects/       # Projekt-Screenshots
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # Globale Styles
│   │   ├── layout.tsx  # Root Layout
│   │   └── page.tsx    # Homepage
│   ├── components/     # React Komponenten
│   │   ├── magicui/    # Animation Komponenten
│   │   └── ui/         # shadcn/ui Komponenten
│   ├── data/
│   │   └── resume.tsx  # ⭐ Deine Daten hier
│   └── lib/            # Utility Funktionen
└── content/            # Blog Posts (MDX)
```

<br />

## ⚙️ Konfiguration

Alle persönlichen Daten werden in einer einzigen Datei verwaltet:

```typescript
// src/data/resume.tsx

export const DATA = {
  name: "Dein Name",
  description: "Deine Beschreibung",
  location: "Dein Standort",
  avatarUrl: "/me.png",
  skills: ["React", "Next.js", ...],
  projects: [...],
  // ...
}
```

<br />

## 🎨 Anpassung

### Farben ändern

Die Farbpalette ist in `src/app/globals.css` definiert:

```css
:root {
  --primary: 173 80% 50%;      /* Cyan Akzent */
  --background: 222 47% 6%;    /* Dunkler Hintergrund */
  /* ... */
}
```

### Fonts ändern

Fonts werden in `src/app/layout.tsx` konfiguriert:

```typescript
import { Outfit, Syne } from "next/font/google";

const fontSans = Outfit({ ... });    // Body Font
const fontDisplay = Syne({ ... });   // Heading Font
```

<br />

## 📦 Deployment

### Vercel (Empfohlen)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flucabmn%2Fportfolio)

Oder manuell:

```bash
# Build erstellen
pnpm build

# Lokal testen
pnpm start
```

<br />

## 🙏 Credits

- Design inspiriert von [Dillion Verma](https://github.com/dillionverma/portfolio)
- UI Komponenten von [shadcn/ui](https://ui.shadcn.com/)
- Animationen von [Magic UI](https://magicui.design/)

<br />

## 📄 Lizenz

Dieses Projekt ist unter der [MIT Lizenz](LICENSE) lizenziert.

<br />

---

<div align="center">
  <p>
    <sub>Mit 💙 entwickelt von <a href="https://lucabmn.de">Luca</a></sub>
  </p>
</div>
