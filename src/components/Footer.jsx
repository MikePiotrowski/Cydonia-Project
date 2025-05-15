import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com/mike.piotrowski.9" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/michael-lee-piotrowski-552344141/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/links">Resources</a>
                <a href="/forum">Forum</a>
            </div>
            <div className="copyright">
                <p>Mars Cydonia Connection &copy; {new Date().getFullYear()} | Created by Michael Piotrowski</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
