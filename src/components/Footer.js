import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  const yourName = "Your Name";  // Replace with your actual name

  return (
    <footer className="bg-dark text-white text-center py-5">
      <div className="container">
        <p className="mb-3">&copy; {currentYear} {yourName}. All rights reserved.</p>
        
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 social-icon"
            aria-label="Facebook"
            title="Follow me on Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 social-icon"
            aria-label="Twitter"
            title="Follow me on Twitter"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 social-icon"
            aria-label="LinkedIn"
            title="Connect with me on LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 social-icon"
            aria-label="GitHub"
            title="Check out my projects on GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>

        <p className="small text-muted">
          Designed and developed with <span className="text-danger">&hearts;</span> by {yourName}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
