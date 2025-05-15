import React from 'react';
import './LoadingFallback.css';

/**
 * Loading fallback component for Suspense
 */
const LoadingFallback = () => {
    return (
        <div className="loading-fallback">
            <div className="loading-spinner"></div>
            <p>Loading content...</p>
        </div>
    );
};

export default LoadingFallback;
