import { useState, useEffect } from 'react';

const MindsInTheSilo = () => {
  // Carousel state management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Carousel data - team members + special card
  const carouselData = [
    {
      id: 'ruby-turbett',
      type: 'team-member',
      name: 'Ruby Turbett',
      title: 'Job title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      imageUrl: '/Carousal1.png'
    },
    {
      id: 'hailey-hippolyte',
      type: 'team-member',
      name: 'Hailey Hippolyte',
      title: 'Job title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      imageUrl: '/Carousal2.png'
    },
    {
      id: 'deniro-stocks',
      type: 'team-member',
      name: 'Deniro Stocks',
      title: 'Job Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      imageUrl: '/Carousal3.png'
    },
    {
      id: 'will-carter',
      type: 'team-member',
      name: 'Will Carter',
      title: 'Genius and Ego',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      imageUrl: '/Carousal4.png'
    },
    {
      id: 'join-us',
      type: 'special-card',
      title: 'Think you\'re cooler than us?',
      buttonText: 'Prove it',
      description: 'Worst case, you get rejected by people with great hair (or Wil).'
    }
  ];

  // Enhanced responsive breakpoint detection
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const newIsMobile = width < 768;
      
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrentSlide(0); // Reset to first slide when switching layouts
      }
      
      setViewportWidth(width);
    };
    
    // Initial check
    checkViewport();
    
    // Debounced resize handler for better performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkViewport, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Dynamic slide calculation based on screen size
  const totalSlides = isMobile ? carouselData.length : 2; // Mobile: 5 slides, Desktop: 2 slides
  const cardsPerView = isMobile ? 1 : 3;

  // Navigation functions with debouncing
  const goToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  const goToPrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  // Enhanced touch gesture handlers with scroll conflict prevention
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    // Prevent horizontal scroll interference on mobile
    if (isMobile && touchStart) {
      const currentX = e.targetTouches[0].clientX;
      const diffX = Math.abs(currentX - touchStart);
      
      // If horizontal movement is significant, prevent default to avoid scroll conflicts
      if (diffX > 10) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Only trigger swipe on mobile devices
    if (isMobile) {
      if (isLeftSwipe) {
        goToNextSlide();
      } else if (isRightSwipe) {
        goToPrevSlide();
      }
    }
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Cleanup any active timers on unmount
  useEffect(() => {
    return () => {
      // Clear any pending transition timeouts
      setIsTransitioning(false);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section - Zoom & Small Laptop Optimized */}
        <div className="text-center xl:text-left mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0">
          <h2 
            className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight mb-3 sm:mb-4"
            style={{
              opacity: 1,
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 700,
              lineHeight: '120%',
              letterSpacing: '0%'
            }}
          >
            Minds in the Silo
          </h2>
          
          <p 
            className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto xl:mx-0"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
            elementum tristique.
          </p>
        </div>

        {/* Carousel Container - Mobile Optimized */}
        <div 
          className="relative"
          role="region"
          aria-label="Team members carousel"
          aria-live="polite"
        >
          {/* Cards Container - Mobile Enhanced */}
          <div 
            className="overflow-hidden w-full px-2 sm:px-4 lg:px-0 lg:max-w-7xl lg:mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="group"
            aria-label={`Slide ${currentSlide + 1} of ${totalSlides}`}
          >
            <div 
              className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-400 ease-in-out"
              style={{
                transform: isMobile 
                  ? `translateX(-${currentSlide * (280 + 12)}px)` // Mobile: optimized card width
                  : `translateX(-${currentSlide === 0 ? 0 : 2 * (395 + 24)}px)`, // Desktop: original logic
                width: 'fit-content'
              }}
            >
              {carouselData.map((item, index) => (
                <div key={item.id} className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-80 xl:w-[350px] 2xl:w-[395px]">
                  {item.type === 'team-member' ? (
                    // Team Member Card - Zoom & Small Laptop Optimized
                    <div 
                      className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-5 xl:p-6 h-full flex flex-col"
                      style={{
                        minHeight: '300px',
                        opacity: 1
                      }}
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={`${item.name} - Team Member`}
                        className="w-full h-auto rounded-lg object-cover flex-1 max-h-40 sm:max-h-48 lg:max-h-56 xl:max-h-none"
                      />
                      
                      {/* Text Content - Zoom & Small Laptop Optimized */}
                      <div className="mt-2 sm:mt-3 lg:mt-4 space-y-1 sm:space-y-2">
                        <h3 className="font-bold text-black text-sm sm:text-base lg:text-lg text-center">{item.name}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm text-center">{item.title}</p>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Special Card - Zoom & Small Laptop Optimized
                    <div 
                      className="rounded-lg p-3 sm:p-4 lg:p-6 xl:p-8 h-full flex flex-col justify-center items-center text-center border-2"
                      style={{
                        minHeight: '300px',
                        backgroundColor: '#FFE5E5',
                        borderColor: '#FF322E',
                        opacity: 1
                      }}
                    >
                      <div className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 max-w-xs">
                        <h3 
                          className="font-bold text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight"
                          style={{
                            fontFamily: 'Epilogue, sans-serif',
                            fontWeight: 700,
                            lineHeight: '120%',
                            letterSpacing: '0%'
                          }}
                        >
                          {item.title}
                        </h3>
                        
                        <button 
                          className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-2 lg:py-3 xl:py-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-xs sm:text-sm lg:text-base xl:text-lg w-full"
                          onClick={() => console.log('Prove it clicked')}
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 700
                          }}
                        >
                          {item.buttonText}
                        </button>
                        
                        <p 
                          className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            lineHeight: '150%',
                            letterSpacing: '0%',
                            color: '#6B7280'
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Mobile Optimized */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 w-full px-2 sm:px-4 lg:max-w-7xl lg:mx-auto">
            {/* Navigation Dots - Mobile Enhanced */}
            <div className="flex space-x-1 sm:space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 400);
                    }
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    currentSlide === index ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Navigation Arrows - Mobile Enhanced */}
            <div className="flex space-x-1 sm:space-x-2">
            <button 
              onClick={goToPrevSlide}
              disabled={isTransitioning}
              className={`w-10 h-10 sm:w-12 sm:h-12 border border-red-500 text-red-500 rounded flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base sm:text-lg ${
                isTransitioning 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-red-50 active:bg-red-100'
              }`}
              aria-label="Previous slide"
            >
              ←
            </button>
            <button 
              onClick={goToNextSlide}
              disabled={isTransitioning}
              className={`w-10 h-10 sm:w-12 sm:h-12 border border-red-500 text-red-500 rounded flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base sm:text-lg ${
                isTransitioning 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-red-50 active:bg-red-100'
              }`}
              aria-label="Next slide"
            >
              →
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsInTheSilo;