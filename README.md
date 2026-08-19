# LM Technologia — Site Institucional

Stack: **Next.js 14 (App Router) + TypeScript estrito + Tailwind + shadcn-ready + Framer Motion + MDX**.

## Setup

```bash
pnpm install         # ou npm install / yarn
cp .env.example .env
pnpm dev             # http://localhost:3000
```

O script `predev` roda `scripts/sync-obsidian.ts`, que espelha o vault para `/content` (defina `OBSIDIAN_VAULT` no `.env`). Se a variável não estiver definida, o sync é ignorado e o site usa os MDX de exemplo já commitados.

## Estrutura

```
app/               Rotas (App Router) + API handlers
components/        UI, layout, seções, visualizações
content/           MDX espelhado do Obsidian
lib/               mdx loader, cn, validators Zod
scripts/           sync-obsidian
tests/             vitest (unit) + playwright (e2e)
```

## Design Tokens

Todos em `tailwind.config.ts` — `bg #05070D`, `surface #0B0F1A`, `royal #1E3A8A`, `accent #3B82F6`, `text #E6ECF5`.

## Próximos passos

1. `pnpm dlx shadcn@latest init` (tema New York, Slate) e adicionar `button`, `card`, `dialog`, `input`, `form`.
2. Ligar `POST /api/lead` a Resend + CRM.
3. Configurar Plausible/PostHog.
4. Criar wireframe final da Home e revisar contraste WCAG AA do royal sobre preto.
5. GitHub Actions: lint + typecheck + vitest + playwright headless + build.
