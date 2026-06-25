import type { Metadata } from 'next'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Obchodné podmienky — Kráľovská pekáreň',
  description:
    'Všeobecné obchodné podmienky pre B2B spoluprácu a dodávky pekárenských výrobkov spoločnosti STANISLAV, s. r. o.',
}

export default function ObchodnePodmienkyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <span className="eyebrow">Podmienky spolupráce</span>
          <h1 className="h-section lg" style={{ color: 'var(--color-white)', marginTop: '8px' }}>
            Všeobecné obchodné<br />podmienky
          </h1>
        </div>
      </section>

      <article className="legal">
        <div className="legal-inner">
          <div className="legal-callout">
            Tieto všeobecné obchodné podmienky (ďalej len „VOP") upravujú vzťahy medzi spoločnosťou
            STANISLAV, s. r. o. ako dodávateľom a podnikateľskými subjektmi (odberateľmi) pri dodávke
            pekárenských výrobkov v rámci veľkoobchodnej (B2B) spolupráce.
          </div>

          <h2>1. Identifikácia dodávateľa</h2>
          <p>
            <strong>STANISLAV, s. r. o.</strong>, Krmeš 61, 900 50 Kráľová pri Senci,
            IČO: 44408137. Kontakt: <a href="tel:+421918562092">+421 918 562 092</a>,{' '}
            <a href="mailto:dusan.nagy@kralovska-pekaren.sk">dusan.nagy@kralovska-pekaren.sk</a>{' '}
            (ďalej len „dodávateľ").
          </p>

          <h2>2. Predmet a rozsah</h2>
          <p>
            VOP sa vzťahujú na dodávky čerstvých a mrazených pekárenských výrobkov medzi dodávateľom
            a odberateľom — obchodným reťazcom, prevádzkou HoReCa, distribútorom alebo iným
            podnikateľským subjektom. Prezentácia sortimentu na tejto webstránke ani odoslanie
            dopytového formulára nie sú objednávkou ani návrhom na uzavretie zmluvy.
          </p>

          <h2>3. Dopyt a uzatvorenie zmluvy</h2>
          <p>
            Na základe odoslaného dopytu kontaktuje dodávateľ odberateľa s cenovou ponukou,
            podmienkami minimálneho odberného množstva a termínmi dodania. Zmluvný vzťah vzniká
            potvrdením objednávky dodávateľom, prípadne uzavretím rámcovej zmluvy o dodávkach.
          </p>

          <h2>4. Ceny a platobné podmienky</h2>
          <p>
            Ceny sú stanovené individuálne podľa sortimentu, objemu a frekvencie odberu, a sú
            uvedené v cenovej ponuke alebo rámcovej zmluve. Ak nie je dohodnuté inak, faktúry sú
            splatné v lehote uvedenej na faktúre. Pri omeškaní s úhradou je dodávateľ oprávnený
            účtovať zákonný úrok z omeškania.
          </p>

          <h2>5. Dodanie a prevzatie tovaru</h2>
          <p>
            Termíny a spôsob dodania sa stanovujú podľa dohody. Odberateľ je povinný tovar pri
            prevzatí skontrolovať. Vzhľadom na charakter čerstvého pečiva je odberateľ povinný
            zabezpečiť skladovanie a manipuláciu v súlade s pokynmi dodávateľa.
          </p>

          <h2>6. Reklamácie a zodpovednosť za vady</h2>
          <p>
            Zjavné vady (množstvo, druh, mechanické poškodenie) je odberateľ povinný uplatniť bez
            zbytočného odkladu pri prevzatí, najneskôr v deň dodania. Skryté vady bezodkladne po ich
            zistení v rámci doby trvanlivosti výrobku. Reklamáciu je možné uplatniť e-mailom alebo
            telefonicky na kontaktoch dodávateľa; každá šarža je archivovaná pre účely analýzy.
          </p>

          <h2>7. Ochrana osobných údajov</h2>
          <p>
            Spracúvanie osobných údajov sa riadi{' '}
            <a href="/ochrana-osobnych-udajov">Zásadami ochrany osobných údajov</a> v súlade
            s Nariadením (EÚ) 2016/679 (GDPR) a zákonom č. 18/2018 Z. z.
          </p>

          <h2>8. Záverečné ustanovenia</h2>
          <p>
            Vzťahy neupravené týmito VOP sa riadia príslušnými ustanoveniami Obchodného zákonníka
            a ďalšími všeobecne záväznými právnymi predpismi Slovenskej republiky. Dodávateľ si
            vyhradzuje právo VOP meniť; aktuálne znenie je zverejnené na tejto webstránke.
          </p>

          <p className="legal-note">
            Toto je všeobecné znenie podmienok pre B2B spoluprácu. Konkrétne podmienky dodávok sú
            vždy predmetom individuálnej cenovej ponuky alebo rámcovej zmluvy.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
