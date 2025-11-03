import { useState, useEffect } from 'react';

const About = () => {
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

  const handleContactClick = () => {
    // Contact functionality - could be a modal, form, or navigation
    console.log('Contact action triggered');
  };

  const handleServicesClick = () => {
    // Navigate to services section
    console.log('Navigate to services');
  };

  return (
    <div className="bg-white overflow-x-hidden min-h-screen">
      {/* First Section - Hero */}
      <section 
        className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 overflow-x-hidden"
        aria-label="About Silo - Company introduction"
      >
        <div className="flex flex-col xl:grid xl:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto w-full items-center">
          {/* Text Content Area */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 order-2 xl:order-1 xl:pr-6 w-full" role="main">
            {/* Main Heading - Zoom & Small Laptop Optimized */}
            <h1 
              className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] leading-tight text-center xl:text-left px-2 sm:px-0"
              style={{
                opacity: 1,
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '0%'
              }}
            >
              We are the{' '}
              <span className="text-red-500">Silo</span>
              , get to know us.
            </h1>
            
            {/* Brand Statement - Zoom & Small Laptop Optimized */}
            <p 
              className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] leading-relaxed text-center xl:text-left max-w-full xl:max-w-lg px-2 sm:px-0"
              style={{
                opacity: 1,
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
              The Silo was built on the belief that content should be more than just constant output, 
              it should be intentional, strategic, and deeply rooted in a brand's purpose.
            </p>
            
            {/* CTA Buttons - Zoom & Small Laptop Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center xl:items-start w-full sm:w-auto px-2 sm:px-0">
              <button 
                onClick={handleContactClick}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full sm:w-auto text-sm sm:text-base"
                aria-label="Contact us to start a conversation"
              >
                Let's chat
              </button>
              
              <button 
                onClick={handleServicesClick}
                className="border-2 border-red-200 hover:border-red-300 text-gray-700 hover:text-gray-900 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 w-full sm:w-auto text-sm sm:text-base"
                aria-label="Learn more about our services"
              >
                Our services
              </button>
            </div>
          </div>
          
          {/* Visual Content Area - Zoom & Small Laptop Optimized */}
          <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-end gap-3 sm:gap-4 md:gap-6 order-1 xl:order-2 w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-none mx-auto xl:mx-0">
            {/* Primary Image - Zoom & Small Laptop Optimized */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-auto xl:max-w-[400px] 2xl:max-w-[438px] flex-shrink-0">
              <img 
                src="/About1.png" 
                alt="Silo team member showcasing brand identity"
                className="w-full h-auto rounded-2xl shadow-lg object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-none"
                style={{ 
                  opacity: 1
                }}
              />
            </div>
            
            {/* Secondary Image - Zoom & Small Laptop Optimized */}
            <div className="flex flex-col items-center lg:items-center xl:self-start xl:mt-8 2xl:mt-16">
              <img 
                src="/About2.png" 
                alt="The Silo brand representation"
                className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-[328px] h-auto rounded-lg shadow-md object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px] 2xl:max-h-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - What Silo Is */}
      <section className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col xl:grid xl:grid-cols-2 items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            {/* Left Side - Heading - Zoom & Small Laptop Optimized */}
            <div className="w-full px-2 sm:px-0">
              <h2 
                className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight mb-4 sm:mb-6 xl:mb-0 text-center xl:text-left"
                style={{
                  opacity: 1,
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '120%',
                  letterSpacing: '0%'
                }}
              >
                So here's the part where we get to tell you what the Silo is.
              </h2>
            </div>
            
            {/* Right Side - Text Content - Zoom & Small Laptop Optimized */}
            <div className="text-gray-700 space-y-3 sm:space-y-4 md:space-y-6 w-full px-2 sm:px-0">
              <p 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-center xl:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#374151',
                  opacity: 1
                }}
              >
                The Silo isn't about churning out noise. It's about making content 
                that actually matters. Sharp strategy. Clear purpose. Work that cuts 
                through instead of blending in.
              </p>
              
              <p 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-center xl:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#374151',
                  opacity: 1
                }}
              >
                We take your brand's values, voice, and vision and pack them tight into 
                content that sticks. Not filler. Not fluff. Just the kind of creative people 
                remember.
              </p>
              
              <p 
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-center xl:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#374151',
                  opacity: 1
                }}
              >
                We're where structure meets chaos. Where ideas grow legs. Where 
                brands stop playing safe and start getting noticed.
              </p>
            </div>
          </div>
          
          {/* Full Width Image Below - Zoom & Small Laptop Optimized */}
          <div className="mt-6 sm:mt-8 md:mt-12 px-2 sm:px-0">
            <div className="w-full h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-96 rounded-lg md:rounded-2xl overflow-hidden mx-auto max-w-full">
              <img 
                src="/image.png" 
                alt="Silo creative process illustration"
                className="w-full h-full object-cover"
                style={{
                  opacity: 1
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Why UGC */}
      <section className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <h2 
            className="font-bold text-black mb-6 sm:mb-8 md:mb-12 text-center xl:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight px-2 sm:px-0"
            style={{
              opacity: 1,
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 700,
              lineHeight: '120%',
              letterSpacing: '0%'
            }}
          >
            Why we choose UGC?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
            {/* First Column - Zoom & Small Laptop Optimized */}
            <div className="w-full space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0 max-w-md mx-auto lg:max-w-none">
              <img 
                src="/img1.png" 
                alt="People trust people"
                className="w-full h-auto rounded-lg max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-none object-cover"
              />
              <h3 
                className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                Because people trust people.
              </h3>
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  opacity: 1
                }}
              >
                UGC feels real. It doesn't look like an ad. It looks like 
                someone you'd actually follow. That's why it works.
              </p>
            </div>
            
            {/* Second Column - Zoom & Small Laptop Optimized */}
            <div className="w-full space-y-3 sm:space-y-4 md:space-y-6 lg:pt-0 xl:pt-8 2xl:pt-16 px-2 sm:px-0 max-w-md mx-auto lg:max-w-none">
              <img 
                src="/img2.png" 
                alt="Strategy makes it scale"
                className="w-full h-auto rounded-lg max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-none object-cover"
              />
              <h3 
                className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                Because strategy makes it scale.
              </h3>
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  opacity: 1
                }}
              >
                On its own, UGC is just content. When we build into a 
                social strategy, brand mapping, and storytelling, it 
                becomes a growth engine.
              </p>
            </div>
            
            {/* Third Column - Zoom & Small Laptop Optimized */}
            <div className="w-full space-y-3 sm:space-y-4 md:space-y-6 lg:pt-0 xl:pt-16 2xl:pt-32 px-2 sm:px-0 max-w-md mx-auto lg:max-w-none">
              <img 
                src="/img3.png" 
                alt="Brands need both"
                className="w-full h-auto rounded-lg max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-none object-cover"
              />
              <h3 
                className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                Because brands need both.
              </h3>
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  opacity: 1
                }}
              >
                We don't pick between slick campaigns and scrappy 
                creator clips. We blend them. Structured strategy + 
                creator energy = content that connects and 
                converts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Things we believe in */}
      <section className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Text Section - Zoom & Small Laptop Optimized */}
          <div className="text-center xl:text-left mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0 max-w-4xl mx-auto xl:mx-0">
            {/* Heading - Zoom & Small Laptop Optimized */}
            <h2 
              className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight mb-3 sm:mb-4"
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '0%'
              }}
            >
              Things we believe in
            </h2>
            
            {/* Below Text - Zoom & Small Laptop Optimized */}
            <p 
              className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
              elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          
          {/* Cards Grid - Zoom & Small Laptop Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8">
            {/* First Card - Zoom & Small Laptop Optimized */}
            <div className="w-full max-w-sm mx-auto lg:max-w-none space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0">
              {/* Red Card with Icon Only */}
              <div 
                className="w-full h-40 sm:h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-60 rounded-md flex items-center justify-center"
                style={{
                  opacity: 1,
                  background: '#FF322E'
                }}
              >
                <img 
                  src="/Vector1.png" 
                  alt="Content should mean something icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                />
              </div>
              
              {/* Text Content Below Card */}
              <h3 
                className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-center lg:text-left"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                Content should mean something, not just fill a feed.
              </h3>
              
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0%'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
            
            {/* Second Card - Zoom & Small Laptop Optimized */}
            <div className="w-full max-w-sm mx-auto lg:max-w-none space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0">
              {/* Red Card with Icon Only */}
              <div 
                className="w-full h-40 sm:h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-60 rounded-md flex items-center justify-center"
                style={{
                  opacity: 1,
                  background: '#FF322E'
                }}
              >
                <img 
                  src="/Vector2.png" 
                  alt="We create work that sticks icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                />
              </div>
              
              {/* Text Content Below Card */}
              <h3 
                className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-center lg:text-left"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                We create work that sticks, not scrolls past.
              </h3>
              
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0%'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
            
            {/* Third Card - Zoom & Small Laptop Optimized */}
            <div className="w-full max-w-sm mx-auto lg:max-w-none space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-0">
              {/* Red Card with Icon Only */}
              <div 
                className="w-full h-40 sm:h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-60 rounded-md flex items-center justify-center"
                style={{
                  opacity: 1,
                  background: '#FF322E'
                }}
              >
                <img 
                  src="/Vector3.png" 
                  alt="Bold ideas need solid foundation icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                />
              </div>
              
              {/* Text Content Below Card */}
              <h3 
                className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-center lg:text-left"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                Bold ideas need a solid foundation to grow.
              </h3>
              
              <p 
                className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed text-center lg:text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0%'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Minds in the Silo Carousel */}
      <section className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Section - Zoom & Small Laptop Optimized */}
          <div className="text-center xl:text-left mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0">
            <h2 
              className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight mb-3 sm:mb-4"
              style={{
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
    </div>
  )
}

export default About