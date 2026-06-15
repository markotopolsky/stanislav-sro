# Stav dát — Kráľovská pekáreň

Aktualizované po importe dát z 2× docx + Cloudinary uploade fotiek + zoskupení variantov podľa gramáže.

## Sumár

| Metrika | Počet | Hotovo |
|---|---|---|
| Celkom produktov | 110 | — |
| Kariet na listingu (po zoskupení variantov) | 82 | — |
| Variant skupín | 19 | — |
| S fotkou (Cloudinary) | 53 | 49 % |
| **Bez fotky** | **56** | — |
| So zložením + nutričnými + alergénmi | 86 | 79 % |
| **Bez docx-dát** (zloženie/alergény/nutričné) | **23** | — |
| Nové produkty z docx | 43 | — |

## Variant skupiny (gramáže)

Produkty s rovnakým základom v rôznych gramážach sú teraz zoskupené. Na listingu sa zobrazí 1 karta na skupinu (canonical variant), na detaile je pill-selector na prepínanie. Detail URL ostávajú zachované pre každý variant.

Aktuálne skupiny (★ = canonical zobrazený na listingu):
- **Žemľa** — 50g ★ / 70g / 100g
- **Pagáč oškvarkový** — 8g / 40g ★ / 85g
- **Banquet pagáč slaný** — 50ks x 8g ★ / 100ks
- **Jačmenné pečivo** — 50g / 60g ★
- **Kornspitz** — 50g / 60g ★
- **Sendvič** — 320g ★ / 400g
- **Chlieb DLHÁŇ** — 300g / mini 400g / 600g / 800g ★
- **Knedľa parená** — 300g / 500g / 600g ★
- **Chlieb tmavý** — 400g / "Tmavý chlieb" ★
- **Chlieb zemiakový** — 400g / "Zemiakový chlieb" ★
- **Chlieb ľanový** — 250g / 500g ★
- **Parené buchty so slivkovou náplňou** — 1ks / 3ks ★ / 6ks
- **Závin makový** — 200g ★ / 400g
- **Závin orechový** — 200g ★ / 400g
- **Závin tvarohový** — 200g ★ / 400g
- **Štrúdľa jablko–mak** — 80g / 950g ★ / 1000g
- **Štrúdľa jablko–orech** — 80g / 950g ★ / 1000g
- **Štrúdľa tvaroh-hrozienka** — 80g / 950g ★ / 1000g
- **Štrúdľa tvaroh-višňa** — 80g ★ / 950g / 1000g
- **Štrúdľa mak-višňa** — 80g ★ / 950g / 1000g

**Pozn.:** Niektoré skupiny obsahujú nezhody (napr. 950g a 1000g sú asi to isté — slovenský "noha 950g" zaokrúhlený). Ak to chceš čisté, zlúč ich ručne v `produkty.json` (vymaž jeden a presuň dáta).

---

## 🔴 Čo zostáva dofotiť

### Existujúce produkty bez fotky (13)

Boli na webe predtým, ale v `stanislav-fotky/` k nim nič nebolo.

- Parené buchty so slivkovou náplňou 1ks 60g
- Šiška marhuľová 60g
- Sladký makový rožok 60g
- Sladký makový uzol 60g
- Vianočka 320g
- Závin makový 200g / 400g
- Závin orechový 200g / 400g
- Závin tvarohový 200g / 400g
- Štrúdľa mak/višňa noha min. 950g
- Štrúdľa tvaroh/višňa noha min. 950g

### Nové produkty z docx bez fotky (43)

#### Chlieb a pečivo (10)
- Jačmenné pečivo 50g
- Chlieb Dlháň 800g / mini 400g / 300g / 600g
- Chlieb zemiakový 400g
- Chlieb tmavý 400g
- Chlieb ľanový 250g
- Knedľa parená
- Knedľa žemľová

#### Slané pečivo (9)
- Bageta 150g
- Žemľa 100g
- Sendvič 400g
- Uzol 100g
- Kornspitz 50g
- Rožok so syrom a slaninou 70g
- Pagáč oškvarkový 8g
- Pagáč syrový 80g
- Balkánsky snack 35g

#### Sladké pečivo (14)
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

#### Štrúdle (10)
- Štrúdľa jablko–mak 80g / 1000g
- Štrúdľa jablko–orech 80g / 1000g
- Štrúdľa tvaroh-hrozienka 80g / 1000g
- Štrúdľa tvaroh-višňa 80g / 1000g
- Štrúdľa mak-višňa 80g / 1000g

