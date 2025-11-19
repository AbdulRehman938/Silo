import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {

  return (
    <>
      {/* First Section - Hero */}
      <section
        className="my-20 flex items-center w-full justify-start px-3 sm:px-2 md:px-6 lg:px-8 overflow-hidden md:h-[calc(100vh-80px)]"
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
              className="font-bold text-black text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[56px] leading-3 text-left px-2 sm:px-0 mt-4 sm:mt-0"
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
                  className="text-black text-sm sm:text-base md:text-base lg:text-lg xl:text-[16px] leading-relaxed text-left max-w-full xl:max-w-lg px-2 sm:px-0 font-epilogue"
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
                  className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[48px] px-5 py-2 text-xs font-bold tracking-wide text-white border-transparent relative overflow-hidden group"
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
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-[48px] px-5 py-2 text-xs font-bold tracking-wide text-brand relative overflow-hidden group"
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
          <div className="flex flex-col mt-6 md:mt-0 md:flex-row lg:flex-row xl:flex-row items-center md:items-start xl:items-start justify-start xl:justify-end gap-2 sm:gap-3 md:gap-4 order-2 xl:order-2 w-full sm:max-w-xl md:max-w-none lg:max-w-none xl:max-w-none xl:mx-0 ">
              {/* Secondary Image - Zoom & Small Laptop Optimized */}
              <div className="order-2 md:order-1 w-full max-w-full sm:max-w-sm md:w-1/2 md:max-w-none lg:w-1/2 xl:w-auto xl:max-w-[350px] 2xl:max-w-[400px] flex-shrink-0">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717241/About1_t6qyw0.png"
                alt="Silo team member showcasing brand identity"
                className="w-full h-auto object-cover max-h-[300px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[450px] 2xl:max-h-[500px]"
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
                className="w-48 sm:w-64 md:w-40 lg:w-48 xl:w-56 2xl:w-[280px] h-auto object-fill max-h-[180px] sm:max-h-[220px] md:max-h-[250px] lg:max-h-[300px] lg:block xl:min-h-[180px] 2xl:max-h-[320px] border-white"
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
