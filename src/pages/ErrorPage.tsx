import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Mail, ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-red-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We're experiencing some technical difficulties. Our team has been notified and is working to resolve the issue.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-indigo-600">
              <Mail className="h-5 w-5" />
              <a href="mailto:support@closeby.com" className="hover:text-indigo-800">
                support@closeby.com
              </a>
            </div>
            
            <Link 
              to="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;