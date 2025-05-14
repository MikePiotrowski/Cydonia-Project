import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  // Theme state (light/dark)
  const [theme, setTheme] = useState('light');
  
  // User preferences
  const [userPreferences, setUserPreferences] = useState({
    animations: true,
    highContrast: false,
    fontSize: 'medium', // small, medium, large
  });
  
  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  // Function to update user preferences
  const updatePreferences = (preferences) => {
    const newPreferences = { ...userPreferences, ...preferences };
    setUserPreferences(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
    
    // Apply preferences to document
    document.documentElement.classList.toggle('high-contrast', newPreferences.highContrast);
    document.documentElement.classList.toggle('no-animations', !newPreferences.animations);
    document.documentElement.setAttribute('data-font-size', newPreferences.fontSize);
  };
  
  // Load saved preferences on initial render
  useEffect(() => {
    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Load user preferences
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences);
      setUserPreferences(parsedPreferences);
      
      // Apply preferences to document
      document.documentElement.classList.toggle('high-contrast', parsedPreferences.highContrast);
      document.documentElement.classList.toggle('no-animations', !parsedPreferences.animations);
      document.documentElement.setAttribute('data-font-size', parsedPreferences.fontSize);
    }
  }, []);
  
  // Context value
  const contextValue = {
    theme,
    toggleTheme,
    userPreferences,
    updatePreferences,
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;