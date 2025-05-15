import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import {useThemeContext} from './ThemeContext';
import {usePreferencesContext} from './PreferencesContext';

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
    // Get values from more focused contexts
    const {theme, toggleTheme} = useThemeContext();
    const {userPreferences, updatePreferences} = usePreferencesContext();

    // Context value - maintains the same API for backward compatibility
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

// PropTypes validation
AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContext;
