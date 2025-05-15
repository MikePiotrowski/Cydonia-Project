import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

/**
 * Error Boundary component to catch JavaScript errors in child components
 * and display a fallback UI instead of crashing the whole application
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="error-boundary">
                    <h2>Something went wrong.</h2>
                    <p>The application encountered an error. Please try refreshing the page.</p>
                    {this.props.showDetails && this.state.error && (
                        <details style={{whiteSpace: 'pre-wrap'}}>
                            <summary>Error Details</summary>
                            <p>{this.state.error.toString()}</p>
                            <p>Component Stack: {this.state.errorInfo?.componentStack}</p>
                        </details>
                    )}
                    <button
                        onClick={() => window.location.reload()}
                        className="error-reload-btn"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        // If there's no error, render children normally
        return this.props.children;
    }
}

// PropTypes validation
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    showDetails: PropTypes.bool
};

// Default props
ErrorBoundary.defaultProps = {
    showDetails: false
};

export default ErrorBoundary;
