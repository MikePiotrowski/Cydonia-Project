import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AppProvider} from './context/AppContext';
import {ThemeProvider} from './context/ThemeContext';
import {PreferencesProvider} from './context/PreferencesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
          <PreferencesProvider>
              <AppProvider>
                  <App/>
              </AppProvider>
          </PreferencesProvider>
      </ThemeProvider>
  </React.StrictMode>
);
