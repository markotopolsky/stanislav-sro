import type { Metadata } from 'next'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'GDPR, obchodné podmienky a cookies — Kráľovská pekáreň',
  description:
    'Zásady ochrany osobných údajov (GDPR), všeobecné obchodné podmienky a používanie cookies spoločnosti STANISLAV, s. r. o.',
}

type Ucel = {
  nazov: string
  ucel: string
  osoby: string
  udaje: string
  zaklad: string
  prijemcovia: string
  lehota: string
  poznamka?: string
}

const ucely: Ucel[] = [
  {
    nazov: 'Kontaktný formulár a B2B dopyt',
    ucel: 'Spracúvanie osobných údajov v evidencii záujemcov o spoluprácu na účely zaslania odpovede na položenú otázku alebo dopyt.',
    osoby: 'fyzické osoby — záujemcovia o spoluprácu, kontaktné osoby odberateľov',
    udaje: 'titul, meno a priezvisko, spoločnosť, e-mail, telefón, predmet a obsah správy',
    zaklad: 'súhlas dotknutej osoby, resp. opatrenia pred uzavretím zmluvy',
    prijemcovia:
      'subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach fyzických osôb (súdy, orgány činné v trestnom konaní) a sprostredkovatelia zabezpečujúci prevádzku webu a hostingu',
    lehota: 'maximálne 6 mesiacov (resp. dlhšie pri plnení zákonných povinností či právnych nárokov prevádzkovateľa).',
    poznamka:
      'Dotknutá osoba má právo kedykoľvek odvolať súhlas so spracúvaním osobných údajov, ktoré sa jej týkajú. Odvolanie súhlasu nemá vplyv na zákonnosť spracúvania pred jeho odvolaním.',
  },
  {
    nazov: 'Evidencia účtovných a daňových dokladov',
    ucel: 'Spracúvanie osobných údajov pri spracovaní účtovných dokladov a agendy spojenej s ich spracovaním.',
    osoby: 'fyzické osoby — klienti, dodávatelia, odberatelia',
    udaje:
      'meno, priezvisko, titul, adresa, telefónne číslo, e-mailová adresa, číslo bankového účtu fyzickej osoby, údaje uvedené na účtovných dokladoch',
    zaklad:
      'zákon č. 431/2002 Z. z. o účtovníctve, zákon č. 222/2004 Z. z. o dani z pridanej hodnoty, zákon č. 40/1964 Zb. Občiansky zákonník, v znení neskorších predpisov',
    prijemcovia:
      'daňový úrad a subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach fyzických osôb (súdy, orgány činné v trestnom konaní)',
    lehota: 'účtovné doklady — 10 rokov',
  },
  {
    nazov: 'Evidencia došlej a odoslanej pošty a správa registratúry',
    ucel: 'Spracúvanie osobných údajov pri evidencii došlej a odoslanej pošty a úkonoch spojených so správou registratúry.',
    osoby: 'fyzické osoby — adresáti, odosielatelia',
    udaje: 'meno, priezvisko, titul, adresa, názov organizácie, e-mailová adresa, predmet a obsah pošty',
    zaklad:
      'zákon č. 395/2002 Z. z. o archívoch a registratúrach, v znení neskorších predpisov',
    prijemcovia:
      'subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach fyzických osôb (súdy, orgány činné v trestnom konaní) a sprostredkovatelia zabezpečujúci hosting a doručovanie',
    lehota: 'bežná korešpondencia — 3 roky',
  },
]

type Cookie = {
  kategoria: string
  priklady: string
  ucel: string
  doba: string
}

const cookies: Cookie[] = [
  {
    kategoria: 'Nevyhnutné (technické)',
    priklady: 'cookie_consent, session',
    ucel: 'Základná funkčnosť webu a uloženie vašej voľby súhlasu s cookies. Nevyžadujú súhlas.',
    doba: 'relácia až 12 mesiacov',
  },
  {
    kategoria: 'Preferenčné (funkčné)',
    priklady: 'lang, ui-preferences',
    ucel: 'Zapamätanie jazyka a nastavení zobrazenia pre pohodlnejšie používanie.',
    doba: 'až 12 mesiacov',
  },
  {
    kategoria: 'Analytické',
    priklady: '_ga, _gid (Google Analytics)',
    ucel: 'Anonymné štatistiky návštevnosti a správania na webe na účely jeho zlepšovania.',
    doba: 'až 24 mesiacov',
  },
  {
    kategoria: 'Marketingové',
    priklady: '_fbp (Meta), _gcl_au (Google Ads)',
    ucel: 'Meranie účinnosti reklamných kampaní a remarketing.',
    doba: 'až 13 mesiacov',
  },
]

