import React, {useEffect, useState} from 'react';
import './LoadingFallback.css';
import withMemo from '../hoc/withMemo';

/**
 * Loading fallback component for Suspense
 * with accessibility improvements and Mars-themed animation
 */
const LoadingFallback = () => {
    // State for loading messages
    const [loadingMessage, setLoadingMessage] = useState('Loading content');

    // Cycle through different loading messages for longer loads
    useEffect(() => {
        const messages = [
            'Loading content',
            'Establishing Mars connection',
            'Analyzing Cydonia data',
            'Preparing Mars imagery'
        ];

        let messageIndex = 0;

        const messageInterval = setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            setLoadingMessage(messages[messageIndex]);
        }, 3000);

        return () => clearInterval(messageInterval);
    }, []);

    return (
        <div
            className="loading-fallback"
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="loading-spinner" aria-hidden="true">
                {/* Satellite orbiting Mars */}
                <div className="satellite" aria-hidden="true"></div>
            </div>
            <p>
                {loadingMessage}
                <span className="loading-dots" aria-hidden="true"></span>
            </p>
        </div>
    );
};

// Export memoized component to prevent unnecessary re-renders
export default withMemo(LoadingFallback);
