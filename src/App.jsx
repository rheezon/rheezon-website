import { useEffect, Suspense, lazy } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const About = lazy(() => import('./components/About'))
const Technologies = lazy(() => import('./components/Technologies'))
const Founders = lazy(() => import('./components/Founders'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const Services = lazy(() => import('./components/Services'))

function App() {
  useEffect(() => {
    // Smooth, performant reveal using IntersectionObserver + MutationObserver
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('active'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' })

    const observeAll = () => {
      document.querySelectorAll('.scroll-reveal:not(.active)').forEach(el => io.observe(el))
    }
    observeAll()

    const mo = new MutationObserver(() => {
      observeAll()
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <hr className="section-divider" aria-hidden="true" />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <hr className="section-divider" aria-hidden="true" />
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <hr className="section-divider" aria-hidden="true" />
      <Suspense fallback={null}>
        <Technologies />
      </Suspense>
      <hr className="section-divider" aria-hidden="true" />
      <Suspense fallback={null}>
        <Founders />
      </Suspense>
      <hr className="section-divider" aria-hidden="true" />
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <hr className="section-divider" aria-hidden="true" />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
