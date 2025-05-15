# Preparing for React Server Components

## Overview

This document provides guidelines for preparing the Mars Cydonia Connection website for React Server Components (RSC).
React Server Components allow parts of your React application to render on the server, reducing the JavaScript bundle
size sent to the client and improving performance.

## Component Classification

Based on our analysis of the current codebase, we've classified components into three categories:

### Server Components

These components are good candidates for server components because they primarily render static content with minimal
interactivity:

- **AboutMars**: Displays static information about Mars
- **AboutCydonia**: Displays static information about the Cydonia region
- **Links**: Displays static links to external resources
- **Footer**: Displays static footer content

### Client Components

These components should remain client components because they require interactivity, state management, or access to
browser APIs:

- **Forum**: Heavy interactivity with forms, filtering, and state management
- **Header**: Navigation and state management
- **ThemeToggle**: Interactive UI element that changes theme
- **PreferencesPanel**: Interactive UI element for user preferences
- **ShortcutsHelp**: Interactive dialog for keyboard shortcuts
- **App**: Main component with routing logic

### Hybrid Components

These components might benefit from a hybrid approach, where parts of the component are server components and parts are
client components:

- **Community**: May have both static content and interactive elements
- **Showcase**: May have both static content and interactive elements
- **ErrorBoundary**: Error handling component that could be adapted for RSC
- **LoadingFallback**: Loading indicator that could be adapted for RSC

## File Naming Convention

To prepare for React Server Components, we recommend adopting the following file naming convention:

- **Server Components**: `ComponentName.server.jsx`
- **Client Components**: `ComponentName.client.jsx`
- **Shared Types/Utilities**: `ComponentName.shared.js`

This convention makes it clear which components are intended to run on the server and which on the client.

## Implementation Guidelines

### 1. Separate Data Fetching from UI

Move data fetching logic out of client components and into server components:

```jsx
// Before (in a client component)
function ProductPage() {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch('/api/products/123')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);
  
  if (!product) return <Loading />;
  
  return <ProductDetails product={product} />;
}

// After (with server components)
// ProductPage.server.jsx
async function ProductPage() {
  const product = await fetch('/api/products/123').then(res => res.json());
  return <ProductDetails product={product} />;
}

// ProductDetails.client.jsx
function ProductDetails({ product }) {
  // Interactive UI elements
  return <div>...</div>;
}
```

### 2. Handle Client-Side State

When a component needs both server rendering and client-side state:

```jsx
// AboutMars.server.jsx
import AboutMarsClient from './AboutMars.client';

export default function AboutMars() {
  // Fetch data on the server
  const marsData = fetchMarsData();
  
  // Pass data to client component
  return <AboutMarsClient initialData={marsData} />;
}

// AboutMars.client.jsx
export default function AboutMarsClient({ initialData }) {
  // Client-side state for theme
  const { theme } = useAppContext();
  
  return (
    <section className={`about-mars-section ${theme}`}>
      {/* Render using initialData */}
    </section>
  );
}
```

### 3. Handle Context

Context is a client-side feature. When server components need access to context values:

```jsx
// App.client.jsx
function App() {
  const contextValue = useAppContext();
  
  return (
    <div>
      <ServerComponent contextValue={contextValue} />
    </div>
  );
}

// ServerComponent.server.jsx
export default function ServerComponent({ contextValue }) {
  // Use contextValue as a prop instead of accessing context directly
}
```

## Migration Strategy

1. **Start with Static Content**: Begin by converting the most static components (AboutMars, AboutCydonia, Links,
   Footer)
2. **Create Wrapper Components**: For components that need context, create client wrappers
3. **Refactor Data Fetching**: Move data fetching to server components
4. **Update Build Configuration**: Configure the build system to support RSC
5. **Test Thoroughly**: Ensure the application works correctly after each conversion

## Technical Requirements

To fully implement React Server Components, we'll need to:

1. **Framework Support**: Consider migrating to Next.js or another framework with built-in RSC support
2. **Build Configuration**: Update the build configuration to handle .server.jsx and .client.jsx files
3. **Server Environment**: Set up a Node.js server environment for server components
4. **Data Fetching**: Implement server-side data fetching strategies

## Conclusion

Preparing for React Server Components is a significant architectural change that should be approached incrementally. By
following the guidelines in this document, we can begin separating client and server concerns in our components, making
the eventual migration to RSC smoother.