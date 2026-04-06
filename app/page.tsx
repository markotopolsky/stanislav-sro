import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Products from './components/Products'
import About from './components/About'

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Products />
        <Partners />
        <About />
      </main>
    </>
  );
}
