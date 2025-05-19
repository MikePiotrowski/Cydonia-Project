# Comprehensive Testing Guide

## Overview

This document provides guidelines for implementing a comprehensive testing suite for the Mars Cydonia Connection website
using Jest and React Testing Library. A robust testing strategy helps ensure code quality, prevents regressions, and
makes the codebase more maintainable.

## Testing Setup

### Installing Dependencies

Add the following dependencies to your project:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### Configuration

Create a `jest.config.js` file in the root directory:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.d.ts',
    '!src/main.jsx',
    '!src/index.js',
    '!src/reportWebVitals.js',
    '!src/setupTests.js'
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70
    }
  }
};
```

Create a `src/setupTests.js` file:

```javascript
import '@testing-library/jest-dom';
```

Create mock files for CSS and assets:

```javascript
// src/__mocks__/fileMock.js
module.exports = 'test-file-stub';

// src/__mocks__/styleMock.js
module.exports = {};
```

### Update package.json

Add the following scripts to your package.json:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

## Testing Strategy

We'll implement three types of tests:

1. **Unit Tests**: Test individual components in isolation
2. **Integration Tests**: Test interactions between components
3. **Snapshot Tests**: Ensure UI doesn't change unexpectedly

### Testing Priorities

Focus on testing these key areas:

1. **Core Components**: Header, Footer, Showcase
2. **Interactive Components**: Forum, ThemeToggle, PreferencesPanel
3. **Context Providers**: AppContext, ThemeContext, PreferencesContext
4. **Custom Hooks**: useScrollPosition, useKeyboardShortcuts
5. **Utility Functions**: Any helper functions in the utils directory

## Unit Testing Components

### Example: Testing the Header Component

```javascript
// src/components/__tests__/Header.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '../../context/AppContext';
import Header from '../Header';

// Mock the context values
jest.mock('../../context/AppContext', () => ({
  useAppContext: () => ({
    theme: 'light',
    toggleTheme: jest.fn()
  }),
  AppProvider: ({ children }) => <div>{children}</div>
}));

describe('Header Component', () => {
  const mockProps = {
    currentPage: 'home',
    setCurrentPage: jest.fn()
  };

  test('renders correctly', () => {
    render(<Header {...mockProps} />);
    
    // Check if the logo is rendered
    expect(screen.getByText(/Mars Cydonia Connection/i)).toBeInTheDocument();
    
    // Check if navigation links are rendered
    expect(screen.getByText(/HOME/i)).toBeInTheDocument();
    expect(screen.getByText(/ABOUT MARS/i)).toBeInTheDocument();
    expect(screen.getByText(/ABOUT CYDONIA/i)).toBeInTheDocument();
    expect(screen.getByText(/FORUM/i)).toBeInTheDocument();
    expect(screen.getByText(/LINKS/i)).toBeInTheDocument();
  });

  test('highlights current page in navigation', () => {
    render(<Header {...mockProps} />);
    
    // The "home" link should have the "current" class
    const homeLink = screen.getByText(/HOME/i).closest('a');
    expect(homeLink).toHaveClass('highlight');
    expect(homeLink).toHaveClass('current');
  });

  test('calls setCurrentPage when a navigation link is clicked', () => {
    render(<Header {...mockProps} />);
    
    // Click on the "ABOUT MARS" link
    fireEvent.click(screen.getByText(/ABOUT MARS/i));
    
    // Check if setCurrentPage was called with 'about'
    expect(mockProps.setCurrentPage).toHaveBeenCalledWith('about');
  });

  test('mobile menu toggle works correctly', () => {
    render(<Header {...mockProps} />);
    
    // Find the mobile menu button
    const menuButton = screen.getByLabelText(/Open menu/i);
    
    // Initially, the menu should not be active
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('active');
    
    // Click the menu button
    fireEvent.click(menuButton);
    
    // Now the menu should be active
    expect(nav).toHaveClass('active');
    
    // Click again to close
    fireEvent.click(menuButton);
    
    // Menu should be closed again
    expect(nav).not.toHaveClass('active');
  });
});
```

### Example: Testing the ThemeToggle Component

```javascript
// src/components/__tests__/ThemeToggle.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';
import { useAppContext } from '../../context/AppContext';

