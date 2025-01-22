import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router is used

const ErrorBoundaryPage = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Something Went Wrong</h1>
      <p className="text-lg mb-6">{error?.message || 'An unexpected error occurred.'}</p>
      <div className="flex space-x-4">
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Try Again
        </button>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundaryPage;
