import React from 'react';

/**
 * Higher-order component that wraps a component with React.memo
 * to prevent unnecessary re-renders
 *
 * @param {React.ComponentType} Component - The component to memoize
 * @param {Function} [areEqual] - Optional comparison function for props
 * @returns {React.MemoExoticComponent} - Memoized component
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