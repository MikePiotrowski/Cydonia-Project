import React, {useEffect, useState} from 'react';
import './Header.css';

const Header = ({currentPage, setCurrentPage}) => {
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
              <li>
                  <a
                      href="#home"
                      className={`${currentPage === 'home' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'home' ? 'page' : undefined}
                      onClick={() => setCurrentPage('home')}
                  >
                      HOME
                  </a>
              </li>
              <li>
                  <a
                      href="#about"
                      className={`${currentPage === 'about' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'about' ? 'page' : undefined}
                      onClick={() => setCurrentPage('about')}
                  >
                      ABOUT MARS
                  </a>
              </li>
              <li>
                  <a
                      href="#cydonia"
                      className={`${currentPage === 'cydonia' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'cydonia' ? 'page' : undefined}
                      onClick={() => setCurrentPage('cydonia')}
                  >
                      ABOUT CYDONIA
                  </a>
              </li>
              <li><a href="#community">COMMUNITY</a></li>
              <li>
                  <a
                      href="#forum"
                      className={`${currentPage === 'forum' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'forum' ? 'page' : undefined}
                      onClick={() => setCurrentPage('forum')}
                  >
                      FORUM
                  </a>
              </li>
              <li>
                  <a
                      href="#links"
                      className={`${currentPage === 'links' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'links' ? 'page' : undefined}
                      onClick={() => setCurrentPage('links')}
                  >
                      LINKS
                  </a>
              </li>
            <li><a href="#live">LIVE FEED</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
