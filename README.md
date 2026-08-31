# Portfolio

Source code for Adarsh Jha's personal portfolio website.

## Pages and features

- Homepage with profile, experience, skills, education, and contact links
- MCAverse project case study
- MediBridge project case study
- Multi-Agent Tech Lead Simulator project case study
- Light and dark themes
- Downloadable resume

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vinext and Vite

## Requirements

- Node.js 22.13 or newer
- pnpm

## Run locally

```bash
git clone https://github.com/adarshjha01/Portfolio.git
cd Portfolio
git checkout codex/recruiter-portfolio
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm run build
pnpm run start
```

## Main files

- `app/page.tsx` — homepage content and sections
- `app/work/[slug]/page.tsx` — reusable project case-study page
- `lib/projects.ts` — project content, metrics, links, and technical decisions
- `app/globals.css` — complete design system and responsive styles
- `components/theme-toggle.tsx` — persistent light/dark theme control
- `public/Adarsh-Jha-Resume.pdf` — downloadable resume
- `public/og.png` — social-sharing image

No API keys or environment variables are required for the current version.
