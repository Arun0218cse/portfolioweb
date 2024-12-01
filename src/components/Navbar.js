import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll behavior for navigation links
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <a className="navbar-brand" href="#home">
        <strong>My Portfolio</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'projects' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#skills"
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
          {/* New Resume link */}
          <li className={`nav-item ${activeLink === 'resume' ? 'active' : ''}`}>
            <a
              className="nav-link"
              href="#resume"
              onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
