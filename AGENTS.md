# demos — weekly client-hunting playbook (Motasem / motasem.ai)

This repo holds **demo websites** built for prospective clients. GitHub Pages serves it at
`https://motasemaskar.github.io/demos/<slug>/`. Every weekly run follows this file.

## 1. Who we look for (rotate each week, 6–8 qualified leads per run)
- Professional offices and contractors (law, engineering, contracting) — Amman
- Factories and import/trading companies — Jordan (Sahab, Abu Alanda, King Abdullah II Industrial City…)
- Upscale kitchen / interior design and decor companies — Amman
- Companies in the Gulf (KSA, UAE, Qatar, Kuwait) and Iraq in the same sectors
- Anything else clearly worth it (real B2B business, money to spend, weak web presence)

**Qualify a lead only if:** real active business (recent reviews/posts), AND no website, a broken/outdated
one, or a weak one (no mobile layout, no Arabic, no quote/contact flow). Skip restaurants, cafes, salons, gyms, e-commerce shops.
Skip any company already in the leads sheet (check by name + city before adding).

## 2. Finding the decision-maker (owner / GM / marketing manager) — not the receptionist
Use only **public, professional** sources: the company's own website (About / Team), LinkedIn company page and
public profiles, Instagram/Facebook business bio, Google Maps listing, chamber of commerce / industry
directories, news articles, commercial registry pages.
- Record name + title + the business contact route found (business WhatsApp, company email, LinkedIn URL, office number).
- Never invent a name, title, number or email. If not found, write `غير معروف` and note what was checked.
- Do not hunt for personal/home addresses, family details, or private personal numbers that the person did not publish for business.
- Note the source URL for every contact field.

## 3. Building a demo (top 3 leads of the week)
Motasem's real client sites (Asfour, Newton, Masafat, Alwan Al-Naseej, Golden Birds) are all built the SAME way —
copy that pattern, never a one-page template. The reference implementation lives in this repo:
`sources/al-majeed-plastic/` (read its CLAUDE.md first).
- Stack: Astro 5 + Tailwind 4, fully static. English at `/`, Arabic RTL mirror at `/ar/`; one view per page in
  `src/views/*.astro` with all copy in a `{ en, ar }[lang]` object; contact data + verified facts in `src/config.ts`;
  product/service data in `src/data/*.ts`.
- 5–6 real pages per company, chosen from what makes THAT business special (e.g. a factory: Products, Mould
  making / Manufacturing, Quality, About, Contact; a contractor: Services, Projects, About, Contact).
- Its own identity per company: palette, monogram + wordmark (`public/brand/monogram.svg`, `Logo.astro`), a
  decorative pattern drawn from their product (bottles, granules, roads…), and at least one custom component
  (route map, process flow, colour range…). Copy must name their real products, markets and strengths.
- RFQ form adapted to what they sell (fields a buyer of that product would fill). WhatsApp only if published.
- Facts from public sources only — list them at the top of `src/config.ts`. No invented numbers/years/clients/certs.
- Images: AI images per slot (no text, no logos, no faces — see `reference/image-prompts.md`); until they exist,
  `npm run placeholders -- --force` makes branded stand-in art.
- Demo extras: `noindex`, robots Disallow, and the bottom ribbon «نسخة تجريبية مقترحة — صُممت بواسطة motasem.ai».
- Build with `npm run build:pages` (rebases paths to `/demos/<slug>`), copy `dist/` to `/<slug>/`, source to
  `sources/<slug>/` (no node_modules/dist). Screenshot EN+AR at 1440 and 390 px before pushing.

## 4. Publish
- Commit each demo as `demo: <slug>` and push to `main`. Keep `.nojekyll` at the root (Jekyll drops `_astro/`).
  Root `index.html` stays a neutral page (no list of prospects).

## 5. Record in the leads sheet
Claude Sheet «عملاء محتملين»: https://claude.ai/artifact/62EVTgJaetfGibWsjgf6PF (Claude Docs connector; call `guide` topic.sheets first).
Columns: الشركة | الحالة (جديد) | صاحب القرار | التواصل | رابط الديمو | القطاع | المدينة/البلد | موقعهم الحالي | ليش مناسبين | المصدر | تاريخ الإضافة | ملاحظات.
Append below the last row; extend the الحالة dropdown to new rows.

## 6. Report & outreach drafts
Send Motasem a short Jordanian-Arabic summary (every line starts with an Arabic word): how many leads, top 3 with demo links,
and a ready WhatsApp message per top lead (short, personal, mentions one concrete thing about their business, links the demo,
offer: موقع كامل خلال أيام، سعر يبدأ من 250 دينار). **Never send any message to a lead yourself** — Motasem sends manually.