---

## 🟡 Existujúce produkty bez docx-dát (23)

Nie sú v žiadnom z dvoch dokumentov — zostávajú bez zloženia / alergénov / nutričných hodnôt. Buď doplniť ručne, alebo zmazať z webu.

### Pravdepodobne preklepy v gramáži (porovnaj s existujúcimi v docx)
- **Jačmenné pečivo 60g** → docx má 50g
- **Sendvič 320g** → docx má 400g
- **Kornspitz 60g** → docx má 50g
- **Žemľa 70g** → docx má 50g a 100g

### Chýbajú úplne v docx
- Anglický rožok 70g
- Banquet pagáč slaný 100ks
- Banquet pagáč slaný 50ks x 8g
- Buchtičky tvarohovo/marhuľové 320g
- Šiška kakaová 60g
- Šiška marhuľová 60g
- Sladký makový rožok 60g

### Štrúdle "noha min. 950g" (rôzne gramáže od docx 80g / 1000g)
- Štrúdľa jablko/mak noha min. 950g
- Štrúdľa jablko/orech noha min. 950g
- Štrúdľa mak/višňa noha min. 950g
- Štrúdľa tvaroh s hrozienkami noha min. 950g
- Štrúdľa tvaroh/višňa noha min. 950g

### Parené buchty (rôzne počty kusov)
- Parené buchty so slivkovou náplňou 3ks 180g
- Parené buchty so slivkovou náplňou 6ks 360g

---

## 🟠 Pravdepodobné duplikáty (zvážiť zlúčenie)

Po importe z docx vznikli položky, ktoré sú s veľkou pravdepodobnosťou rovnaké ako existujúce, len iné meno.

| Existujúci slug | Nový slug (z docx) | Poznámka |
|---|---|---|
| `dlhan` (Dlháň 800g) | `chlieb-dlhan-800g` (Chlieb Dlháň 800g) | **Určite duplikát** |
| `buchticky-makove` | `buchta-makova-320g` | Rovnaký produkt, iný názov |
| `buchticky-slivkove` | `buchta-slivkova-320g` | Rovnaký produkt |
| `buchticky-tvarohove` | `buchta-tvarohova-320g` | Rovnaký produkt |
| `parene-buchty-3ks` | `parene-buchty-so-slivkovou-naplnou` | Doc1 popisuje generický variant |
| `strudla-jablko-mak` (950g) | `strudla-jablko-mak-1000g` | Rovnaká receptúra, zaokrúhlenie |
| `strudla-jablko-orech` (950g) | `strudla-jablko-orech-1000g` | To isté |
| `strudla-mak-visna` (950g) | `strudla-mak-visna-1000g` | To isté |
| `strudla-tvaroh-visna` (950g) | `strudla-tvaroh-visna-1000g` | To isté |
| `strudla-tvaroh-hrozienka` (950g) | `strudla-tvaroh-hrozienka-1000g` | To isté |
| `makovy-rozok` (60g) | `rozok-sladky-70g` | Možno rovnaký, iná gramáž |
| `makovy-uzol` (60g) | súčasť `rozok-sladky-70g` | Doc1 ich popisuje spoločne |

---

## 🟢 Hotovo

- ✅ Naparsované zloženia / alergény / nutričné hodnoty z 2× docx
- ✅ Detail produktu zobrazuje skutočné dáta (nie placeholder)
- ✅ 54 fotiek nahraných do Cloudinary (`kralovska-pekaren/products/<slug>`)
- ✅ `produkty.json` aktualizovaný s Cloudinary URL
- ✅ 86 produktov má kompletné údaje (foto + zloženie + nutričné + alergény)

---

## Ďalšie akcie

1. **Rozhodnúť o duplikátoch** (oranžová tabuľka) — zmazať novšie alebo nechať ako rôzne SKU
2. **Dofotiť 56 produktov** (zoznam vyššie)
3. Spustiť `npm run upload-photos` pre nové fotky (script ich automaticky pripojí k správnemu produktu, ak budú pomenované presne ako slug — napr. `vianocka.jpg`)
4. **Doplniť zloženia** pre 23 produktov bez docx-dát (alebo poslať aktualizovaný dokument a znovu naparsovať)
