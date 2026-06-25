# Prehľad práce na sortimente — Kráľovská pekáreň

Tento dokument zhrňuje všetko čo bolo spravené počas práce na sortimente: import dát, fotky, varianty a aktuálny stav.

---

## 1. Východiskový stav

Predtým bolo na webe:

- **66 produktov** v `app/data/produkty.json`
- Každý produkt mal len: `slug`, `name`, `price`, `category`, `image` (placeholder z `placehold.co`)
- Žiadne zloženie, alergény ani nutričné hodnoty
- Detail stránka (`/produkty/[slug]`) zobrazovala hardcoded placeholder hodnoty (rovnaké pre každý produkt)

---

## 2. Čo sa spravilo

### 2.1 Import dát z dvoch docx dokumentov

Naparsovali sa dva dokumenty od pekárne:

- `Zloženia nebalených výrobkov.docx`
- `Zloženia_vsetky komplet_FINAL_18_05_2025 balené výrobky.docx`

Z nich sa extrahovalo (pre každý produkt):

- **Zloženie** (kompletný zoznam ingrediencií)
- **Posyp** (ak existuje)
- **Alergény** ("Výrobok môže obsahovať: ORECHY, SEZAM, MLIEKO, SÓJU")
- **Nutričné hodnoty na 100 g** (energia kJ/kcal, tuky, nas. mastné kys., sacharidy, cukry, vláknina, bielkoviny, soľ)
- **Skladovanie** (napr. "do +7°C")
- **Typ výrobku** ("Pekársky výrobok – chlieb" / "jemné pečivo" atď.)

### 2.2 Zmeny v dátovom modeli

- Z `Product` typu odstránené pole `price` (B2B web, ceny tam nepatria)
- Pridané polia: `gramaz`, `typVyrobku`, `zlozenie`, `posyp`, `alergeny`, `nutricne`, `skladovanie`, `_new`
- Nový typ `VariantGroup` pre zoskupenie produktov podľa gramáže
- Helper funkcie: `getVariantsForProduct(slug)`, `getProductsByCategory()` filtruje canonicalne varianty

### 2.3 Detail stránka produktu

Predtým len placeholder. Teraz zobrazuje:

- **Hero hlavička** s názvom, kategóriou, typom výrobku
- **Variant selector** (pill-buttony 50g | 60g | 100g) ak je produkt v skupine
- **Fotka produktu** (z Cloudinary)
- **Sekcia Zloženie** + posyp
- **Box "Výrobok môže obsahovať"** s alergénmi
- **Nutričná tabuľka** na 100 g
- **Skladovanie** (ak je definované)
- **B2B CTA** "Vyžiadať ponuku"
- Fallback "doplníme" pre produkty bez dát

### 2.4 Listing stránka `/produkty`

- Po zoskupení variantov zobrazuje len **1 kartu na skupinu** (canonical variant)
- Žemľa 50g/70g/100g = 1 karta, kliknutie cez detail → pill-selector na prepnutie

### 2.5 Cloudinary integrácia

- Vytvorený upload script: `scripts/upload-photos.mjs`
- Konfigurácia: `scripts/photo-mapping.json` (manuálne overrides foto→slug)
- Cloudinary credentials v `.env.local` (mimo gitu)
- npm scripts: `upload-photos` a `upload-photos:dry`

Script:
- Skenuje `stanislav-fotky/` aj jeho subfoldery (napr. `updated/`)
- Mapuje súbor → produkt (auto match alebo manuálne override)
- Preskočí produkty čo už majú Cloudinary fotku (úsporne)
- Súbory v subfolderoch (`updated/`) majú prednosť — vždy prepíšu existujúce
- Nahrá pod `kralovska-pekaren/products/<slug>`
- Aktualizuje `image` URL v `produkty.json`

### 2.6 Variant skupiny (gramáže)

Detekované **20 skupín** produktov, kde rovnaký produkt existuje v rôznych gramážach. Na listingu sa zobrazí 1 karta, na detaile pill-selector.

