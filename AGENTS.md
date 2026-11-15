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
Style reference — Motasem's live client sites: https://www.asfourmasterbatch.com/ , https://newtonplastic.com/ , https://jathwa.org/
- One self-contained `/<slug>/index.html` (inline CSS/JS, no build step). slug = lowercase-latin-company-name.
- Deep-navy B2B look (around #0a2350), clean sans-serif, generous spacing, real hierarchy (eyebrow → H1 → body).
- Arabic first (`dir="rtl"`, Arabic UI font such as IBM Plex Sans Arabic / Tajawal from Google Fonts) with an English toggle if the business works in English.
- Sections: header (logo/name + "اطلب عرض سعر"), hero (clear promise + 2 CTAs + fact tiles), why us (4 cards),
  services/products grid, process (numbered steps), work/clients or projects, closing CTA, footer (phone, email, address, map link),
  floating WhatsApp button.
- Content comes from the business's own public info. **Do not invent numbers, years, client names or certifications.**
  Where a fact is unknown, write copy without a number (e.g. "خبرة طويلة في…"), never a fake stat.
- Images: neutral stock-style placeholders (gradients/abstract shapes or Unsplash-hotlink of generic industry scenes);
  do not copy photos from their social accounts.
- Add a small fixed banner: `نسخة تجريبية مقترحة — صُممت بواسطة motasem.ai` and `<meta name="robots" content="noindex,nofollow">`.
- Must look excellent on mobile. Check it renders (open the HTML, no console errors) before pushing.

## 4. Publish
- Commit each demo as `demo: <slug>` and push to `main`. Root `index.html` stays a neutral page (no list of prospects).

## 5. Record in the leads sheet
Claude Sheet «عملاء محتملين»: https://claude.ai/artifact/62EVTgJaetfGibWsjgf6PF (Claude Docs connector; call `guide` topic.sheets first).
Columns: الشركة | الحالة (جديد) | صاحب القرار | التواصل | رابط الديمو | القطاع | المدينة/البلد | موقعهم الحالي | ليش مناسبين | المصدر | تاريخ الإضافة | ملاحظات.
Append below the last row; extend the الحالة dropdown to new rows.

## 6. Report & outreach drafts
Send Motasem a short Jordanian-Arabic summary (every line starts with an Arabic word): how many leads, top 3 with demo links,
and a ready WhatsApp message per top lead (short, personal, mentions one concrete thing about their business, links the demo,
offer: موقع كامل خلال أيام، سعر يبدأ من 250 دينار). **Never send any message to a lead yourself** — Motasem sends manually.
