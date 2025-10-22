import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#founders' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Projects', href: '#projects' },
        { label: 'Case Studies', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'API', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Newsletter', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'Community', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'GDPR', href: '#' }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} onClick={(e) => {
                      if (link.href.startsWith('#') && link.href !== '#') {
                        e.preventDefault()
                        const element = document.querySelector(link.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }
                    }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} Rheezon. All rights reserved. Built with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
