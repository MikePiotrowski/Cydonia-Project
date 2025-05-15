import React, {lazy, Suspense, useCallback, useEffect, useState} from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import {useAppContext} from './context/AppContext';
import useScrollPosition from './hooks/useScrollPosition';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import './App.css';

// Lazy load larger components
const Community = lazy(() => import('./components/Community'));
const Forum = lazy(() => import('./components/Forum'));
const AboutMars = lazy(() => import('./components/AboutMars'));
const AboutCydonia = lazy(() => import('./components/AboutCydonia'));
const Links = lazy(() => import('./components/Links'));

// Lazy load UI components that are not critical for initial render
const ThemeToggle = lazy(() => import('./components/ThemeToggle'));
const PreferencesPanel = lazy(() => import('./components/PreferencesPanel'));
const ShortcutsHelp = lazy(() => import('./components/ShortcutsHelp'));

function App() {
    // Get theme and user preferences from context
    const {theme, userPreferences, toggleTheme, updatePreferences} = useAppContext();

    // State for managing current page
    const [currentPage, setCurrentPage] = useState('home');

    // State for keyboard shortcuts help dialog
    const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);

    // Use custom hook for scroll position
    const scrollPosition = useScrollPosition();

    // Navigation handler
    const navigateTo = useCallback((page) => {
        setCurrentPage(page);
        window.location.hash = page;
        window.scrollTo(0, 0);
    }, []);

    // Toggle shortcuts help dialog
    const toggleShortcutsHelp = useCallback(() => {
        setShowShortcutsHelp(prev => !prev);
    }, []);

    // Toggle font size
    const cycleFontSize = useCallback(() => {
        const sizes = ['small', 'medium', 'large'];
        const currentIndex = sizes.indexOf(userPreferences.fontSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        updatePreferences({fontSize: sizes[nextIndex]});
    }, [userPreferences.fontSize, updatePreferences]);

    // Toggle animations
    const toggleAnimations = useCallback(() => {
        updatePreferences({animations: !userPreferences.animations});
    }, [userPreferences.animations, updatePreferences]);

    // Toggle high contrast
    const toggleHighContrast = useCallback(() => {
        updatePreferences({highContrast: !userPreferences.highContrast});
    }, [userPreferences.highContrast, updatePreferences]);

    // Scroll to top
    const scrollToTop = useCallback(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    // Register keyboard shortcuts
    useKeyboardShortcuts({
        'Alt+t': toggleTheme,
        'Alt+h': () => navigateTo('home'),
        'Alt+a': () => navigateTo('about'),
        'Alt+c': () => navigateTo('cydonia'),
        'Alt+f': () => navigateTo('forum'),
        'Alt+l': () => navigateTo('links'),
        'Alt+s': scrollToTop,
        'Alt+?': toggleShortcutsHelp,
        'Alt+z': cycleFontSize,
        'Alt+x': toggleAnimations,
        'Alt+v': toggleHighContrast
    });

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
          <Suspense fallback={null}>
              <ThemeToggle/>
          </Suspense>

      {/* Accessibility preferences panel */}
          <Suspense fallback={null}>
              <PreferencesPanel/>
          </Suspense>

          {/* Keyboard shortcuts help dialog */}
          <Suspense fallback={null}>
              <ShortcutsHelp
                  isOpen={showShortcutsHelp}
                  onClose={toggleShortcutsHelp}
              />
          </Suspense>

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

          {/* Keyboard shortcuts indicator */}
          <button
              className="keyboard-shortcuts-indicator"
              onClick={toggleShortcutsHelp}
              aria-label="Show keyboard shortcuts"
              title="Show keyboard shortcuts (Alt+?)"
          >
              <i className="fas fa-keyboard"></i>
          </button>
    </div>
  );
}

export default App;
