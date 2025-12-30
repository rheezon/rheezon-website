import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)
    
    // EmailJS configuration
    // You need to:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template
    // 4. Get your Public Key, Service ID, and Template ID
    // 5. Replace the values below with your credentials
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    
    try {
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(publicKey)
      
      // Send email
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'support@rheezon.in',
          reply_to: formData.email
        }
      )
      
      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const contactItems = [
    {
      label: 'Email',
      value: 'support@rheezon.in',
      link: 'mailto:support@rheezon.in'
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
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
            <span className="button-arrow">{isLoading ? '⏳' : '→'}</span>
          </button>
          
          {submitStatus === 'success' && (
            <div className="form-message success">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form-message error">
              ✗ Failed to send message. Please check your EmailJS configuration or try again later.
            </div>
          )}
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
