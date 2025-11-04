import React from 'react'
import { Link } from 'react-router-dom'

const Contact2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* First Section - Ready to stop just posting and start growing? */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                  Ready to stop just posting and start growing?
                </h1>
                <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name2" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name2"
                    name="name"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-xs sm:text-sm md:text-base transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email2" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email2"
                    name="email"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-xs sm:text-sm md:text-base transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone2" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone2"
                    name="phone"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-xs sm:text-sm md:text-base transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message2" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message2"
                    name="message"
                    rows={3}
                    placeholder="Type your message..."
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-xs sm:text-sm md:text-base transition-all duration-200 sm:rows-4 md:rows-6"
                  />
                </div>

                <div className="flex items-start sm:items-center pt-1">
                  <input
                    type="checkbox"
                    id="terms2"
                    name="terms"
                    className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded mt-0.5 sm:mt-0 flex-shrink-0"
                  />
                  <label htmlFor="terms2" className="ml-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    I accept the <Link to="/terms" className="text-red-500 hover:text-red-600 underline transition-colors duration-200">Terms</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-none transition-all duration-200 text-xs sm:text-sm md:text-base min-h-[44px] touch-manipulation"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/contact21.png"
                  alt="Person in spotlight"
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Looking to join as a creator instead? */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 lg:items-stretch">
            {/* Left Content with Border */}
            <div className="border-2 border-gray-300 bg-white p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    Looking to join as a creator instead?
                  </h2>
                  <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                    Get briefs from brands that value authenticity, creativity, and strategy.
                  </p>
                </div>

                <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-none transition-all duration-200 text-xs sm:text-sm md:text-base min-h-[44px] touch-manipulation">
                  Join the Silo
                </button>
              </div>
            </div>

            {/* Right Image - Full Height, No Border */}
            <div className="relative order-1 lg:order-2 h-48 xs:h-56 sm:h-64 md:h-80 lg:h-auto lg:min-h-[400px] xl:min-h-[500px]">
              <img
                src="/contact22.png"
                alt="Person relaxing on chair"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact2