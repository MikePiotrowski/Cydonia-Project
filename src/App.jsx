import React, {lazy, Suspense, useEffect, useState} from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import PreferencesPanel from './components/PreferencesPanel';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import {useAppContext} from './context/AppContext';
import useScrollPosition from './hooks/useScrollPosition';
import './App.css';

// Lazy load larger components
const Community = lazy(() => import('./components/Community'));
const Forum = lazy(() => import('./components/Forum'));
const AboutMars = lazy(() => import('./components/AboutMars'));
const AboutCydonia = lazy(() => import('./components/AboutCydonia'));
const Links = lazy(() => import('./components/Links'));

function App() {
    // Get theme and user preferences from context
    const {theme, userPreferences} = useAppContext();

    // State for managing current page
    const [currentPage, setCurrentPage] = useState('home');

    // Use custom hook for scroll position
    const scrollPosition = useScrollPosition();

    // Effect to handle hash changes for navigation
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === 'forum') {
                setCurrentPage('forum');
                window.scrollTo(0, 0); // Scroll to top when navigating to forum
            } else if (hash === 'about') {
                setCurrentPage('about');
                window.scrollTo(0, 0); // Scroll to top when navigating to about
            } else if (hash === 'cydonia') {
                setCurrentPage('cydonia');
                window.scrollTo(0, 0); // Scroll to top when navigating to cydonia
            } else if (hash === 'links') {
                setCurrentPage('links');
                window.scrollTo(0, 0); // Scroll to top when navigating to links
            } else {
                setCurrentPage('home');
            }
        };

        // Set initial page based on hash
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

  return (
      <div className={`App ${theme} ${userPreferences.highContrast ? 'high-contrast' : ''}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>

        <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      <main id="main-content">
          <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
              <Suspense fallback={<LoadingFallback/>}>
                  {currentPage === 'home' ? (
                      <>
                          <Showcase/>

                          {/* More sections will be added as components */}
                          <section id="cydonia-info" className="section">
                              <div className="container">
                                  <h2 className="section-title">Exploring Cydonia's Mysteries</h2>
                                  <p className="section-description">
                                      The Cydonia region on Mars has captured the imagination of scientists and the
                                      public
                                      since the discovery of unusual formations that appear artificial in nature.
                                  </p>
                              </div>
                          </section>

                          {/* Community Section */}
                          <Community/>
                      </>
                  ) : currentPage === 'forum' ? (
                      <Forum/>
                  ) : currentPage === 'about' ? (
                      <AboutMars/>
                  ) : currentPage === 'cydonia' ? (
                      <AboutCydonia/>
                  ) : currentPage === 'links' ? (
                      <Links/>
                  ) : null}
              </Suspense>

              <Footer/>
          </ErrorBoundary>
      </main>

      {/* Theme toggle button */}
      <ThemeToggle />

      {/* Accessibility preferences panel */}
      <PreferencesPanel />

      {/* Scroll to top button - appears when scrolling down */}
      {scrollPosition > 300 && (
        <button 
          className="scroll-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
