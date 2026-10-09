# renatadornellas.github.io

[![CI](https://github.com/renatadornellas/renatadornellas.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/renatadornellas/renatadornellas.github.io/actions/workflows/ci.yml)

Portfolio of Renata Dornellas, UX Researcher. Brazilian Portuguese is the default language (`/`), English lives at `/en/`. The default theme is light.

The site ships with a Playwright + axe suite and a pipeline that blocks deploys when a test fails.

## Architecture

- **Astro + TypeScript**, static output, no UI framework, hand-written CSS with design tokens (`src/styles/global.css`).
- Client JavaScript is limited to the theme toggle, mobile menu, "show more" and project filters (`src/layouts/Base.astro`).
- Both pages render the same components from per-language data.

```
src/
  data/{pt,en}/   all site content, one typed file per section
  data/types.ts   the shape every content file must follow
  components/     Header, Hero, Sections, Footer, Icon, Illustration (no hard-coded text)
  layouts/Base.astro   head, SEO, JSON-LD, theme init, client scripts
  pages/          index.astro (pt-BR, default) and en/index.astro
public/           logo, favicon, share image, robots.txt (and resume/ once there is a PDF)
tests/            Playwright specs and fixtures
```

## Editing content

Edit the files in `src/data/pt/` and `src/data/en/`; no component changes needed. Keep both languages in sync. Lines marked `TODO` in those files are pending content decisions.

**Resume PDF:** there is none yet, so every resume button is hidden. Put the file in `public/resume/` and set `resumeFile` in `profile.ts` (both languages). The buttons and the resume tests turn on by themselves.

**GitHub link:** the profile has none, so it is hidden. Set `github` in `profile.ts` to show it.

## Running

```bash
npm install
npm run dev            # local dev server
npm run build          # static build into dist/
npx playwright install chromium
npm test               # builds, serves the build and runs the suite
npm run test:report    # open the HTML report
```

## Test suite

Selectors use roles and labels only. Each spec runs in two Playwright projects, `desktop` and `mobile` (360px), configured in `playwright.config.ts`.

| Spec | Covers |
| --- | --- |
| `routes` | Home in each language, Portuguese as the default, `sitemap`, `robots.txt` |
| `contact` | Contact form is labelled and submits through `mailto:`, hero numbers render |
| `navigation` | Menu anchors, "show more", project filters, language switch, light-by-default theme and toggle |
| `resume` | Resume button points to a real PDF, or no dead button exists while there is no PDF |
| `links` | LinkedIn and `mailto:` destinations, no GitHub link |
| `a11y` | axe (WCAG 2.2 AA) in both languages and both themes, zero violations |
| `content` | No visible `TODO`; the only image is the logo (no photo or avatar) |

## Pipeline

`.github/workflows/ci.yml`:

1. Pull request: install, type check, build, run the suite against the local build, upload the report as an artifact.
2. Push to `master`: same steps, then deploy to GitHub Pages. The `deploy` job `needs: test`, so a failing test blocks the deploy.

Requires Settings > Pages > Source set to **GitHub Actions**.
