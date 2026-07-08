# CLAUDE.md

## Project Overview

CartoGuide Website — marketing/presentational site for CartoGuide, an open-source interactive map based on OpenStreetMap.

## Tech Stack

- **Framework**: Nuxt 4 (SSG via `nuxi generate`)
- **UI**: Nuxt UI v4 (Tailwind CSS v4)
- **Content**: Nuxt Content v3 (Markdown-driven, SQLite-backed)
- **SEO**: @nuxtjs/seo meta-module
- **i18n**: @nuxtjs/i18n (FR/EN/ES, prefix strategy, defaultLocale fr)
- **Package Manager**: pnpm
- **Node**: v22+ (required for Nuxt Content v3 native SQLite)

## Commands

- `pnpm dev` — Start development server
- `pnpm generate` — Build static site
- `pnpm lint:fix` — Lint and auto-fix
- `pnpm typecheck` — TypeScript checks
- `pnpm test:run` — Run tests once

## Conventions

- ESLint: `@antfu/eslint-config`
- Commits: conventional commits enforced by commitlint
- Git hooks: simple-git-hooks + lint-staged
- **Mobile-first**: Design and implement for mobile screens first, then enhance for larger breakpoints

## Pages

- `/[locale]/` — Homepage (hero, features teaser, CTA)
- `/[locale]/features` — Features page
- `/[locale]/contact` — Contact / demo request page
- No pricing page

## Brand

- Site URL: `https://cartoguide.teritorio.xyz`
- Theme colors: sky (blue), emerald (green), slate (dark)
- GitHub product: https://github.com/teritorio/vido
- schema.org type: SoftwareApplication

## Tests

- **Keep tests in sync with the codebase.** Every time an issue is resolved, verify that existing tests still match the code and update or remove tests that no longer apply.

## Issues

- **Do not create duplicate issues.** Before creating an issue, check if one already exists for the task.

## Git Commits

- Never include "Co-Authored-By: Claude" or any mention of Claude AI in commit messages.
- All commits must be authored by the current git user.
