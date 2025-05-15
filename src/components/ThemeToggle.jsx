import React, {useEffect, useState} from 'react';
import {useAppContext} from '../context/AppContext';
import './ThemeToggle.css';
import withMemo from '../hoc/withMemo';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
    const [isAnimating, setIsAnimating] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Handle theme toggle with animation
    const handleToggle = () => {
        setIsAnimating(true);
        toggleTheme();

        // Show tooltip briefly when theme changes
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
    };

    // Reset animation state after animation completes
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

  return (
    <div className="theme-toggle">
      <button
          onClick={handleToggle}
          className={`theme-toggle-btn ${theme} ${isAnimating ? 'animating' : ''}`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
      >
        {theme === 'light' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </button>

        {showTooltip && (
            <div className="theme-tooltip">
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </div>
        )}
    </div>
  );
};

// Export memoized component to prevent unnecessary re-renders
export default withMemo(ThemeToggle);