Zoznam skupín:

| Produkt | Varianty |
|---|---|
| Chlieb DLHÁŇ | 300g / mini 400g / 600g / 800g ★ |
| Chlieb tmavý | 400g / "Tmavý chlieb" ★ |
| Chlieb zemiakový | 400g / "Zemiakový chlieb" ★ |
| Chlieb ľanový | 250g / 500g ★ |
| Žemľa | 50g ★ / 70g / 100g |
| Pagáč oškvarkový | 8g / 40g ★ / 85g |
| Banquet pagáč slaný | 50ks x 8g ★ / 100ks |
| Sendvič | 320g ★ / 400g |
| Kornspitz | 50g / 60g ★ |
| Jačmenné pečivo | 50g / 60g ★ |
| Knedľa parená | 300g / 500g / 600g ★ |
| Parené buchty so slivkovou náplňou | 1ks / 3ks ★ / 6ks |
| Závin makový | 200g ★ / 400g |
| Závin orechový | 200g ★ / 400g |
| Závin tvarohový | 200g ★ / 400g |
| Štrúdľa jablko–mak | 80g / 950g ★ / 1000g |
| Štrúdľa jablko–orech | 80g / 950g ★ / 1000g |
| Štrúdľa mak–višňa | 80g / 950g ★ / 1000g |
| Štrúdľa tvaroh–višňa | 80g / 950g ★ / 1000g |
| Štrúdľa tvaroh–hrozienka | 80g / 950g ★ / 1000g |

Pri varianoch som propagoval fotku z canonical na zvyšné varianty bez vlastnej fotky.

### 2.7 Manuálne doplnené produkty (od teba)

Tieto produkty nie sú v žiadnom docx — dáta si poslal priamo do chatu:

- **Šiška marhuľová 60g** — zloženie, posyp (cukor), alergény, nutričné (1224 kJ / 292 kcal) + fotka
- **Šiška kakaová 60g** — zloženie, kakaová poleva, alergény, nutričné (1041 kJ / 247 kcal)
- **Sladký makový rožok 60g** — zloženie, posyp (mak), alergény, nutričné (1546 kJ / 368 kcal) + fotka
- **Sladký makový uzol 60g** — rovnaké dáta ako rožok + fotka

---

## 3. Aktuálny stav

| Metrika | Počet | Hotovo |
|---|---|---|
| Celkom produktov | 110 | — |
| Kariet na listingu (po zoskupení) | 79 | — |
| Variant skupín | 20 | — |
| S fotkou (Cloudinary) | 91 | **83 %** |
| Bez fotky | 19 | — |
| So zložením / alergénmi / nutričnými | 91 | **83 %** |
| Bez docx-dát | 19 | — |

### Distribúcia podľa kategórie

| Kategória | Produktov | Kariet na listingu |
|---|---|---|
| Chlieb a pečivo | 20 | 12 |
| Sladké pečivo | 47 | 42 |
| Štrúdle | 15 | 5 |
| Slané pečivo | 24 | 18 |
| Špeciálne pečivo | 4 | 4 |
| Potraviny | 0 | 0 |

---

## 4. Čo ešte chýba

### 4.1 Produkty bez fotky (19 kariet na listingu)

Musíš ich dofotiť a vložiť do `stanislav-fotky/updated/` s názvom presne ako slug. Script ich automaticky nahrá pri ďalšom behu.

**Slané pečivo (5):**
- Bageta 150g
- Uzol 100g
- Rožok so syrom a slaninou 70g
- Pagáč syrový 80g
- Balkánsky snack 35g

**Sladké pečivo (14):**
- Rožok sladký 70g
- Orechový rožok lístkový 100g
- Brownie so slaným karamelom a arašidmi 95g
- Slivkový koláč 100g
- Mrkvový koláč 180g
- Citrónová babeta 120g
- Špaldová pochúťka 80g
- Croissant maslový 50g
- Buchta maková 320g
- Buchta tvarohová 320g
- Buchta slivková 320g
- Špička slivková 220g
- Špička orechová 220g
- Kvásková špička so škoricovou náplňou 220g

