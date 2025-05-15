import React from 'react';

/**
 * Higher-order component that wraps a component with React.memo
 * to prevent unnecessary re-renders
 *
 * @param {React.ComponentType} Component - The component to memoize. Must be a valid React component.
 * @param {Function} [areEqual] - Optional comparison function for props.
 *                               Should take prevProps and nextProps as arguments and return true if they are equal.
 *                               If not provided, React will do a shallow comparison of props.
 * @returns {React.MemoExoticComponent} - Memoized component that will only re-render when its props change.
 * @example
 * // Basic usage
 * const MemoizedComponent = withMemo(MyComponent);
 *
 * // With custom comparison function
 * const MemoizedWithCustomComparison = withMemo(MyComponent, (prevProps, nextProps) => {
 *   return prevProps.id === nextProps.id; // Only re-render when id changes
 * });
 */
const withMemo = (Component, areEqual) => {
    // Display name for debugging
    const displayName = Component.displayName || Component.name || 'Component';

    // Wrap with React.memo
    const MemoizedComponent = React.memo(Component, areEqual);

    // Set display name for the memoized component
    MemoizedComponent.displayName = `Memo(${displayName})`;

    return MemoizedComponent;
};

export default withMemo;
