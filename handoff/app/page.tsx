import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Products from './components/Products'
import Process from './components/Process'
import Certifications from './components/Certifications'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Faq from './components/Faq'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Partners />
      <Products />
      <Process />
      <Certifications />
      <WhyUs />
      <About />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  )
}
