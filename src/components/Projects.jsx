import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Jobsease",
      tag: "AI Job Notifier",
      description: "AI-powered job matching system with automated resume generation. Analyzes job relevance and creates customized resumes for each opportunity.",
      image: "/images/projects/project1.jpg", // Replace with your actual image
      icon: "☁️",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Social Media Data Fetcher",
      tag: "Social Data Sync",
      description: "Automatically collects and organizes social media data like comments and messages into spreadsheets.",
      image: "/images/projects/project2.jpg", // Replace with your actual image
      icon: "📊",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ]

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Our Projects</h2>
      <p className="section-subtitle">Innovative solutions that have transformed businesses and delighted millions of users</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card scroll-reveal">
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                project.icon
              )}
            </div>
            <div className="project-content">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
