import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight mb-8 sm:mb-12 md:mb-16">
          Well, this is awkward.
        </h1>
        
        {/* Description */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The page you're looking for doesn't exist, or maybe it never did.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mt-2">
            Either way, no content here.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-none transition-colors duration-200 text-sm sm:text-base"
          >
            Back to Home
          </Link>
          
          <Link 
            to="/portfolio" 
            className="w-full sm:w-auto bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-50 font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-none transition-colors duration-200 text-sm sm:text-base"
          >
            See our Work
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound