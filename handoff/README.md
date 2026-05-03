# Kráľovská pekáreň — B2B redesign handoff

Balík na nakopírovanie do tvojho `stanislav-sro/` Next.js projektu.

## Čo tu je

```
handoff/
├── app/
│   ├── page.tsx                       ← prepíš pôvodný
│   ├── globals.append.css             ← OBSAH pridaj na koniec globals.css
│   └── components/
│       ├── Stats.tsx                  ← prepíš pôvodný
│       ├── Partners.tsx               ← prepíš pôvodný
│       ├── Products.tsx               ← prepíš pôvodný
│       ├── Process.tsx                ← NOVÝ
│       ├── Certifications.tsx         ← NOVÝ
│       ├── WhyUs.tsx                  ← prepíš pôvodný
│       ├── About.tsx                  ← prepíš pôvodný
│       ├── Faq.tsx                    ← NOVÝ
│       ├── CtaBand.tsx                ← prepíš pôvodný
│       └── Footer.tsx                 ← prepíš pôvodný
```

**Hero.tsx a Nav.tsx sa NEMENIA.**

## Postup inštalácie (5 minút)

1. **Skopíruj TSX súbory** — celý obsah `handoff/app/components/*.tsx` skopíruj do `stanislav-sro/app/components/` (prepíš existujúce, pridaj nové).
2. **Prepíš `page.tsx`** — obsahom z `handoff/app/page.tsx`.
3. **CSS** — otvor `stanislav-sro/app/globals.css`, choď úplne na koniec a pridaj celý obsah `handoff/app/globals.append.css`. Pôvodné triedy sa nerušia — nové sekcie používajú nové triedy (`stats-new`, `partners-new`, atď.), takže nič nekoliduje.
4. **Spusti** `npm run dev` a otvor `localhost:3000`.

## Nové poradie sekcií

```
Hero → Stats → Partners → Products → Process → Certifications
     → WhyUs → About → Faq → CtaBand → Footer
```

**Prečo v tomto poradí (B2B funnel):**
- **Stats** — prvý číselný dôkaz kapacity
- **Partners** — sociálny dôkaz
- **Products** — čo viete dodať (podľa use-case)
- **Process** — dôkaz že máte systém, nie poctivú babičku
- **Certifications** — compliance gate pre procurement (IFS, HACCP, ISO, BIO)
- **WhyUs** — 4 SLA záväzky s číslami
- **About** — zrelosť firmy ako support argument
- **Faq** — zráža posledné námietky (MOQ, lead time, privátna značka)
- **CtaBand** — priamo dopytový formulár

## Dôležité

- Všetky farby/fonty cez `var(--color-*)` / `var(--font-*)` — žiadne raw hexy, žiadne nové premenné.
- Žiadny komponent nemá > 150 riadkov.
- Zero nových závislostí — len React hooks ktoré projekt už používa.
- Path k obrázkom ostáva `/b1.png`, `/b2.png`, `/kaufland-logo 1.svg` atď. (tvoj `public/` priečinok netreba meniť).

## Copy

Všetko je realistický B2B copy s placeholder číslami (24 000 ks/deň, 99,4 % SLA, 120+ odberateľov, 42 zamestnancov). **Nahraď reálnymi číslami pred live nasadením** — najmä v `Stats.tsx`, `Process.tsx` (process-footer), `WhyUs.tsx`, `About.tsx` (stat-inline).

Kontaktný formulár v `CtaBand.tsx` len loguje `sent` state — pripoj svoj backend / form handler (Resend, Formspree, vlastný API route).
