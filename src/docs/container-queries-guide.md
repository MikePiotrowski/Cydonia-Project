# Container Queries and Advanced Responsive Techniques

## Overview

This document provides guidelines for implementing container queries and other advanced responsive techniques in the
Mars Cydonia Connection website. These modern CSS features allow for more component-based responsive design, making
components adapt to their container's size rather than just the viewport size.

## Container Queries

Container queries allow components to adapt their layout and styling based on the size of their parent container, rather
than the viewport. This is particularly useful for reusable components that may appear in different contexts throughout
the application.

### Browser Support

Container queries are supported in all modern browsers (Chrome, Firefox, Safari, Edge) as of 2023. For older browsers,
we can use feature detection and provide fallbacks.

### Implementation

To use container queries:

1. Define a container:

```css
.container {
  container-type: inline-size;
  container-name: content;
}
```

2. Query the container size:

```css
@container content (min-width: 700px) {
  .component {
    /* Styles for when container is at least 700px wide */
    display: flex;
    gap: 2rem;
  }
}

@container content (max-width: 699px) {
  .component {
    /* Styles for when container is less than 700px wide */
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

### Components That Would Benefit from Container Queries

Based on our analysis of the codebase, these components would benefit from container queries:

1. **mars-info-card** in AboutMars: These cards could adapt their layout based on their container width, not just the
   viewport.

2. **forum-post** in Forum: Posts could adjust their layout based on the available space in the forum-main container.

3. **timeline-item** in AboutMars: Timeline items could change from horizontal to vertical layout based on their
   container.

4. **image-gallery** in AboutMars: The image gallery could adjust the number of columns based on its container width.

## Fluid Typography

Fluid typography allows text to scale smoothly between minimum and maximum sizes based on the viewport width, creating
more natural responsive text.

### Implementation

Use the CSS `clamp()` function to create fluid typography:

```css
:root {
  --fluid-type-min-size: 1rem;
  --fluid-type-max-size: 1.5rem;
  --fluid-type-min-screen: 320px;
  --fluid-type-max-screen: 1200px;
}

body {
  font-size: clamp(
    var(--fluid-type-min-size),
    calc(var(--fluid-type-min-size) + (var(--fluid-type-max-size) - var(--fluid-type-min-size)) * ((100vw - var(--fluid-type-min-screen)) / (var(--fluid-type-max-screen) - var(--fluid-type-min-screen)))),
    var(--fluid-type-max-size)
  );
}
```

For a simpler approach:

```css
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
```

### Where to Apply Fluid Typography

- Section headings (section-title)
- Component headings (h3, h4)
- Body text in responsive containers
- Navigation items

## Aspect Ratio Based Layouts

The `aspect-ratio` property allows elements to maintain a specific aspect ratio as they resize, which is particularly
useful for responsive images and videos.

### Implementation

```css
.image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Where to Apply Aspect Ratio

- Image galleries
- Video containers
- Mars terrain viewer
- Interactive maps

## Parent Selector (:has())

The `:has()` pseudo-class allows selecting elements based on their children, enabling more contextual styling.

### Implementation

```css
/* Style a container differently when it contains an image */
.container:has(img) {
  padding: 1rem;
  background-color: var(--background-alt);
}

/* Adjust layout when a form has validation errors */
.form-group:has(.error-message) {
  border-left: 3px solid var(--primary-color);
  padding-left: 1rem;
}
```

### Where to Apply Parent Selectors

- Form validation states
- Conditional styling based on content
- Interactive components with different states

## Implementation Strategy

1. **Start with Container Queries**: Implement container queries in the most reusable components first.
2. **Add Fluid Typography**: Update the typography system to use fluid sizing.
3. **Refactor Media Queries**: Replace some media queries with container queries where appropriate.
4. **Add Feature Detection**: Ensure graceful fallbacks for browsers that don't support these features.

## Example Implementation: mars-info-card

Here's how we could refactor the mars-info-card component to use container queries:

```css
/* Before */
.mars-info-card {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px var(--card-shadow);
}

@media (max-width: 768px) {
  .mars-info-card {
    padding: 1rem;
  }
  
  .mars-info-card h3 {
    font-size: 1.5rem;
  }
}

/* After */
.mars-info-grid {
  container-type: inline-size;
  container-name: mars-info;
}

.mars-info-card {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px var(--card-shadow);
}

.mars-info-card h3 {
  font-size: clamp(1.5rem, 4cqi + 1rem, 2rem);
}

@container mars-info (max-width: 400px) {
  .mars-info-card {
    padding: 1rem;
  }
  
  .image-gallery {
    grid-template-columns: 1fr;
  }
}

@container mars-info (min-width: 401px) and (max-width: 700px) {
  .image-gallery {
    grid-template-columns: 1fr 1fr;
  }
}

@container mars-info (min-width: 701px) {
  .image-gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

## Conclusion

By implementing container queries and other advanced responsive techniques, we can create more flexible, component-based
responsive designs that adapt to their context rather than just the viewport size. This approach will make our
components more reusable and our layouts more robust across different screen sizes and contexts.