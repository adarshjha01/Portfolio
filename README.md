# Adarsh Jha — Applied AI portfolio

Personal portfolio with resume-aligned experience, skills, education, and four project case studies: MediBridge, Multi-Agent Tech Lead Simulator, MCAverse, and Socratic AI Mentor. Includes a supporting YouTube summarization project, responsive layouts, light/dark themes, and a downloadable resume.

## Local development

Use Node.js 22.13+ and pnpm 10.28.2.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verification

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

This is a standard Next.js App Router application with React, TypeScript, and Tailwind CSS. Cloudflare/Vinext build tooling is no longer required. Per-request CSP nonces allow Next.js hydration without allowing arbitrary inline scripts; pages render dynamically for fresh nonces.

## Deploy to Vercel after merging

1. Import `adarshjha01/Portfolio` from GitHub.
2. Select the Next.js framework preset and repository root directory.
3. Use Node.js 22.x (or a newer supported version). Use the default Next.js output directory, `pnpm build`, and `pnpm install --frozen-lockfile`.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to the final HTTPS portfolio domain. Without it, metadata uses Vercel's production-domain environment variable.
5. Deploy, then verify all four project pages, theme switching, and `/Adarsh-Jha-Resume.pdf` from a signed-out browser. Use the production URL in the resume.

No application API keys or database are needed. Do not enable Vercel deployment protection on the public production portfolio.

## Content

- `app/page.tsx`: homepage
- `lib/projects.ts`: project descriptions and evidence
- `app/work/[slug]/page.tsx`: case studies
- `app/globals.css`: styles
- `public/Adarsh-Jha-Resume.pdf`: current resume

The simulator source URL supplied in the resume returned a public 404 during review; its case study links to the resume instead. Prototype limitations and future evaluation work are identified separately from implemented features.
