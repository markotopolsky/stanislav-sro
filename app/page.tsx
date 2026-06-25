import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Products from './components/Products'
import Process from './components/Process'
import Certifications from './components/Certifications'
import WhyUs from './components/WhyUs'
import CtaBand from './components/CtaBand'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main id="main">
      <a href="#main" className="skip-link">Preskočiť na obsah</a>
      <Hero />
      <Stats />
      <Partners />
      <Products />
      <Process />
      <Certifications />
      <WhyUs />
      <LocationMap />
      <CtaBand />
      <Footer />
    </main>
  )
}
