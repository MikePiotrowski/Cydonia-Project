import React, {createContext, useContext, useEffect, useState} from 'react';

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
      // Check for system preference and saved theme
    const savedTheme = localStorage.getItem('theme');
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      // Determine which theme to use
      let initialTheme;
    if (savedTheme) {
        // Use saved theme if available
        initialTheme = savedTheme;
    } else if (prefersDarkMode) {
        // Use dark mode if system prefers it
        initialTheme = 'dark';
    } else {
        // Default to light mode
        initialTheme = 'light';
    }

      // Apply the theme
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);

      // Add listener for system preference changes
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (event) => {
          // Only change theme if user hasn't set a preference
          if (!localStorage.getItem('theme')) {
              const newTheme = event.matches ? 'dark' : 'light';
              setTheme(newTheme);
              document.documentElement.setAttribute('data-theme', newTheme);
          }
      };

      // Add event listener
      if (darkModeMediaQuery.addEventListener) {
          darkModeMediaQuery.addEventListener('change', handleSystemThemeChange);
      } else if (darkModeMediaQuery.addListener) {
          // For older browsers
          darkModeMediaQuery.addListener(handleSystemThemeChange);
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

      // Cleanup function to remove event listener
      return () => {
          if (darkModeMediaQuery.removeEventListener) {
              darkModeMediaQuery.removeEventListener('change', handleSystemThemeChange);
          } else if (darkModeMediaQuery.removeListener) {
              // For older browsers
              darkModeMediaQuery.removeListener(handleSystemThemeChange);
          }
      };
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
