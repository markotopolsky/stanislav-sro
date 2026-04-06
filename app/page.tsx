import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Products from './components/Products'
import About from './components/About'
import WhyUs from './components/WhyUs'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Partners />
        <Products />
        <WhyUs />
        <About />
        <CtaBand />
        <Footer />
      </main>
    </>
  );
}
