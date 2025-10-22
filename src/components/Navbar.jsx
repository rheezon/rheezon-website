import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100
      
      // Show navbar after scrolling 15% of viewport height
      if (scrollPercentage > 15) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // Add extra styling after scrolling 30%
      if (scrollPercentage > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${visible ? 'visible' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
          Rheezon
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
          <li><a href="#founders" onClick={(e) => { e.preventDefault(); scrollToSection('founders') }}>Team</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
