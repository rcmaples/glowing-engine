# Monorepo

> A scalable Turborepo-powered monorepo for Next.js, Sanity, and shared packages.

## 🧭 Overview

This monorepo is built with:

- [Turborepo](https://turbo.build/)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Vitest](https://vitest.dev/) (future test support)
- Flat Config [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- Centralized TypeScript configs
- Full ESM support
- Remote Turbo caching ready

## 📂 Directory Structure

```
my-monorepo/
├── apps/
│ ├── web/ # Next.js app
│ └── studio/ # Sanity Studio
├── packages/
│ ├── typescript-config/
│ └── eslint-config/
├── package.json # Monorepo root
├── turbo.json # Turbo pipeline config
├── tsconfig.json # Root TypeScript config
└── pnpm-workspace.yaml
```

## ⚙ Development

Install dependencies:

```shell
# Install deps
pnpm install

# Run dev across apps:
pnpm dev

# Start an individual app:
# Web app
turbo run dev --filter=web
# Studio
turbo run dev --filter=studio

# 🏗 Build
pnpm build

# 🧪 Lint & Typecheck
pnpm lint
pnpm typecheck

# 🧪 Testing (future)
pnpm test
```

## 🔧 Monorepo Design Principles

- ✅ Isolated apps & packages
- ✅ Centralized, versioned config packages:
  - packages/typescript-config
  - packages/eslint-config
- ✅ Flat-config ESLint fully wired
- ✅ Full ESM-safe imports using exports fields
- ✅ Turbo pipelines fully incremental
- ✅ CI pipelines fully cache-aware

## 📖 Turbo Pipeline Summary

| Task      | Description                      |
| --------- | -------------------------------- |
| build     | Compiles all apps/packages       |
| dev       | Starts all apps in parallel      |
| lint      | Lints all apps/packages          |
| typecheck | Runs TypeScript checks           |
| test      | Runs unit tests (future support) |

## 🔬 Key Turbo Commands

```shell
# Run dev for a specific app
turbo run dev --filter=web

# Build only what's changed since main
turbo run build --filter=...main

# Test affected packages only
turbo run test --filter=...

# Prune output for production deploys
turbo prune --scope=apps/web --docker
```

## 📝 Adding New Packages

1. Create a new package under packages/
2. Extend the shared TypeScript config:

```json
{"extends": "../../packages/typescript-config/base.json"}
```

3. Add scripts: build, lint, typecheck, test
4. Turbo will auto-wire dependencies via pnpm workspaces.

### ⚠ Gotchas

- Do not import across apps directly.
- All shared code should live inside packages/.
- Always keep Turbo pipelines consistent across apps/packages.

## 🔒 Version Pinning

For full reproducibility:

- pnpm version is pinned in root package.json
- Shared config packages are versioned internally

## 🏁 Onboarding TLDR

```shell
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

✅ That’s all.

## 🔧 Additional Resources

- [Turborepo Documentation](https://turbo.build/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Vitest Docs](https://vitest.dev/)
