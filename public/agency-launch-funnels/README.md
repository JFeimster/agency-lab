# Agency Launch Funnel Lab — Cloudflare Pages

This package combines the three supplied static affiliate-agency launch funnel exports into one static Cloudflare Pages project.

## Routes

- `/variant-a/` — source `flash-ui-static-1778307469639.zip`
- `/variant-b/` — source `flash-ui-static-1778307351657.zip`
- `/variant-c/` — source `flash-ui-static-1778307506142.zip`

## Cloudflare Pages settings

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `.`
- Root directory: leave blank (if this folder is the repository root)

## Positioning

Treat this as a preview / funnel lab, not the final canonical public surface. The root and all variants are `noindex` through `_headers`. Once a winner and final shared site architecture are chosen, promote that version to the canonical route and remove `X-Robots-Tag: noindex` for the public production surface.

## Why one Pages project

These three exports are variants of the same funnel, not independent products. Keeping them in one project gives stable comparison URLs without consuming three Pages projects. If they later become independently deployed products, split them into separate Cloudflare Pages projects from the same repository and assign each its own root directory.
