const WhatSiloIs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-6 md:py-12 lg:py-20 lg:pb-10 px-3 sm:px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden w-full sm:py-0 sm:h-fit">
      <div className="max-w-full mx-auto w-full flex flex-col gap-0">
        <div className="flex flex-col md:grid md:grid-cols-2 mb-10 items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 sm:mb-8  mx-auto">
          {/* Left Side - Heading - Zoom & Small Laptop Optimized */}
          <div className="w-full px-2 sm:px-0 mt-10 md:mt-0">
            <h2 
              className="font-bold max-w-[36rem] text-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-[48px] leading-tight text-left"
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
              className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-left"
              style={{
               
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000',
                opacity: 1
              }}
            >
             With over a decade of experience in the marketing industry, we’ve worked across multiple sectors and scales, from fast-moving startups to established consumer brands. 
            </p>
            
            <p 
              className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-left"
              style={{
               
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000',
                opacity: 1
              }}
            >
             That breadth means we understand what it takes to cut through, no matter the audience. We’re not just strategists, we’re creators. With in-house, direct UGC experience and hands-on social expertise, we know how to make content that feels native to the platform, not like another ad. Every piece is built with clarity, creativity, and care - because great content isn’t just made, it’s cultivated.
            </p>
            
            <p 
              className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[18px] leading-relaxed text-left"
              style={{
               
                fontWeight: 400,
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
        <div className="mt-6 sm:mt-8 md:mt-16 px-2 sm:px-0 w-full mx-auto">
          <div className="w-full h-60 sm:h-60 md:h-72 lg:h-80 xl:h-96 2xl:h-[30rem] overflow-hidden">
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