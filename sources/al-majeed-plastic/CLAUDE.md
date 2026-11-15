# CLAUDE.md — Al Majeed Plastic Industries (prospect demo)

Bilingual (English at `/`, Arabic RTL mirror at `/ar/`) demo site for **Al Majeed Plastic
Industries — مؤسسة المجيد للصناعات البلاستيكية**, a PET/HDPE packaging FACTORY in North
Marka, Amman (est. 1991). Built on the Asfour Masterbatch pattern (Astro 5 + Tailwind 4).

Live demo: https://motasemaskar.github.io/demos/al-majeed-plastic/ (GitHub Pages sub-path).

## Commands
| Command | Purpose |
| --- | --- |
| `npm run build:pages` | build + `scripts/rebase.mjs` → prefix all paths with `/demos/al-majeed-plastic` |
| `npm run build` | plain root build (use this once it moves to its own domain) |
| `npm run placeholders -- --force` | regenerate branded stand-in art for every image slot |
| `npm run import-ai reference/ai-batch1` | drop real AI images into the slots (see `reference/image-prompts.md`) |
| `npm run brand` | favicons + OG image from `public/brand/monogram.svg` |

## Content rules
- Facts only from public sources listed at the top of `src/config.ts` (EAIIA, al-majeed.com,
  jordanyp). No capacities, line counts, client names or invented years.
- The logo is a neutral demo mark — their real logo is not public.
- No WhatsApp number is published → WhatsApp buttons are hidden (`CONTACT.whatsappNumber`).
- The RFQ form shows a demo notice instead of sending (no Web3Forms key).
