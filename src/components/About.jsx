import React, { useState, useEffect } from 'react'

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(3) // Start at first item of middle set
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [buttonWidth, setButtonWidth] = useState(240) // Desktop: 200px button + 40px gap
  const [offset, setOffset] = useState(100) // Center offset adjustment

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'values', label: 'Our Values' }
  ]

  // Create an extended array for infinite scroll effect
  const extendedTabs = [...tabs, ...tabs, ...tabs]

  // Calculate responsive button width and offset
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      if (width <= 768) {
        // Mobile: 180px button + 30px gap = 210px
        setButtonWidth(210)
        setOffset(90) // Adjusted for mobile button width
      } else {
        // Desktop: 200px button + 40px gap = 240px
        setButtonWidth(240)
        setOffset(100)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Reset position when reaching the end (for infinite effect)
  useEffect(() => {
    if (currentIndex === tabs.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(tabs.length)
      }, 600) // After transition completes
    } else if (currentIndex === tabs.length - 1) {
      setIsTransitioning(true)
    }
  }, [currentIndex, tabs.length])

  const tabContent = {
    mission: "We're on a mission to empower businesses through cutting-edge technology solutions. By combining innovation with expertise, we transform complex challenges into elegant, scalable products that drive real business value and accelerate digital transformation.",
    vision: "To become the global leader in technology innovation, setting new standards for excellence in software development. We envision a future where every business, regardless of size, has access to enterprise-grade solutions that propel them forward.",
    values: "Integrity, Innovation, and Impact. We believe in building lasting relationships through trust, pushing technological boundaries, and creating solutions that make a meaningful difference in the world. Our commitment to excellence drives everything we do."
  }

  const achievements = [
    { number: '500K+', label: 'Lines of Code' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '2+', label: 'Countries Served' }
  ]

  return (
    <section id="about" className="section about">
      <div className="about-header">
        <h2 className="section-title">About Rheezon</h2>
        <p className="section-subtitle">
          Transforming ideas into powerful digital experiences that drive growth and innovation
        </p>
      </div>

      {/* Tab Navigation - Carousel */}
      <div className="about-tabs-wrapper">
        {/* Fixed gradient spotlight in center */}
        <div className="tab-spotlight"></div>
        
        <div 
          className="about-tabs-carousel"
          style={{
            transform: `translateX(calc(50% - ${currentIndex * buttonWidth}px - ${offset}px))`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
          }}
        >
          {extendedTabs.map((tab, index) => (
            <button
              key={`${tab.id}-${index}`}
              className={`tab-button ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true)
                setCurrentIndex(index)
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <p className="tab-text">{tabContent[extendedTabs[currentIndex].id]}</p>
      </div>

      {/* Achievements Bar */}
      <div className="achievements-bar">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <div className="achievement-content">
              <span className="achievement-number">{achievement.number}</span>
              <span className="achievement-label">{achievement.label}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default About
