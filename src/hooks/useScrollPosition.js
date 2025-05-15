import {useCallback, useEffect, useState} from 'react';
import {throttle} from '../utils/eventUtils';

/**
 * Custom hook to track scroll position with throttling to improve performance
 * @param {number} [delay=100] - Throttle delay in milliseconds
 * @returns {number} Current scroll position (window.scrollY)
 */
export const useScrollPosition = (delay = 100) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Create the scroll handler with useCallback to maintain reference stability
    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);

    useEffect(() => {
        // Create a throttled version of the scroll handler
        const throttledHandleScroll = throttle(handleScroll, delay);

        window.addEventListener('scroll', throttledHandleScroll);

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [handleScroll, delay]);

    return scrollPosition;
};

export default useScrollPosition;
