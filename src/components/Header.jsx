import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import useScrollPosition from '../hooks/useScrollPosition';
import withMemo from '../hoc/withMemo';

const Header = ({currentPage, setCurrentPage}) => {
    // Use custom hook for scroll position
    const scrollPosition = useScrollPosition();
    const isScrolled = scrollPosition > 50;

    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking outside
    const closeMobileMenu = useCallback(() => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobileMenuOpen]);

    // Close mobile menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 576 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    // Handle escape key to close mobile menu
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isMobileMenuOpen]);

    return (
    <header role="banner" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Mars</span> Cydonia Connection</h1>
        </div>

          {/* Mobile menu button */}
          <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="main-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <nav
              role="navigation"
              aria-label="Main navigation"
              className={isMobileMenuOpen ? 'active' : ''}
              id="main-navigation"
          >
          <ul>
              <li>
                  <a
                      href="#home"
                      className={`${currentPage === 'home' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'home' ? 'page' : undefined}
                      onClick={() => {
                          setCurrentPage('home');
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      HOME
                  </a>
              </li>
              <li>
                  <a
                      href="#about"
                      className={`${currentPage === 'about' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'about' ? 'page' : undefined}
                      onClick={() => {
                          setCurrentPage('about');
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      ABOUT MARS
                  </a>
              </li>
              <li>
                  <a
                      href="#cydonia"
                      className={`${currentPage === 'cydonia' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'cydonia' ? 'page' : undefined}
                      onClick={() => {
                          setCurrentPage('cydonia');
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      ABOUT CYDONIA
                  </a>
              </li>
              <li>
                  <a
                      href="#community"
                      onClick={() => {
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      COMMUNITY
                  </a>
              </li>
              <li>
                  <a
                      href="#forum"
                      className={`${currentPage === 'forum' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'forum' ? 'page' : undefined}
                      onClick={() => {
                          setCurrentPage('forum');
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      FORUM
                  </a>
              </li>
              <li>
                  <a
                      href="#links"
                      className={`${currentPage === 'links' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'links' ? 'page' : undefined}
                      onClick={() => {
                          setCurrentPage('links');
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      LINKS
                  </a>
              </li>
              <li>
                  <a
                      href="#live"
                      onClick={() => {
                          window.scrollTo(0, 0);
                          closeMobileMenu();
                      }}
                  >
                      LIVE FEED
                  </a>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// PropTypes validation
Header.propTypes = {
    currentPage: PropTypes.string.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

// Export memoized component to prevent unnecessary re-renders
export default withMemo(Header);
