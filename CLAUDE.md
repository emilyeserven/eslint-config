# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is `@emilyeserven/eslint-config`, a shareable ESLint flat config package. It provides composable ESLint configurations primarily designed for the [emstack](https://github.com/emilyeserven/emstack) monorepo but also usable standalone.

## Commands

- **Lint**: `pnpm lint`
- **Lint with autofix**: `pnpm lint:fix`
- **Install deps**: `pnpm install`
- **Package manager**: pnpm (v10)

## Architecture

The package uses ESLint's flat config format (`defineConfig` from `eslint/config`). There are two layers:

### `configs/` — Standalone rule sets (no file globs)
Technology-specific rule bundles that can be composed into any project:
- `js.js`, `ts.js` — base JS/TS rules
- `react.js` — React + hooks + refresh
- `stylistic.js` — `@stylistic/eslint-plugin` formatting rules
- `import.js` — import ordering/resolution
- `tailwind.js` — Tailwind CSS linting
- `tanstackQuery.js`, `tanstackRouter.js` — TanStack plugins
- `json.js` — JSON file linting
- `middleware.js` — server-side specific rules

### `globConfigs/` — Emstack-specific configs (with file globs)
Configs that apply rule sets to specific emstack monorepo paths (e.g., `packages/client/src/**`):
- `clientGlob.js` — full client config (React + Tailwind + TanStack)
- `clientBaselineGlob.js` — client without Tailwind/TanStack
- `reactBundle.js` — React + TanStack Query + Router bundle
- `tsGlob.js`, `configGlob.js`, `jsonGlob.js`, `middlewareGlob.js`

### Entry points
- `index.js` — default export combining all globConfigs for emstack usage
- Individual configs/globConfigs can be imported directly for custom composition

### `utils/constants.js`
Shared glob patterns (e.g., `nonClientGlobs`) used to exclude server-side files from client configs.

## Key Details

- ESM only (`"type": "module"`)
- All ESLint plugins are **peer dependencies** — consumers must install them
- `eslint.config.js` at root is for linting *this* package itself (uses only stylistic + import configs)
