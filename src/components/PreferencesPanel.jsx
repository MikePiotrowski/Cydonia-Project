import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import './PreferencesPanel.css';

const PreferencesPanel = () => {
  const { userPreferences, updatePreferences } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  
  const handleAnimationsToggle = () => {
    updatePreferences({ animations: !userPreferences.animations });
  };
  
  const handleContrastToggle = () => {
    updatePreferences({ highContrast: !userPreferences.highContrast });
  };
  
  const handleFontSizeChange = (size) => {
    updatePreferences({ fontSize: size });
  };
  
  return (
    <div className={`preferences-panel ${isOpen ? 'open' : ''}`}>
      <button 
        className="preferences-toggle" 
        onClick={togglePanel}
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        <i className="fas fa-universal-access"></i>
      </button>
      
      <div className="preferences-content">
        <h3>Accessibility Options</h3>
        
        <div className="preference-option">
          <label htmlFor="animations-toggle">Animations</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="animations-toggle" 
              checked={userPreferences.animations}
              onChange={handleAnimationsToggle}
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="preference-option">
          <label htmlFor="contrast-toggle">High Contrast</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="contrast-toggle" 
              checked={userPreferences.highContrast}
              onChange={handleContrastToggle}
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="preference-option">
          <label>Font Size</label>
          <div className="font-size-options">
            <button 
              className={userPreferences.fontSize === 'small' ? 'active' : ''}
              onClick={() => handleFontSizeChange('small')}
            >
              A<span className="visually-hidden">Small</span>
            </button>
            <button 
              className={userPreferences.fontSize === 'medium' ? 'active' : ''}
              onClick={() => handleFontSizeChange('medium')}
            >
              A<span className="visually-hidden">Medium</span>
            </button>
            <button 
              className={userPreferences.fontSize === 'large' ? 'active' : ''}
              onClick={() => handleFontSizeChange('large')}
            >
              A<span className="visually-hidden">Large</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPanel;