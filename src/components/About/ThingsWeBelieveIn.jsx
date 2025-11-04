const ThingsWeBelieveIn = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-full mx-auto w-full">
        {/* Text Section - Zoom & Small Laptop Optimized */}
        <div className="text-center xl:text-left mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0 max-w-4xl mx-auto xl:mx-0">
          {/* Heading - Zoom & Small Laptop Optimized */}
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
  );
};

export default ThingsWeBelieveIn;