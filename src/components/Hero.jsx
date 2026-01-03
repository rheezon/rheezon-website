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
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Harnessing combined <span className="gradient-text">intelligence</span> to expand human potential
          </h1>
          <p>
            We integrate AI systems into real businesses—safely, explainably, and at enterprise scale.
          </p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={scrollToContact}>
              <span>Contact us</span>
              <span className="button-arrow">→</span>
            </button>
            <button className="cta-button cta-button-secondary" onClick={() => {
              const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}>
              <span>Explore our solutions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
