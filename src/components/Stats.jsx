import React, { useState, useEffect, useRef } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0])
  const sectionRef = useRef(null)

  const stats = [
    { label: 'Global industry experts', value: 20, suffix: '+' },
    { label: 'Practitioners', value: 200, suffix: '+' },
    { label: 'Regional hubs', value: 6, suffix: '+' }
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

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCounts(prev => {
            const next = [...prev]
            next[index] = stat.value
            return next
          })
          clearInterval(timer)
        } else {
          setCounts(prev => {
            const next = [...prev]
            next[index] = Math.floor(current)
            return next
          })
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
              {counts[index]}{stat.suffix}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
