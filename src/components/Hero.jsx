import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">✨</span>
          Welcome to the future of innovation
        </div>
        <h1>
          Innovation starts with <span className="gradient-text">Rheezon</span>
        </h1>
        <p>
          Building <span className="highlight-text">tomorrow's solutions</span> today with <br/>
          cutting-edge technology and <span className="highlight-text">creative innovation</span>
        </p>
        <div className="hero-buttons">
          <button className="cta-button" onClick={scrollToContact}>
            <span>Get Started</span>
            <span className="button-arrow">→</span>
          </button>
          <button className="cta-button cta-button-secondary" onClick={scrollToProjects}>
            <span>Explore Projects</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
