import {useCallback, useMemo} from 'react';

/**
 * Custom hook for memoizing a value
 *
 * @param {Function} factory - Function that returns the value to memoize
 * @param {Array} dependencies - Array of dependencies for the memoization
 * @returns {any} - The memoized value
 */
export const useMemoizedValue = (factory, dependencies) => {
    return useMemo(factory, dependencies);
};

/**
 * Custom hook for memoizing a callback function
 *
 * @param {Function} callback - The callback function to memoize
 * @param {Array} dependencies - Array of dependencies for the memoization
 * @returns {Function} - The memoized callback
 */
export const useMemoizedCallback = (callback, dependencies) => {
    return useCallback(callback, dependencies);
};

/**
 * Custom hook for creating a stable object reference that only changes
 * when the specified properties change
 *
 * @param {Object} obj - The object to memoize
 * @returns {Object} - The memoized object
 */
export const useMemoizedObject = (obj) => {
    // Extract all keys and values for dependencies
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    // Create a memoized version of the object that only changes
    // when any of the values change
    return useMemo(() => {
        return {...obj};
    }, [...values]);
};