### 4.2 Produkty bez údajov (19)

Nie sú v žiadnom z dvoch docx. Buď doplniť dáta ručne (pošleš text ako pre Šišky), alebo zmazať z webu.

**Pravdepodobne preklepy v gramáži** (existuje variant v docx s blízkou gramážou):
- Jačmenné pečivo 60g *(v docx 50g)*
- Sendvič 320g *(v docx 400g)*
- Kornspitz 60g *(v docx 50g)*
- Žemľa 70g *(v docx 50g a 100g)*

**Chýbajú úplne v docx:**
- Francúzska bageta 150g
- Anglický rožok 70g
- Banquet pagáč slaný 100ks / 50ks x 8g
- Buchtičky makové 320g
- Buchtičky slivkové 320g
- Buchtičky tvarohové 320g
- Buchtičky tvarohovo/marhuľové 320g

**Parené buchty (rôzne počty kusov):**
- 3ks 180g
- 6ks 360g

**Štrúdle "noha 950g" canonicals:**
- Štrúdľa jablko/mak noha 950g
- Štrúdľa jablko/orech noha 950g
- Štrúdľa mak/višňa noha 950g
- Štrúdľa tvaroh s hrozienkami noha 950g
- Štrúdľa tvaroh/višňa noha 950g

  *(Pozn.: 80g a 1000g varianty týchto štrúdlí majú v docx kompletné dáta — len 950g canonical ich nemá kvôli odlišnému názvu v zdroji.)*

### 4.3 Pravdepodobné duplikáty na zlúčenie

Stále existujú niektoré pravdepodobné duplikáty (nevyriešené pre potrebu manuálneho rozhodnutia):

- `buchticky-makove` ↔ `buchta-makova-320g` (rovnaký produkt, iný názov)
- `buchticky-slivkove` ↔ `buchta-slivkova-320g`
- `buchticky-tvarohove` ↔ `buchta-tvarohova-320g`
- `parene-buchty-3ks` ↔ `parene-buchty-so-slivkovou-naplnou` *(generický variant z docx, podobný popis)*
- Štrúdľa 950g vs 1000g varianty *(pravdepodobne rovnaké, len iné zaokrúhlenie)*

---

## 5. Ako pokračovať

### Pridať fotku k existujúcemu produktu

1. Daj `.jpg` alebo `.png` do `stanislav-fotky/updated/`
2. Pomenuj presne ako slug produktu (napr. `bageta-150g.jpg`)
3. Spusti: `npm run upload-photos`

### Aktualizovať fotku (nahradiť existujúcu)

1. Daj novú fotku do `stanislav-fotky/updated/`
2. Script ju automaticky prepíše (subfoldery majú prednosť pred root)

### Pridať dáta (zloženie/alergény/nutričné)

Pošli text v podobnom formáte ako pri šiškach — ja to zaparsujem a vložím do JSON.

### Manuálne editovať produkt

`app/data/produkty.json` — môžeš upravovať ručne. Pred deployom: `npm run build` overí TypeScript a vygeneruje statické stránky.

---

## 6. Súbory ktoré vznikli / boli upravené

```
app/data/produkty.json       ← všetky produkty + varianty
app/data/produkty.ts         ← TypeScript typy + helpery
app/produkty/page.tsx        ← listing
app/produkty/[slug]/page.tsx ← detail + variant selector
next.config.ts               ← Cloudinary hostname (už bol povolený)

scripts/upload-photos.mjs    ← Cloudinary upload script
scripts/photo-mapping.json   ← override mapping foto→slug
scripts/README.txt           ← návod
package.json                 ← npm run upload-photos / upload-photos:dry
.env.local                   ← Cloudinary credentials (NIE V GITE)

POZNAMKY.md                  ← tento dokument
```