// Mock the context
jest.mock('../../context/AppContext', () => ({
  useAppContext: jest.fn()
}));

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Reset the mock before each test
    useAppContext.mockReset();
  });

  test('renders correctly in light mode', () => {
    // Mock the context for light mode
    useAppContext.mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn()
    });

    render(<ThemeToggle />);
    
    // Should show moon icon in light mode
    expect(screen.getByLabelText(/Switch to dark theme/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('light');
  });

  test('renders correctly in dark mode', () => {
    // Mock the context for dark mode
    useAppContext.mockReturnValue({
      theme: 'dark',
      toggleTheme: jest.fn()
    });

    render(<ThemeToggle />);
    
    // Should show sun icon in dark mode
    expect(screen.getByLabelText(/Switch to light theme/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('dark');
  });

  test('calls toggleTheme when clicked', () => {
    // Mock the context with a spy function
    const mockToggleTheme = jest.fn();
    useAppContext.mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme
    });

    render(<ThemeToggle />);
    
    // Click the toggle button
    fireEvent.click(screen.getByRole('button'));
    
    // Check if toggleTheme was called
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
```

## Testing Custom Hooks

### Example: Testing useScrollPosition Hook

```javascript
// src/hooks/__tests__/useScrollPosition.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useScrollPosition from '../useScrollPosition';
import { throttle } from '../../utils/eventUtils';

// Mock the throttle function
jest.mock('../../utils/eventUtils', () => ({
  throttle: jest.fn(fn => fn)
}));

describe('useScrollPosition Hook', () => {
  beforeEach(() => {
    // Reset the mock and window.scrollY
    throttle.mockClear();
    window.scrollY = 0;
  });

  test('returns initial scroll position of 0', () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current).toBe(0);
  });

  test('updates scroll position when window is scrolled', () => {
    const { result } = renderHook(() => useScrollPosition());
    
    // Simulate scrolling
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });
    
    expect(result.current).toBe(100);
  });

  test('uses throttle function with correct delay', () => {
    const customDelay = 200;
    renderHook(() => useScrollPosition(customDelay));
    
    expect(throttle).toHaveBeenCalledWith(expect.any(Function), customDelay);
  });

  test('removes event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    
    const { unmount } = renderHook(() => useScrollPosition());
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    
    removeEventListenerSpy.mockRestore();
  });
});
```

## Integration Testing

### Example: Testing App Component with Context

```javascript
// src/App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import { PreferencesProvider } from './context/PreferencesContext';

// Mock the lazy-loaded components
jest.mock('./components/Community', () => () => <div data-testid="community">Community Component</div>);
jest.mock('./components/Forum', () => () => <div data-testid="forum">Forum Component</div>);
jest.mock('./components/AboutMars', () => () => <div data-testid="about-mars">About Mars Component</div>);
jest.mock('./components/AboutCydonia', () => () => <div data-testid="about-cydonia">About Cydonia Component</div>);
jest.mock('./components/Links', () => () => <div data-testid="links">Links Component</div>);

describe('App Component Integration', () => {
  const renderWithProviders = (ui) => {
    return render(
      <ThemeProvider>
        <PreferencesProvider>
          <AppProvider>
            {ui}
          </AppProvider>
        </PreferencesProvider>
      </ThemeProvider>
    );
  };

  test('renders home page by default', async () => {
    renderWithProviders(<App />);
    
    // Home page should show Showcase and Community
    expect(await screen.findByTestId('community')).toBeInTheDocument();
  });

  test('navigates to different pages', async () => {
    renderWithProviders(<App />);
    
    // Navigate to Forum
    fireEvent.click(screen.getByText(/FORUM/i));
    expect(await screen.findByTestId('forum')).toBeInTheDocument();
    
    // Navigate to About Mars
    fireEvent.click(screen.getByText(/ABOUT MARS/i));
    expect(await screen.findByTestId('about-mars')).toBeInTheDocument();
    
    // Navigate to About Cydonia
    fireEvent.click(screen.getByText(/ABOUT CYDONIA/i));
    expect(await screen.findByTestId('about-cydonia')).toBeInTheDocument();
    
    // Navigate to Links
    fireEvent.click(screen.getByText(/LINKS/i));
    expect(await screen.findByTestId('links')).toBeInTheDocument();
    
    // Navigate back to Home
    fireEvent.click(screen.getByText(/HOME/i));
    expect(await screen.findByTestId('community')).toBeInTheDocument();
  });

  test('keyboard shortcuts work correctly', async () => {
    renderWithProviders(<App />);
    
    // Use Alt+f shortcut to navigate to Forum
    fireEvent.keyDown(document, { key: 'f', altKey: true });
    expect(await screen.findByTestId('forum')).toBeInTheDocument();
    
    // Use Alt+a shortcut to navigate to About Mars
    fireEvent.keyDown(document, { key: 'a', altKey: true });
    expect(await screen.findByTestId('about-mars')).toBeInTheDocument();
  });
});
```

## Snapshot Testing

### Example: Snapshot Test for Footer Component

```javascript
// src/components/__tests__/Footer.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
```

## Test Coverage

Aim for at least 70% test coverage across the codebase. Use the following command to generate a coverage report:

```bash
npm run test:coverage
```

The report will show which parts of the code are covered by tests and which parts need more testing.

## Continuous Integration

Set up GitHub Actions to run tests automatically on every pull request and push to the main branch. Create a
`.github/workflows/test.yml` file:

```yaml
name: Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16.x'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
    - name: Generate coverage report
      run: npm run test:coverage
```

## Implementation Plan

1. **Set up the testing environment**: Install dependencies and configure Jest
2. **Create test files for core components**: Start with Header, Footer, and Showcase
3. **Test custom hooks**: Write tests for useScrollPosition and useKeyboardShortcuts
4. **Add integration tests**: Test the App component with context providers
5. **Add snapshot tests**: Create snapshots for stable components
6. **Set up continuous integration**: Configure GitHub Actions for automated testing
7. **Improve test coverage**: Identify and test uncovered code paths

## Conclusion

A comprehensive testing suite will help ensure the quality and maintainability of the Mars Cydonia Connection website.
By following this guide, you can implement a robust testing strategy that covers unit tests, integration tests, and
snapshot tests for your React components.