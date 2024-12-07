import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white">
            <h1 className="text-9xl font-bold animate-bounce">404</h1>
            <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;
