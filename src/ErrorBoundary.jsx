import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  // useEffect is used to mimic the componentDidCatch behavior
  useEffect(() => {
    const handleComponentError = (error, errorInfo) => {
      setError(error);
      setErrorInfo(errorInfo);
    };

    // Set up error handler for the component
    const errorHandler = window.addEventListener('error', (event) => {
      handleComponentError(event.error, null);
    });

    // Clean up the error handler
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  // Render the error message if an error occurred
  if (error) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error.toString()}</p>
        <div>Details: {errorInfo && errorInfo.componentStack}</div>
      </div>
    );
  }

  // If no error occurred, render the children components
  return children;
}

export default ErrorBoundary;
