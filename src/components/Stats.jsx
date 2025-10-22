import React, { useState, useEffect, useRef } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0, team: 0 })
  const sectionRef = useRef(null)

  const stats = [
    { label: 'Years of Excellence', value: 5, suffix: '+' },
    { label: 'Projects Delivered', value: 150, suffix: '+' },
    { label: 'Happy Clients', value: 80, suffix: '+' },
    { label: 'Team Members', value: 25, suffix: '+' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateNumbers()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateNumbers = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / steps
      const key = ['years', 'projects', 'clients', 'team'][index]

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCounts(prev => ({ ...prev, [key]: stat.value }))
          clearInterval(timer)
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, interval)
    })
  }

  return (
    <section ref={sectionRef} className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">
              {Object.values(counts)[index]}{stat.suffix}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
