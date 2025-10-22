import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Option 1: Using EmailJS (requires setup at emailjs.com)
    // Uncomment below and add your EmailJS credentials:
    /*
    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',  // Get from emailjs.com
        'YOUR_TEMPLATE_ID', // Get from emailjs.com
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'rheezon.work@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Get from emailjs.com
      )
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('Failed to send message. Please try again.')
    }
    */
    
    // Option 2: Current mailto fallback
    const mailtoLink = `mailto:rheezon.work@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
  }

  const contactItems = [
    {
      label: 'Email',
      value: 'rheezon.work@gmail.com',
      link: 'mailto:rheezon.work@gmail.com'
    },
    {
      label: 'Phone',
      value: '+91 234 567 890',
      link: 'tel:+91234567890'
    },
    {
      label: 'Location',
      value: 'Gurugram, India',
      link: null
    }
  ]

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Ready to transform your business? Let's build something amazing together</p>
      
      <div className="contact-container">
        <form className="contact-form scroll-reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more..."
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
            <span className="button-arrow">→</span>
          </button>
        </form>

        <div className="contact-info">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-item scroll-reveal">
              <div className="contact-item-label">{item.label}</div>
              <div className="contact-item-value">
                {item.link ? (
                  <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
