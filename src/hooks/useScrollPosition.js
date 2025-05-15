import {useEffect, useState} from 'react';

/**
 * Custom hook to track scroll position
 * @returns {number} Current scroll position (window.scrollY)
 */
export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useScrollPosition;