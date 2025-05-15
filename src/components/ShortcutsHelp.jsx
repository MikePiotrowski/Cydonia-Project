import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './ShortcutsHelp.css';
import withMemo from '../hoc/withMemo';

/**
 * Component to display keyboard shortcuts help
 */
const ShortcutsHelp = ({isOpen, onClose}) => {
    const dialogRef = useRef(null);

    // Focus trap for accessibility
    useEffect(() => {
        if (!isOpen) return;

        const dialog = dialogRef.current;
        const focusableElements = dialog.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Focus the first element when dialog opens
        firstElement?.focus();

        // Handle tab key to trap focus within the dialog
        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        // Handle escape key to close dialog
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        dialog.addEventListener('keydown', handleTabKey);
        dialog.addEventListener('keydown', handleEscKey);

        return () => {
            dialog.removeEventListener('keydown', handleTabKey);
            dialog.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="shortcuts-help-overlay" onClick={onClose}>
            <div
                className="shortcuts-help-dialog"
                onClick={e => e.stopPropagation()}
                ref={dialogRef}
                role="dialog"
                aria-labelledby="shortcuts-help-title"
                aria-describedby="shortcuts-help-description"
            >
                <button
                    className="shortcuts-help-close"
                    onClick={onClose}
                    aria-label="Close shortcuts help"
                >
                    <i className="fas fa-times"></i>
                </button>

                <h2 id="shortcuts-help-title">Keyboard Shortcuts</h2>
                <p id="shortcuts-help-description">
                    The following keyboard shortcuts are available throughout the site:
                </p>

                <div className="shortcuts-help-grid">
                    <div className="shortcuts-help-section">
                        <h3>Navigation</h3>
                        <ul>
                            <li><kbd>Alt</kbd> + <kbd>H</kbd> - Go to Home</li>
                            <li><kbd>Alt</kbd> + <kbd>A</kbd> - Go to About Mars</li>
                            <li><kbd>Alt</kbd> + <kbd>C</kbd> - Go to About Cydonia</li>
                            <li><kbd>Alt</kbd> + <kbd>F</kbd> - Go to Forum</li>
                            <li><kbd>Alt</kbd> + <kbd>L</kbd> - Go to Links</li>
                            <li><kbd>Alt</kbd> + <kbd>S</kbd> - Scroll to top</li>
                        </ul>
                    </div>

                    <div className="shortcuts-help-section">
                        <h3>Appearance</h3>
                        <ul>
                            <li><kbd>Alt</kbd> + <kbd>T</kbd> - Toggle dark/light theme</li>
                            <li><kbd>Alt</kbd> + <kbd>Z</kbd> - Cycle font size</li>
                            <li><kbd>Alt</kbd> + <kbd>X</kbd> - Toggle animations</li>
                            <li><kbd>Alt</kbd> + <kbd>V</kbd> - Toggle high contrast</li>
                        </ul>
                    </div>

                    <div className="shortcuts-help-section">
                        <h3>Help</h3>
                        <ul>
                            <li><kbd>Alt</kbd> + <kbd>?</kbd> - Show/hide this dialog</li>
                            <li><kbd>Esc</kbd> - Close this dialog</li>
                        </ul>
                    </div>
                </div>

                <div className="shortcuts-help-footer">
                    <p>
                        <strong>Note:</strong> On Mac, you may need to use <kbd>Option</kbd> instead of <kbd>Alt</kbd>.
                    </p>
                </div>
            </div>
        </div>
    );
};

ShortcutsHelp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default withMemo(ShortcutsHelp);