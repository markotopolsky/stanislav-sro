import type { Metadata } from 'next'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Ochrana osobných údajov — Kráľovská pekáreň',
  description:
    'Zásady spracúvania a ochrany osobných údajov spoločnosti STANISLAV, s. r. o. podľa Nariadenia (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z.',
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

export default function OchranaOsobnychUdajovPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <span className="eyebrow">Ochrana údajov</span>
          <h1 className="h-section lg" style={{ color: 'var(--color-white)', marginTop: '8px' }}>
            Zásady spracúvania a ochrany<br />osobných údajov
          </h1>
        </div>
      </section>

      <article className="legal">
        <div className="legal-inner">
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
              <h2>{u.nazov}</h2>
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

          <h2>Práva dotknutých osôb</h2>
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

          <h2>Bezpečnosť a aktualizácia zásad</h2>
          <p>
            STANISLAV, s. r. o. prijala všetky primerané personálne, organizačné a technické
            opatrenia za účelom maximálnej ochrany Vašich osobných údajov s cieľom v čo najväčšej
            miere znížiť riziko ich zneužitia. V zmysle článku 34 Nariadenia Vám ako dotknutým
            osobám oznámime bez zbytočného odkladu prípadné porušenie ochrany osobných údajov, ktoré
            pravdepodobne povedie k vysokému riziku pre práva a slobody fyzických osôb.
          </p>
          <p>
            Právne predpisy a spôsoby spracúvania Vašich osobných údajov sa môžu meniť. Ak sa tieto
            zásady rozhodneme aktualizovať, umiestnime zmeny na našej webstránke a budeme Vás o nich
            informovať.
          </p>

          <h2>Kontakt a sťažnosti</h2>
          <p>
            Ak máte akúkoľvek otázku ohľadne spracúvania Vašich osobných údajov, vrátane uplatnenia
            vyššie uvedených práv, môžete sa obrátiť na našu zodpovednú osobu poskytovanú
            spoločnosťou EuroTRADING s. r. o. (
            <a href="https://www.eurotrading.sk" target="_blank" rel="noreferrer">
              www.eurotrading.sk
            </a>
            ), e-mailom na <a href="mailto:zo@eurotrading.sk">zo@eurotrading.sk</a>.
          </p>
          <p>
            Ak nie ste spokojný s našou odpoveďou, alebo sa domnievate, že Vaše osobné údaje
            spracúvame nespravodlivo alebo nezákonne, môžete podať sťažnosť na dozorný orgán, ktorým
            je Úrad na ochranu osobných údajov Slovenskej republiky,{' '}
            <a href="https://dataprotection.gov.sk" target="_blank" rel="noreferrer">
              dataprotection.gov.sk
            </a>
            , Hraničná 12, 820 07 Bratislava 27, tel.: +421 2 3231 3214, e-mail:{' '}
            <a href="mailto:statny.dozor@pdp.gov.sk">statny.dozor@pdp.gov.sk</a>.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
