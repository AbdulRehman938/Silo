import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* First Section - Want to work with brands that get it? */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                  Want to work with brands that get it?
                </h1>
                <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-sm sm:text-base sm:rows-6"
                  />
                </div>

                <div className="flex items-start sm:items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded mt-0.5 sm:mt-0 flex-shrink-0"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600 leading-relaxed">
                    I accept the <Link to="/terms" className="text-red-500 hover:text-red-600 underline transition-colors duration-200">terms</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-none transition-colors duration-200 text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/contact1.png"
                alt="Person relaxing on chair"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Brand looking to hire creators? */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 lg:items-stretch">
            {/* Left Content with Border */}
            <div className="border-2 border-gray-300 bg-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    Brand looking to hire creators?
                  </h2>
                  <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
                    We'll match your brand with the right talent and deliver content that cuts through.
                  </p>
                </div>

                <Link 
                  to="/contact2" 
                  className="inline-block w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-none transition-colors duration-200 text-sm sm:text-base text-center no-underline"
                >
                  Let's chat
                </Link>
              </div>
            </div>

            {/* Right Image - Full Height */}
            <div className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-auto">
              <img
                src="/contact2.png"
                alt="Person in spotlight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact