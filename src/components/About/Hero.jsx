import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const [showVideoSection, setShowVideoSection] = useState(true);
  const [showVimeoModal, setShowVimeoModal] = useState(false);
  const vimeoUrl = "https://player.vimeo.com/video/76979871";

  return (
    <>
      {/* First Section - Hero */}
      <section
        className="my-20 flex items-center w-full justify-start px-3 sm:px-2 md:px-6 lg:px-0 overflow-hidden md:h-[calc(100vh-80px)]"
        aria-label="About Silo - Company introduction"
      >
        <div className="flex flex-col justify-between xl:grid xl:grid-cols-[1fr_1.5fr] gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 max-w-full mx-auto w-full items-center">
          {/* Text Content Area */}
          <div
            className="flex flex-col h-full justify-start xl:justify-between space-y-3 sm:space-y-4 md:space-y-5 order-1 xl:order-1 xl:pr-6 w-full items-start"
            role="main"
          >
            {/* Main Heading - Zoom & Small Laptop Optimized */}
            <h1
              className="font-bold text-black text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[56px] leading-3 text-left px-2 sm:px-0 md:px-0 mt-4 sm:mt-0"
              style={{
                opacity: 1,
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              We are the <br /> <span className="text-red-500">Silo, </span>get to <br /> know
              us.
            </h1>

            {/* Text and Buttons Container */}
            <div className="flex flex-col gap-2 sm:gap-3 items-start w-full px-2 sm:px-0">
              {/* Brand Statement - Zoom & Small Laptop Optimized */}
              <div>
                <p
                  className="text-black text-sm sm:text-base md:text-base lg:text-lg xl:text-[16px] leading-relaxed text-left max-w-full xl:max-w-lg px-2 md:px-0 font-epilogue"
                  style={{
                    opacity: 1,
                    fontWeight: 400,
                    fontFamily:"Epilogue, sans-serif",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  The Silo was built on the belief that content should be more
                  than just constant output, it should be intentional,
                  strategic, and deeply rooted in a brand's purpose.
                </p>
              </div>

              {/* Buttons - Zoom & Small Laptop Optimized */}
              <div className="flex flex-row gap-3 sm:gap-4 items-start w-full sm:w-auto xl:mx-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[48px] px-5 py-2 text-xs font-bold tracking-wide text-white border-transparent relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <FaChevronRight   className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-3 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Let's chat
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-brand h-[48px] px-5 py-2 text-xs font-bold tracking-wide text-brand relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <FaChevronRight   className="text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-3 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Our services
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Content Area - Responsive Layout (copied from CaseStudies) */}
          <div className="order-2 xl:order-2 w-full mt-10 md:mt-0">
            {/* Mobile Layout: Large image first, small image + video section below */}
            <div className="flex flex-col md:hidden gap-4">
              {/* Large Image */}
              <div className="w-full">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717241/About1_t6qyw0.png"
                  alt="Silo team member showcasing brand identity"
                  className="w-full h-auto object-cover max-h-[500px] sm:max-h-[350px]"
                  loading="lazy"
                />
              </div>
              {/* Small Image + Video Section in same row */}
              <div className="flex flex-row items-center justify-center gap-3 w-full">
                {/* Small Image */}
                <div className="hidden sm:flex justify-center">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/About2_gof6gm.png"
                    alt="The Silo brand representation"
                    className="w-32 h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Video Section (conditionally rendered) */}
                {showVideoSection && (
                  <div className="flex items-center h-[10rem]">
                    {/* Vertical Text Outside */}
                    <div className="flex flex-col items-center mr-2 max-w-[12px]">
                      <span className="text-black font-bold text-xs tracking-wide rotate-[-90deg] whitespace-nowrap">Cut through the noise</span>
                    </div>
                    <div className="relative flex items-center justify-center w-[90px]" style={{ minHeight: '120px' }}>
                      <img
                        src="https://res.cloudinary.com/di9tb45rl/image/upload/v1763796208/image_7_hpf0du.png"
                        alt="Video thumbnail"
                        className="w-full h-auto object-cover shadow-lg" />
                      <div className="absolute inset-0 bg-black bg-opacity-30" />
                      {/* Play Button Overlay */}
                      <button
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-10 h-10 border-2 border-white hover:scale-105 transition"
                        onClick={() => setShowVimeoModal(true)}
                        aria-label="Play video"
                      >
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="white" />
                          <polygon points="13,10 24,16 13,22" fill="#222" />
                        </svg>
                      </button>
                      {/* Close Button */}
                      <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition" onClick={() => setShowVideoSection(false)}>
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="4" y1="4" x2="14" y2="14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                          <line x1="14" y1="4" x2="4" y2="14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* MD Layout: Large image left, small image + video section right */}
            <div className="hidden md:flex xl:hidden gap-6">
              {/* Large Image */}
              <div className="flex-1">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717241/About1_t6qyw0.png"
                  alt="Silo team member showcasing brand identity"
                  className="w-full h-auto object-cover max-h-[500px] lg:max-h-[550px]"
                  loading="lazy"
                />
              </div>
              {/* Right Column: Small image + video section */}
              <div className="flex flex-col gap-4 justify-between items-end">
                {/* Small Image */}
                <div>
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/About2_gof6gm.png"
                    alt="The Silo brand representation"
                    className="w-48 lg:w-56 h-auto object-cover max-h-[300px] lg:max-h-[350px]"
                    loading="lazy"
                  />
                </div>
                {/* Video Section - Bottom of small image (conditionally rendered) */}
                {showVideoSection && (
                  <div className="flex items-center w-full justify-end">
                    {/* Vertical Text Outside */}
                    <div className="flex flex-col items-center mr-2 max-w-[12px]">
                      <span className="text-black font-bold text-xs tracking-wide rotate-[-90deg] whitespace-nowrap">Cut through the noise</span>
                    </div>
                    {/* Video Section */}
                    <div className="relative flex items-center justify-center w-[140px] sm:w-[180px] md:w-[150px]">
                      <img
                        src="https://res.cloudinary.com/di9tb45rl/image/upload/v1763796208/image_7_hpf0du.png"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover shadow-lg" />
                      <div className="absolute inset-0 bg-black bg-opacity-30" />
                      {/* Play Button Overlay */}
                      <button
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 border-2 border-white hover:scale-105 transition"
                        onClick={() => setShowVimeoModal(true)}
                        aria-label="Play video"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="white" />
                          <polygon points="13,10 24,16 13,22" fill="#000" />
                        </svg>
                      </button>
                      {/* Close Button */}
                      <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition" onClick={() => setShowVideoSection(false)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="4" y1="4" x2="14" y2="14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                          <line x1="14" y1="4" x2="4" y2="14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* XL Layout: Large image left, small image + video section right */}
            <div className="hidden xl:flex gap-6">
              {/* Large Image */}
              <div className="flex-1 max-w-[438px]">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717241/About1_t6qyw0.png"
                  alt="Silo team member showcasing brand identity"
                  className="w-full h-auto object-cover max-h-[550px] 2xl:max-h-none"
                  loading="lazy"
                />
              </div>
              {/* Right Column: Small image + video section */}
              <div className="flex flex-col justify-between items-end">
                {/* Small Image */}
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/About2_gof6gm.png"
                    alt="The Silo brand representation"
                    className="w-64 2xl:w-[328px] h-auto object-cover xl:min-h-[200px] 2xl:max-h-none"
                    loading="lazy"
                  />
                </div>
                {/* Video Section - Bottom of small image */}
                {showVideoSection && (
                  <div className="flex items-center w-full justify-end">
                    {/* Vertical Text Outside */}
                    <div className="flex flex-col items-center mr-2 max-w-[12px]">
                      <span className="text-black font-bold text-xs tracking-wide rotate-[-90deg] whitespace-nowrap">Cut through the noise</span>
                    </div>
                    {/* Video Section */}
                    <div className="relative flex items-center justify-center w-[140px] sm:w-[180px] md:w-[150px]">
                      <img
                        src="https://res.cloudinary.com/di9tb45rl/image/upload/v1763796208/image_7_hpf0du.png"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover shadow-lg" />
                      <div className="absolute inset-0 bg-black bg-opacity-30" />
                      {/* Play Button Overlay */}
                      <button
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 border-2 border-white hover:scale-105 transition"
                        onClick={() => setShowVimeoModal(true)}
                        aria-label="Play video"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="white" />
                          <polygon points="13,10 24,16 13,22" fill="#222" />
                        </svg>
                      </button>
                      {/* Close Button */}
                      <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition" onClick={() => setShowVideoSection(false)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="4" y1="4" x2="14" y2="14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                          <line x1="14" y1="4" x2="4" y2="14" stroke="#222" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vimeo Modal */}
      {showVimeoModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowVimeoModal(false);
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/76979871?autoplay=1&title=1&byline=1&portrait=0"
            width="465"
            height="628"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
            style={{ background: 'transparent', border: 'none', boxShadow: '0 0 32px rgba(0,0,0,0.5)' }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Hero;
