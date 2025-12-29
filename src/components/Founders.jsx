import React from 'react'

const Founders = () => {
  const founders = [
    {
      name: "Vishesh Garg",
      role: "Co-Founder",
      bio: "Innovative developer specializing in scalable backend and AI-driven systems, with 5+ years of experience building distributed solutions using Spring Boot, Kafka, and AWS.",
      image: "/images/team/founder1.jpg",
      profileUrl: "https://www.linkedin.com/in/vishesh-garg-07580622b/", // Replace with actual LinkedIn or profile URL
      initial: "VG",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Nitin Dahiya",
      role: "Co-Founder",
      bio: "Technical specialisation in system security with 3+ years in the tech field. Passionate about building robust SaaS, leveraging OSINT and threat intelligence to architect resilient, secure platforms.",
      image: "/images/team/founder2.jpg",
      profileUrl: "https://www.linkedin.com/in/nitin-dahiya-9848b3258/", // Replace with actual LinkedIn or profile URL
      initial: "ND",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "Prashant Kumar",
      role: "Co-Founder",
      bio: "5 years of AI/ML experience paired with a design-first product strategy mindset. Led product teams at leading SaaS companies, delivering products used by millions.",
      image: "/images/team/founder3.jpg",
      profileUrl: "https://www.linkedin.com/in/prashantyadavcode/", // Replace with actual LinkedIn or profile URL
      initial: "PK",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ]

  return (
    <section id="founders" className="section founders">
      <h2 className="section-title">Meet Our Team</h2>
      <p className="section-subtitle">The visionary leaders driving innovation and excellence at Rheezon</p>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card scroll-reveal">
            <div className="founder-image" style={{ background: founder.gradient }}>
              {founder.image ? (
                <img src={founder.image} alt={founder.name} />
              ) : (
                founder.initial
              )}
            </div>
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-bio">{founder.bio}</p>
            <a 
              href={founder.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="founder-profile-btn"
            >
              Visit Profile
              <span className="btn-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Founders
