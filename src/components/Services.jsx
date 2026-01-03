import React from 'react'

const items = [
  {
    title: 'Agentic AI integration',
    desc: 'Prebuilt adapters, orchestration and secure pipelines that embed AI into legacy and cloud systems with zero disruption.'
  },
  {
    title: 'Financial services expertise',
    desc: 'Deep domain knowledge to align AI systems with risk, compliance and regulatory requirements from day one.'
  },
  {
    title: 'Outcomes, not point solutions',
    desc: 'Design for measurable business impact and scale beyond pilots with clear ownership, KPIs and change management.'
  },
  {
    title: 'Production-ready platform',
    desc: 'Composable building blocks, RAG, explainability and human-in-the-loop built in for fast, safe delivery.'
  },
  {
    title: 'Enterprise ROI',
    desc: 'Cost-aware architectures and continuous optimization to keep TCO low while accelerating time to value.'
  }
]

const Services = () => {
  return (
    <section id="services" className="section services">
      <h2 className="section-title">What differentiates us</h2>
      <p className="section-subtitle">
        Practical AI integration for regulated environments—minimal surface area, maximum impact
      </p>
      <div className="services-grid">
        {items.map((x, i) => (
          <div key={i} className="service-card scroll-reveal">
            <h3 className="service-title">{x.title}</h3>
            <p className="service-desc">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services


