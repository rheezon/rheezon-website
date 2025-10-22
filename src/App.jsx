import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Technologies from './components/Technologies'
import Founders from './components/Founders'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll reveal animation
      const reveals = document.querySelectorAll('.scroll-reveal')
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 100
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Technologies />
      <Founders />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
