import { useState } from "react";
import WhatSiloIs from "./WhatSiloIs";
import WhyUGC from "./WhyUGC";
import WhoWeLoveWorkingWith from "./WhoWeLoveWorkingWith";
import ThingsWeBelieveIn from "./ThingsWeBelieveIn";
import MindsInTheSilo from "./MindsInTheSilo";
import Section from "../Home/Section";
import { IoIosSend } from "react-icons/io";

const Hero = () => {
  const handleContactClick = () => {
    // Contact functionality - could be a modal, form, or navigation
    console.log("Contact action triggered");
  };

  const handleServicesClick = () => {
    // Navigate to services section
    console.log("Navigate to services");
  };

  return (
    <>
      {/* First Section - Hero */}
      <section
        className="min-h-screen flex items-center w-full justify-center px-3 sm:px-2 md:px-6 lg:px-8 pb-6 md:pb-12 lg:pb-16 overflow-hidden"
        aria-label="About Silo - Company introduction"
      >
        <div className="flex flex-col justify-between xl:grid xl:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-full mx-auto w-full items-centersm:mt-5 xs:mt-10">
          {/* Text Content Area */}
          <div
            className="flex flex-col h-full sm:mt-5 xs:mt-10 justify-between space-y-4 sm:space-y-6 md:space-y-8 order-2 xl:order-1 xl:pr-6 w-full"
            role="main"
          >
            {/* Main Heading - Zoom & Small Laptop Optimized */}
            <h1
              className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] leading-tight text-center xl:text-left px-2 sm:px-0"
              style={{
                opacity: 1,
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              We are the <span className="text-red-500">Silo</span>, get to know
              us.
            </h1>

            {/* Text and Buttons Container */}
            <div className="flex flex-col gap-3 sm:gap-4 items-start w-full px-2 sm:px-0">
              {/* Brand Statement - Zoom & Small Laptop Optimized */}
              <div>
                <p
                  className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] leading-relaxed text-center xl:text-left max-w-full xl:max-w-lg px-2 sm:px-0"
                  style={{
                    opacity: 1,
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
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
              <div className="flex flex-row gap-3 sm:gap-4 items-start w-full sm:w-auto lg:mx-auto md:mx-auto xl:mx-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FF322E] h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-10 group-hover:rotate-45 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Let's chat
                  </span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-brand relative overflow-hidden group"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <IoIosSend className="block text-brand w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-12 group-hover:rotate-45 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all whitespace-nowrap duration-300 ease-in-out text-base group-hover:translate-x-40">
                    Our services
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content Area - Zoom & Small Laptop Optimized */}
          <div className="flex flex-col lg:flex-col xl:flex-row lg:mt-10 items-center justify-center xl:justify-end gap-3 sm:gap-4 md:gap-6 order-1 xl:order-2 w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-none mx-auto xl:mx-0 md:mt-10">
            {/* Primary Image - Zoom & Small Laptop Optimized */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-auto xl:max-w-[400px] 2xl:max-w-[438px] flex-shrink-0">
              <img
                src="/About1.png"
                alt="Silo team member showcasing brand identity"
                className="w-full h-auto rounded-2xl object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-none"
                style={{
                  opacity: 1,
                }}
              />
            </div>

            {/* Secondary Image - Zoom & Small Laptop Optimized */}
            <div className="flex flex-col items-center lg:items-center xl:self-start xl:mt-8 2xl:mt-16 border-white bg-white">
              <img
                src="/About2.png"
                alt="The Silo brand representation"
                className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-[328px] h-auto rounded-lg object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] lg:block xl:min-h-[200px] 2xl:max-h-none border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatSiloIs />
      <WhyUGC />
      <WhoWeLoveWorkingWith />
      <ThingsWeBelieveIn /> 
      <MindsInTheSilo />
      <Section />
    </>
  );
};

export default Hero;
