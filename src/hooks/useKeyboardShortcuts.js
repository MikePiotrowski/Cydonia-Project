import {useCallback, useEffect} from 'react';

/**
 * Custom hook for handling keyboard shortcuts
 * @param {Object} shortcuts - Object mapping key combinations to handler functions
 * @param {Object} options - Options for the hook
 * @param {boolean} options.enabled - Whether shortcuts are enabled
 * @param {Array} options.dependencies - Dependencies for the effect
 * @returns {void}
 *
 * @example
 * // Usage example
 * useKeyboardShortcuts({
 *   'Alt+t': () => toggleTheme(),
 *   'Alt+h': () => navigateTo('home'),
 *   'Alt+a': () => navigateTo('about'),
 * });
 */
const useKeyboardShortcuts = (shortcuts, options = {}) => {
    const {enabled = true, dependencies = []} = options;

    const handleKeyDown = useCallback((event) => {
        // Create a string representation of the key combination
        let keyCombo = '';
        if (event.altKey) keyCombo += 'Alt+';
        if (event.ctrlKey) keyCombo += 'Ctrl+';
        if (event.shiftKey) keyCombo += 'Shift+';
        if (event.metaKey) keyCombo += 'Meta+'; // Command key on Mac

        // Add the actual key pressed
        keyCombo += event.key.toLowerCase();

        // Check if this key combination has a handler
        Object.entries(shortcuts).forEach(([shortcut, handler]) => {
            if (shortcut.toLowerCase() === keyCombo) {
                event.preventDefault();
                handler(event);
            }
        });
    }, [shortcuts]);

    useEffect(() => {
        if (!enabled) return;

        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

        // Clean up
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [enabled, handleKeyDown, ...dependencies]);
};

export default useKeyboardShortcuts;