export default function GdprPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <span className="eyebrow">Právne informácie</span>
          <h1 className="h-section lg" style={{ color: 'var(--color-white)', marginTop: '8px' }}>
            Ochrana údajov, podmienky<br />a cookies
          </h1>
          <nav className="legal-toc" aria-label="Obsah stránky">
            <a href="#ochrana-osobnych-udajov">Ochrana osobných údajov</a>
            <a href="#obchodne-podmienky">Obchodné podmienky</a>
            <a href="#cookies">Cookies</a>
          </nav>
        </div>
      </section>

      <article className="legal">
        <div className="legal-inner">

          {/* ── 01 · Ochrana osobných údajov ─────────────────────── */}
          <div className="legal-divider" id="ochrana-osobnych-udajov">
            <span className="eyebrow">01 — GDPR</span>
            <h2 className="legal-divider-h">Zásady spracúvania a ochrany osobných údajov</h2>
          </div>

          <div className="legal-callout">
            Dohľad nad spracúvaním osobných údajov v našej spoločnosti zabezpečuje spoločnosť{' '}
            <strong>EuroTRADING s. r. o.</strong>, ktorá nám v súlade s § 44 zákona č. 18/2018 Z. z.
            a článkom č. 37 Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 poskytuje
            zodpovednú osobu. Kontaktovať ju môžete na adrese{' '}
            <a href="mailto:zo@eurotrading.sk">zo@eurotrading.sk</a>. Viac informácií nájdete na{' '}
            <a href="https://www.eurotrading.sk/zo" target="_blank" rel="noreferrer">
              www.eurotrading.sk/zo
            </a>
            .
          </div>

          <p>
            <strong>STANISLAV, s. r. o.</strong>, Krmeš 61, 900 50 Kráľová pri Senci,
            IČO: 44408137, ako prevádzkovateľ poskytuje za účelom dodržiavania spravodlivosti
            a transparentnosti voči dotknutým osobám toto oboznámenie o spracúvaní osobných údajov
            podľa článkov 13 a 14 Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla
            2016 (ďalej len „Nariadenie") a § 19 zákona NR SR č. 18/2018 Z. z. o ochrane osobných
            údajov.
          </p>

          {ucely.map((u) => (
            <section className="legal-ucel" key={u.nazov}>
              <h3>{u.nazov}</h3>
              <dl>
                <dt>Účel spracúvania</dt>
                <dd>{u.ucel}</dd>
                <dt>Okruh dotknutých osôb</dt>
                <dd>{u.osoby}</dd>
                <dt>Zoznam osobných údajov</dt>
                <dd>{u.udaje}</dd>
                <dt>Právny základ</dt>
                <dd>{u.zaklad}</dd>
                <dt>Kategórie príjemcov</dt>
                <dd>{u.prijemcovia}</dd>
                <dt>Prenos do tretích krajín</dt>
                <dd>nerealizuje sa</dd>
                <dt>Lehota na vymazanie</dt>
                <dd>{u.lehota}</dd>
                <dt>Automatizované rozhodovanie</dt>
                <dd>neuskutočňuje sa (vrátane profilovania)</dd>
              </dl>
              {u.poznamka && <p className="legal-note">{u.poznamka}</p>}
            </section>
          ))}

          <h3>Práva dotknutých osôb</h3>
          <p>
            Dotknuté osoby, o ktorých sú spracúvané osobné údaje pre konkrétne vymedzené účely, si
            môžu uplatniť nasledovné práva:
          </p>
          <ul>
            <li>právo požadovať prístup k svojim osobným údajom,</li>
            <li>právo na opravu osobných údajov,</li>
            <li>právo na vymazanie osobných údajov,</li>
            <li>právo na obmedzenie spracúvania osobných údajov,</li>
            <li>právo namietať proti spracúvaniu osobných údajov,</li>
            <li>právo na prenosnosť svojich osobných údajov,</li>
            <li>právo podať sťažnosť dozornému orgánu, t. j. Úradu na ochranu osobných údajov SR.</li>
          </ul>
          <p>
            Uvedené práva sú bližšie špecifikované v článkoch 15 až 21 Nariadenia. Voči
            prevádzkovateľovi si dotknutá osoba môže svoje práva uplatniť prostredníctvom písomnej
            žiadosti alebo elektronickými prostriedkami.
          </p>

          <h3>Bezpečnosť a aktualizácia zásad</h3>
          <p>
            STANISLAV, s. r. o. prijala všetky primerané personálne, organizačné a technické
            opatrenia za účelom maximálnej ochrany Vašich osobných údajov s cieľom v čo najväčšej
            miere znížiť riziko ich zneužitia. V zmysle článku 34 Nariadenia Vám ako dotknutým
            osobám oznámime bez zbytočného odkladu prípadné porušenie ochrany osobných údajov, ktoré
            pravdepodobne povedie k vysokému riziku pre práva a slobody fyzických osôb.
          </p>

          <h3>Kontakt a sťažnosti</h3>
          <p>
            Ak máte akúkoľvek otázku ohľadne spracúvania Vašich osobných údajov, vrátane uplatnenia
            vyššie uvedených práv, môžete sa obrátiť na našu zodpovednú osobu poskytovanú
            spoločnosťou EuroTRADING s. r. o. (
            <a href="https://www.eurotrading.sk" target="_blank" rel="noreferrer">
              www.eurotrading.sk
            </a>
            ), e-mailom na <a href="mailto:zo@eurotrading.sk">zo@eurotrading.sk</a>. Ak nie ste
            spokojný s našou odpoveďou, môžete podať sťažnosť na dozorný orgán, ktorým je Úrad na
            ochranu osobných údajov Slovenskej republiky,{' '}
            <a href="https://dataprotection.gov.sk" target="_blank" rel="noreferrer">
              dataprotection.gov.sk
            </a>
            , Hraničná 12, 820 07 Bratislava 27.
          </p>

          {/* ── 02 · Obchodné podmienky ──────────────────────────── */}
          <div className="legal-divider" id="obchodne-podmienky">
            <span className="eyebrow">02 — VOP</span>
            <h2 className="legal-divider-h">Všeobecné obchodné podmienky</h2>
          </div>

          <div className="legal-callout">
            Tieto všeobecné obchodné podmienky (ďalej len „VOP") upravujú vzťahy medzi spoločnosťou
            STANISLAV, s. r. o. ako dodávateľom a podnikateľskými subjektmi (odberateľmi) pri dodávke
            pekárenských výrobkov v rámci veľkoobchodnej (B2B) spolupráce.
          </div>

          <h3>1. Identifikácia dodávateľa</h3>
          <p>
            <strong>STANISLAV, s. r. o.</strong>, Krmeš 61, 900 50 Kráľová pri Senci, IČO: 44408137.
            Kontakt: <a href="tel:+421918562092">+421 918 562 092</a>,{' '}
            <a href="mailto:dusan.nagy@kralovska-pekaren.sk">dusan.nagy@kralovska-pekaren.sk</a>{' '}
            (ďalej len „dodávateľ").
          </p>

          <h3>2. Predmet a rozsah</h3>
          <p>
            VOP sa vzťahujú na dodávky čerstvých a mrazených pekárenských výrobkov medzi dodávateľom
            a odberateľom — obchodným reťazcom, prevádzkou HoReCa, distribútorom alebo iným
            podnikateľským subjektom. Prezentácia sortimentu na tejto webstránke ani odoslanie
            dopytového formulára nie sú objednávkou ani návrhom na uzavretie zmluvy.
          </p>

          <h3>3. Dopyt a uzatvorenie zmluvy</h3>
          <p>
            Na základe odoslaného dopytu kontaktuje dodávateľ odberateľa s cenovou ponukou,
            podmienkami minimálneho odberného množstva a termínmi dodania. Zmluvný vzťah vzniká
            potvrdením objednávky dodávateľom, prípadne uzavretím rámcovej zmluvy o dodávkach.
          </p>

          <h3>4. Ceny a platobné podmienky</h3>
          <p>
            Ceny sú stanovené individuálne podľa sortimentu, objemu a frekvencie odberu, a sú
            uvedené v cenovej ponuke alebo rámcovej zmluve. Ak nie je dohodnuté inak, faktúry sú
            splatné v lehote uvedenej na faktúre. Pri omeškaní s úhradou je dodávateľ oprávnený
            účtovať zákonný úrok z omeškania.
          </p>

          <h3>5. Dodanie a prevzatie tovaru</h3>
          <p>
            Termíny a spôsob dodania sa stanovujú podľa dohody. Odberateľ je povinný tovar pri
            prevzatí skontrolovať. Vzhľadom na charakter čerstvého pečiva je odberateľ povinný
            zabezpečiť skladovanie a manipuláciu v súlade s pokynmi dodávateľa.
          </p>

          <h3>6. Reklamácie a zodpovednosť za vady</h3>
          <p>
            Zjavné vady (množstvo, druh, mechanické poškodenie) je odberateľ povinný uplatniť bez
            zbytočného odkladu pri prevzatí, najneskôr v deň dodania. Skryté vady bezodkladne po ich
            zistení v rámci doby trvanlivosti výrobku. Reklamáciu je možné uplatniť e-mailom alebo
            telefonicky na kontaktoch dodávateľa; každá šarža je archivovaná pre účely analýzy.
          </p>

          <h3>7. Záverečné ustanovenia</h3>
          <p>
            Vzťahy neupravené týmito VOP sa riadia príslušnými ustanoveniami Obchodného zákonníka
            a ďalšími všeobecne záväznými právnymi predpismi Slovenskej republiky. Dodávateľ si
            vyhradzuje právo VOP meniť; aktuálne znenie je zverejnené na tejto webstránke.
          </p>

          <p className="legal-note">
            Toto je všeobecné znenie podmienok pre B2B spoluprácu. Konkrétne podmienky dodávok sú
            vždy predmetom individuálnej cenovej ponuky alebo rámcovej zmluvy.
          </p>

          {/* ── 03 · Cookies ─────────────────────────────────────── */}
          <div className="legal-divider" id="cookies">
            <span className="eyebrow">03 — Cookies</span>
            <h2 className="legal-divider-h">Používanie súborov cookies</h2>
          </div>

          <p>
            Súbory cookies sú malé textové súbory, ktoré sa pri návšteve webstránky ukladajú do Vášho
            zariadenia. Umožňujú základnú funkčnosť webu, zapamätanie nastavení a — s Vaším súhlasom —
            aj meranie návštevnosti a účinnosti reklamy.
          </p>

          <h3>Aké kategórie cookies používame</h3>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Kategória</th>
                <th>Príklady</th>
                <th>Účel</th>
                <th>Doba platnosti</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.kategoria}>
                  <td data-label="Kategória"><strong>{c.kategoria}</strong></td>
                  <td data-label="Príklady">{c.priklady}</td>
                  <td data-label="Účel">{c.ucel}</td>
                  <td data-label="Doba platnosti">{c.doba}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Súhlas a jeho odvolanie</h3>
          <p>
            Nevyhnutné (technické) cookies sú aktívne vždy, keďže bez nich web nefunguje správne.
            Analytické a marketingové cookies používame iba na základe Vášho súhlasu, ktorý môžete
            kedykoľvek udeliť alebo odvolať v nastaveniach cookies, prípadne vymazaním súborov cookies
            vo svojom prehliadači.
          </p>

          <h3>Správa cookies v prehliadači</h3>
          <p>
            Ukladanie cookies môžete obmedziť alebo zakázať priamo v nastaveniach svojho webového
            prehliadača (Chrome, Safari, Firefox, Edge a iné). Upozorňujeme, že zablokovanie
            niektorých cookies môže ovplyvniť funkčnosť a komfort používania webstránky.
          </p>

          <h3>Cookies tretích strán</h3>
          <p>
            Na meranie a marketing môžeme využívať služby tretích strán, najmä Google (Google
            Analytics, Google Ads) a Meta Platforms. Spracúvanie údajov týmito poskytovateľmi sa
            riadi ich vlastnými zásadami ochrany osobných údajov.
          </p>

          <p className="legal-note">
            Konkrétny zoznam a doby platnosti cookies sa môžu meniť podľa nasadených nástrojov.
            Aktuálne znenie je vždy zverejnené na tejto stránke.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
