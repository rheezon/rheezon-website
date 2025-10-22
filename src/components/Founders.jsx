import React from 'react'

const Founders = () => {
  const founders = [
    {
      name: "Vishesh Garg",
      role: "Co-Founder",
      bio: "Serial entrepreneur with 15+ years building scalable tech companies. Previously led engineering at Fortune 500 companies. Stanford CS grad passionate about using technology to solve real-world problems.",
      image: "/images/team/founder1.jpg",
      profileUrl: "https://linkedin.com/in/visheshgarg", // Replace with actual LinkedIn or profile URL
      initial: "VG",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Nitin Dahiya",
      role: "Co-Founder",
      bio: "Technical visionary specializing in AI and distributed systems. Former principal engineer at leading tech unicorns. MIT alumna with multiple patents in machine learning and cloud architecture.",
      image: "/images/team/founder2.jpg",
      profileUrl: "https://linkedin.com/in/nitindahiya", // Replace with actual LinkedIn or profile URL
      initial: "ND",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "Prashant Kumar",
      role: "Co-Founder",
      bio: "Product strategist with a design-first philosophy. Led product teams at top SaaS companies, launching products used by millions. Carnegie Mellon grad obsessed with user experience and customer success.",
      image: "/images/team/founder3.jpg",
      profileUrl: "https://linkedin.com/in/prashantkumar", // Replace with actual LinkedIn or profile URL
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
