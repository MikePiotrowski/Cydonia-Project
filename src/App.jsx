import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import PreferencesPanel from './components/PreferencesPanel';
import { useAppContext } from './context/AppContext';
import './App.css';

function App() {
  // Get theme from context
  const { theme } = useAppContext();

  // State for managing scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${theme}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Header />

      <main id="main-content">
        <Showcase />

        {/* More sections will be added as components */}
        <section id="cydonia-info" className="section">
          <div className="container">
            <h2 className="section-title">Exploring Cydonia's Mysteries</h2>
            <p className="section-description">
              The Cydonia region on Mars has captured the imagination of scientists and the public 
              since the discovery of unusual formations that appear artificial in nature.
            </p>
          </div>
        </section>

        <Footer />
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
