import React from 'react';
import { useAppContext } from '../context/AppContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
  
  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme} 
        className={`theme-toggle-btn ${theme}`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;