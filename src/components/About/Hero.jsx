import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {

  return (
    <>
      {/* First Section - Hero */}
      <section
        className="mt-20 mb-10 flex items-start w-full justify-start px-3 sm:px-2 md:px-6 lg:px-8 pb-6 md:pb-12 lg:pb-16 overflow-hidden"
        aria-label="About Silo - Company introduction"
      >
        <div className="flex flex-col justify-between xl:grid xl:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-full mx-auto w-full items-center mt-0 lg:mt-16 md:mt-10">
          {/* Text Content Area */}
          <div
            className="flex flex-col h-full justify-start xl:justify-between space-y-4 sm:space-y-6 md:space-y-8 order-1 xl:order-1 xl:pr-6 w-full items-start"
            role="main"
          >
            {/* Main Heading - Zoom & Small Laptop Optimized */}
            <h1
              className="font-bold text-black text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[56px] leading-3 text-left px-2 sm:px-0 mt-6 sm:mt-0"
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
            <div className="flex flex-col gap-3 sm:gap-4 items-start w-full px-2 sm:px-0">
              {/* Brand Statement - Zoom & Small Laptop Optimized */}
              <div>
                <p
                  className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] leading-relaxed text-left max-w-full xl:max-w-lg px-2 sm:px-0 font-epilogue"
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
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[55px] px-6 py-3 text-xs font-bold tracking-wide text-white border-transparent relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <FaChevronRight   className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-3 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Let's chat
                  </span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-xs font-bold tracking-wide text-brand relative overflow-hidden group"
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <FaChevronRight   className="text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-3 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Our services
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content Area - Zoom & Small Laptop Optimized */}
          <div className="flex flex-col mt-10 md:mt-0 md:flex-row lg:flex-row xl:flex-row items-center md:items-start xl:items-start justify-start xl:justify-end gap-3 sm:gap-4 md:gap-6 order-2 xl:order-2 w-full sm:max-w-xl md:max-w-none lg:max-w-none xl:max-w-none xl:mx-0 ">
              {/* Secondary Image - Zoom & Small Laptop Optimized */}
              <div className="order-2 md:order-1 w-full max-w-full sm:max-w-sm md:w-1/2 md:max-w-none lg:w-1/2 xl:w-auto xl:max-w-[400px] 2xl:max-w-[438px] flex-shrink-0">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717241/About1_t6qyw0.png"
                alt="Silo team member showcasing brand identity"
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[350px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[550px] 2xl:max-h-none"
                loading="lazy"
                style={{
                  opacity: 1,
                }}
              />
            </div>

              {/* Primary Image - Zoom & Small Laptop Optimized */}
              <div className="order-1 md:order-2 flex flex-col items-start md:items-center lg:items-center xl:items-start md:w-auto lg:w-auto xl:w-auto border-white bg-white">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/About2_gof6gm.png"
                alt="The Silo brand representation"
                className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-[328px] h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] lg:block xl:min-h-[200px] 2xl:max-h-none border-white"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
