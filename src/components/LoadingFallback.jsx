import React from 'react';
import './LoadingFallback.css';
import withMemo from '../hoc/withMemo';

/**
 * Loading fallback component for Suspense
 * with accessibility improvements
 */
const LoadingFallback = () => {
    return (
        <div
            className="loading-fallback"
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="loading-spinner" aria-hidden="true"></div>
            <p>Loading content...</p>
        </div>
    );
};

// Export memoized component to prevent unnecessary re-renders
export default withMemo(LoadingFallback);
