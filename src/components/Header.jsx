import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header role="banner" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Mars</span> Cydonia Connection</h1>
        </div>
        <nav role="navigation" aria-label="Main navigation">
          <ul>
            <li><a href="#home" className="highlight current" aria-current="page">HOME</a></li>
            <li><a href="#about">ABOUT MARS</a></li>
            <li><a href="#cydonia">ABOUT CYDONIA</a></li>
            <li><a href="#links">LINKS</a></li>
            <li><a href="#live">LIVE FEED</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;