import React from 'react'

const Technologies = () => {
  const technologiesRow1 = [
    'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 
    'TypeScript', 'GraphQL', 'MongoDB'
  ]

  const technologiesRow2 = [
    'PostgreSQL', 'Redis', 'Next.js', 'Vue.js', 'Express', 
    'Tailwind CSS', 'Firebase', 'Angular', 'Django', 'Flutter'
  ]

  return (
    <section className="technologies-section">
      <div className="technologies-header">
        <h2 className="technologies-title">Technologies We Master</h2>
        <p className="technologies-subtitle">Building with the best tools in the industry</p>
      </div>
      
      <div className="tech-slider-wrapper">
        {/* First Row - Slides Left */}
        <div className="tech-slider">
          <div className="tech-track tech-track-left">
            {technologiesRow1.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {technologiesRow1.map((tech, index) => (
              <span key={`dup1-${index}`} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Second Row - Slides Right */}
        <div className="tech-slider">
          <div className="tech-track tech-track-right">
            {technologiesRow2.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {technologiesRow2.map((tech, index) => (
              <span key={`dup2-${index}`} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies

