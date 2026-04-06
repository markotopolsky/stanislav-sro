# Kráľovská pekáreň — B2B prezentačná stránka

Prezentačná stránka pre B2B dodávateľa pečiva.
Cieľová skupina: nákupcovia supermarketov, hotely, reštaurácie.
Tón: profesionálny, sebavedomý — nie romantický, nie B2C.

## Filozofia kódu
- Žiadne zbytočné abstrakcie
- Jeden komponent = jedna zodpovednosť
- Čitateľný kód nad clever kódom
- Žiadne knižnice ak to vieme spraviť natívne
- Ak komponent má viac než 150 riadkov — robí príliš veľa vecí

## Stack
- Next.js 14 (App Router)
- Tailwind CSS + globals.css pre CSS premenné
- TypeScript

## Pravidlá komponentov
- page.tsx len importuje a skladá sekcie — žiadna logika
- Štýly priamo v komponente — Tailwind triedy alebo inline
- Ak niečo použiješ len raz — ostáva v page.tsx, nejde do components/
- Žiadne: hooks/, utils/, context/, types/ pokiaľ nie je absolútna nutnosť

## Štruktúra projektu
app/
  layout.tsx       ← fonty, metadata, body wrapper
  page.tsx         ← skladá sekcie, nič iné
  globals.css      ← všetky premenné, base štýly

## Dizajn systém
Všetky premenné sú v globals.css — vždy ich použi, nikdy nepiš raw hex hodnoty.

Fonts:
- Nadpisy: var(--font-display) — Cormorant Garamond, serif, italic
- Text: var(--font-body) — DM Sans, sans-serif

Farby:
- Primárny button: var(--color-brand-primary) #F08E26
- Hover button: var(--color-brand-primary-hover) #EB8B25
- Logo akcent: var(--color-brand-maroon) #571313 — LEN logo
- Tmavé sekcie (hero, nav, footer): var(--color-bg-dark) #0f0d0a
- Pozadie stránky: var(--color-bg-primary) #F2F2F2
- Karty/sekcie: var(--color-bg-surface) #FFFFFF
- Jemné oddelenie: var(--color-bg-subtle) #E8E5E2

Text:
- Nadpisy: var(--color-text-primary) #1A1714
- Body: var(--color-text-secondary) #4A4440
- Popisky: var(--color-text-muted) #8C8580