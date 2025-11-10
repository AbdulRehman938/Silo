const WhatSiloIs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-6 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden w-full sm:py-0 sm:h-fit">
      <div className="max-w-full mx-auto w-full flex flex-col gap-10">
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
              In a noisy digital world, we don’t just post to keep up. We go deeper. 
            </h2>
          </div>
          
          {/* Right Side - Text Content - Zoom & Small Laptop Optimized */}
          <div className="text-gray-700 space-y-3 sm:space-y-4 md:space-y-6 w-full px-2 sm:px-0">
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-center xl:text-left"
              style={{
               
                fontWeight: 800,
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000',
                opacity: 1
              }}
            >
             With over a decade of experience in the marketing industry, we’ve worked across multiple sectors and scales, from fast-moving startups to established consumer brands. 
            </p>
            
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-center xl:text-left"
              style={{
               
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000',
                opacity: 1
              }}
            >
             That breadth means we understand what it takes to cut through, no matter the audience. We’re not just strategists, we’re creators. With in-house, direct UGC experience and hands-on social expertise, we know how to make content that feels native to the platform, not like another ad. Every piece is built with clarity, creativity, and care - because great content isn’t just made, it’s cultivated.
            </p>
            
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-center xl:text-left"
              style={{
               
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000',
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
          <div className="w-full h-60 sm:h-60 md:h-72 lg:h-80 xl:h-96 2xl:h-[30rem] overflow-hidden mx-auto max-w-full">
            <img 
              src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717240/image_re2b0o.png" 
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