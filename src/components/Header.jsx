import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import useScrollPosition from '../hooks/useScrollPosition';
import withMemo from '../hoc/withMemo';

const Header = ({currentPage, setCurrentPage}) => {
    // Use custom hook for scroll position
    const scrollPosition = useScrollPosition();
    const isScrolled = scrollPosition > 50;

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
                      onClick={() => {
                          setCurrentPage('home');
                          window.scrollTo(0, 0);
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
                      }}
                  >
                      ABOUT CYDONIA
                  </a>
              </li>
              <li><a href="#community" onClick={() => window.scrollTo(0, 0)}>COMMUNITY</a></li>
              <li>
                  <a
                      href="#forum"
                      className={`${currentPage === 'forum' ? 'highlight current' : ''}`}
                      aria-current={currentPage === 'forum' ? 'page' : undefined}
                      onClick={() => {
                          setCurrentPage('forum');
                          window.scrollTo(0, 0);
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
                      }}
                  >
                      LINKS
                  </a>
              </li>
              <li><a href="#live" onClick={() => window.scrollTo(0, 0)}>LIVE FEED</a></li>
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
