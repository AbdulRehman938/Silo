const WhatSiloIs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-6 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden w-full sm:py-0 sm:h-fit">
      <div className="max-w-full mx-auto w-full">
        <div className="flex flex-col xl:grid mb-10 xl:grid-cols-2 items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 sm:mb-8 md:mb-12 lg:mb-16">
          {/* Left Side - Heading - Zoom & Small Laptop Optimized */}
          <div className="w-full px-2 sm:px-0">
            <h2 
              className="font-bold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight text-center xl:text-left"
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
          <div className="w-full h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-[28rem] rounded-lg md:rounded-2xl overflow-hidden mx-auto max-w-full">
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
  );
};

export default WhatSiloIs;