# Component Library Documentation Guide

## Overview

This document provides guidelines for documenting the Mars Cydonia Connection component library. A well-documented
component library improves developer experience, ensures consistent usage, and makes the codebase more maintainable.

## Documentation Structure

Each component should have its own documentation file in a `docs` directory within the component's folder. For example:

```
src/
  components/
    Header/
      Header.jsx
      Header.css
      docs/
        Header.md
```

## Component Documentation Template

Use the following template for documenting components:

```markdown
# ComponentName

## Description
Brief description of the component's purpose and functionality.

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| prop1 | string | 'default' | Yes | Description of prop1 |
| prop2 | number | 0 | No | Description of prop2 |
| prop3 | func | () => {} | No | Callback function for specific event |
| prop4 | oneOf(['a', 'b']) | 'a' | No | One of a set of specific values |
| prop5 | shape({ key: string }) | - | Yes | Object with specific shape |

## Usage Examples

### Basic Usage
```jsx
import ComponentName from './components/ComponentName';

<ComponentName prop1="value" prop2={42} />
```

### Advanced Usage

```jsx
import ComponentName from './components/ComponentName';

<ComponentName
  prop1="value"
  prop2={42}
  prop3={(event) => console.log('Event triggered', event)}
  prop5={{ key: 'value' }}
/>
```

## States and Variations

### Default State

Description and screenshot of the default state.

### Alternative States

Description and screenshots of alternative states (hover, active, disabled, etc.).

### Responsive Behavior

Description of how the component behaves at different screen sizes.

## Accessibility

Accessibility considerations for this component:

- Keyboard navigation
- Screen reader support
- ARIA attributes
- Color contrast

## Dependencies

List of dependencies this component relies on:

- Other components
- Context providers
- External libraries

## Implementation Notes

Any important implementation details, gotchas, or things to be aware of when using or modifying this component.

```

## Example Component Documentation

### Header Component Documentation

```markdown
# Header

## Description
The Header component serves as the main navigation for the Mars Cydonia Connection website. It includes the site logo, main navigation links, and a mobile menu for smaller screens.

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| currentPage | string | - | Yes | The current active page ('home', 'about', 'cydonia', 'forum', 'links') |
| setCurrentPage | func | - | Yes | Function to update the current page when navigation links are clicked |

## Usage Example

```jsx
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <Header 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage} 
    />
  );
}
```

## States and Variations

### Default State

The header displays the site logo on the left and navigation links on the right.

### Scrolled State

When the user scrolls down the page, the header becomes more compact with a slight background blur effect.

### Mobile State

On mobile devices, the navigation links collapse into a hamburger menu that can be toggled open and closed.

## Accessibility

- The navigation is wrapped in a `<nav>` element with appropriate ARIA roles
- The mobile menu button includes `aria-expanded` and `aria-controls` attributes
- The current page is indicated with `aria-current="page"`
- The mobile menu can be closed with the Escape key

## Dependencies

- useScrollPosition hook: Used to detect scroll position for the scrolled state
- useAppContext: Used to access the current theme

## Implementation Notes

- The Header component is memoized using the withMemo HOC to prevent unnecessary re-renders
- The mobile menu includes staggered animations for menu items when opening

```

## Style Guide

### Component Design Principles

1. **Consistency**: Components should have consistent APIs, naming conventions, and behavior
2. **Composability**: Components should be composable and reusable in different contexts
3. **Accessibility**: Components should be accessible by default
4. **Responsiveness**: Components should be responsive and work well on all screen sizes
5. **Performance**: Components should be optimized for performance

### Naming Conventions

- **Component Names**: PascalCase (e.g., `Header`, `ThemeToggle`)
- **Props**: camelCase (e.g., `currentPage`, `setCurrentPage`)
- **Event Handlers**: camelCase, prefixed with 'on' (e.g., `onClick`, `onSubmit`)
- **CSS Classes**: kebab-case (e.g., `header-container`, `mobile-menu`)

### Code Style

- Use functional components with hooks
- Use destructuring for props
- Use PropTypes for type checking
- Use default props where appropriate
- Use semantic HTML elements
- Use CSS modules or a consistent CSS naming convention

### Component Structure

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2, prop3 }) => {
  // Component logic here
  
  return (
    <div className="component-name">
      {/* Component JSX here */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
  prop3: PropTypes.func,
};

ComponentName.defaultProps = {
  prop2: 0,
  prop3: () => {},
};

export default ComponentName;
```

## Setting Up Storybook (Optional)

For a more interactive component documentation, consider setting up Storybook:

1. Install Storybook:

```bash
npx storybook init
```

2. Create stories for each component:

```jsx
// src/components/Header/Header.stories.jsx
import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    currentPage: {
      control: {
        type: 'select',
        options: ['home', 'about', 'cydonia', 'forum', 'links'],
      },
    },
    setCurrentPage: { action: 'page changed' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 'home',
};

export const AboutPage = Template.bind({});
AboutPage.args = {
  currentPage: 'about',
};

export const Mobile = Template.bind({});
Mobile.args = {
  currentPage: 'home',
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
```

3. Run Storybook:

```bash
npm run storybook
```

## Implementation Plan

1. **Create Documentation Structure**: Set up the documentation directory structure
2. **Document Core Components**: Start with Header, Footer, and Showcase
3. **Document Interactive Components**: Document Forum, ThemeToggle, and PreferencesPanel
4. **Document Context Providers**: Document AppContext, ThemeContext, and PreferencesContext
5. **Document Custom Hooks**: Document useScrollPosition and useKeyboardShortcuts
6. **Create Style Guide**: Document design principles, naming conventions, and code style
7. **Set Up Storybook (Optional)**: For interactive component documentation

## Conclusion

A well-documented component library will improve developer experience, ensure consistent usage, and make the codebase
more maintainable. By following this guide, you can create comprehensive documentation for the Mars Cydonia Connection
component library.