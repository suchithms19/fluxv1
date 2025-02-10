import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouMentor = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-inter">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#ffe05c] rounded-full flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You !
          </h1>
          <div className="space-y-4 text-gray-600">
            <p >
              Your expertise and willingness to guide others is truly appreciated.
            </p>
            {/* <p>
              Our team will carefully review your application and get back to you. We'll reach out via email with next steps and additional information.
            </p> */}
            
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-sm text-gray-500 mb-4">
            Have questions? Feel free to reach out to us at{' '}
            <a 
              href="mailto:getflux.tech@gmail.com" 
              className="underline hover:text-yellow-500"
            >
              getflux.tech@gmail.com
            </a>
          </p>
          <Link 
            to="/" 
            className="inline-block bg-[#ffe05c] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouMentor;