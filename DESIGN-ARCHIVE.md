# Design archive — the original look, before issue #551

This branch is a frozen snapshot of Astro Rocket's design as it was on
15 July 2026 (commit `03c428a`), immediately before the design-consistency
system proposed in [issue #551](https://github.com/hansmartensdev/Astro-Rocket/issues/551)
was applied.

## What changed after this snapshot

Everything after this point restyled the theme's interactive language:

- Brand-tinted backgrounds for current/selected states (nav, tabs, table of
  contents, footer current-page pill, theme/colour/language pickers)
- Brand foreground colour on clickable elements (brand-700 light / brand-400 dark)
- Hand cursor on all interactive controls; consistent sentence casing
- Brand borders on header controls and form fields
- Solid brand primary CTAs in both modes (project hero live-site button,
  mobile menu CTA)

## How to use this branch

Compare the current design against the original:

    git diff archive/original-design main -- src/

Restore a single file to its original design:

    git checkout archive/original-design -- <path>

## Related

Since 16 July 2026 the default design on `main` follows this original look
again. The counterpart branch `archive/brand-consistency-design` holds the
full #551 brand-consistency design as an official variant for anyone who
prefers it.

Do not merge or delete this branch — it exists only as a reference point.
