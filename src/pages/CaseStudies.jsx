import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section2 from "../components/About/Section2";

const CaseStudies = () => {
  return (
    <div className="max-w-[90vw] h-auto flex flex-col justify-start items-center mx-auto">
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
                  className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group"
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
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-brand relative overflow-hidden group"
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
                src="/studies1.png"
                alt="Silo team member showcasing brand identity"
                className="w-full h-auto object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-none"
                style={{
                  opacity: 1,
                }}
              />
            </div>

            {/* Secondary Image - Zoom & Small Laptop Optimized */}
            <div className="flex flex-col items-center lg:items-center xl:self-start xl:mt-8 2xl:mt-16 border-white bg-white">
              <img
                src="/studies2.png"
                alt="The Silo brand representation"
                className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-[328px] h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] lg:block xl:min-h-[200px] 2xl:max-h-none border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="done" className="w-full min-h-screen py-20">
        <div className="space-y-20">
          {/* First project */}
          <div className="hidden lg:flex items-center justify-around space-x-20 border-y-[0.1rem] py-16 border-y-gray-800 group relative">
            <div className="w-1/3 h-96 rounded-md transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="/Smoothie.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-gray-100 rounded-xl overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="/smoothie-hover.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smoothie Smash</h3>
              <p className="text-xl text-black font-bold">Food & Drink</p>
              <p className="text-lg font-semibold text-black">
                We built a TikTok-first launch campaign for this food start-up.
                Fast cuts, bold graphics, and creator-led taste tests turned
                into millions of views and a sell-out first week.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  UGC
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  TikTok
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 border-y-2 py-12 border-y-gray-800 group relative">
            <div className="w-1/2 h-96 rounded-md relative">
              <img
                src="/Smoothie.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-gray-100  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 rounded-xl overflow-hidden group-hover:rotate-0">
                <img
                  src="/smoothie-hover.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Placeholder for image */}
            <div className="w-[80%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smoothie Smash</h3>
              <p className="text-xl text-black font-bold">Food & Drink</p>
              <p className="text-lg font-semibold text-black">
                We built a TikTok-first launch campaign for this food start-up.
                Fast cuts, bold graphics, and creator-led taste tests turned
                into millions of views and a sell-out first week.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  UGC
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  TikTok
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Second project */}
          <div className="hidden lg:flex items-center justify-around space-x-20 border-b-2 py-16 border-b-gray-800 group relative">
            <div className="w-1/3 h-96 rounded-md transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="/Lumen.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-gray-100 rounded-xl overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="/lumer-hover.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 border-b-2 py-12 border-b-gray-800 group relative top-[-5rem]">
            <div className="w-1/2 h-96 rounded-md relative">
              <img
                src="/Lumen.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-gray-100  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 rounded-xl overflow-hidden group-hover:rotate-0">
                <img
                  src="/lumer-hover.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Placeholder for image */}
            <div className="w-[80%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Third project */}
          <div className="hidden lg:flex items-center justify-around space-x-20 py-16  group relative">
            <div className="w-1/3 h-96 rounded-md transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="/SMART.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-gray-100 rounded-xl overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="/stats-hover.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 py-12 group relative top-[-10rem]">
            <div className="w-1/2 h-96 rounded-md relative">
              <img
                src="/SMART.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-gray-100  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 rounded-xl overflow-hidden group-hover:rotate-0">
                <img
                  src="/stats-hover.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Placeholder for image */}
            <div className="w-[80%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {/* First project */}
          <div className="hidden lg:flex items-center justify-around space-x-20 border-y-[0.1rem] py-16 border-y-gray-800 group relative">
            <div className="w-1/3 h-96 rounded-md transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="/Smoothie.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-gray-100 rounded-xl overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="/smoothie-hover.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smoothie Smash</h3>
              <p className="text-xl text-black font-bold">Food & Drink</p>
              <p className="text-lg font-semibold text-black">
                We built a TikTok-first launch campaign for this food start-up.
                Fast cuts, bold graphics, and creator-led taste tests turned
                into millions of views and a sell-out first week.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  UGC
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  TikTok
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 border-y-2 py-12 border-y-gray-800 group relative">
            <div className="w-1/2 h-96 rounded-md relative">
              <img
                src="/Smoothie.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-gray-100  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 rounded-xl overflow-hidden group-hover:rotate-0">
                <img
                  src="/smoothie-hover.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Placeholder for image */}
            <div className="w-[80%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smoothie Smash</h3>
              <p className="text-xl text-black font-bold">Food & Drink</p>
              <p className="text-lg font-semibold text-black">
                We built a TikTok-first launch campaign for this food start-up.
                Fast cuts, bold graphics, and creator-led taste tests turned
                into millions of views and a sell-out first week.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  UGC
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  TikTok
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Second project */}
          <div className="hidden lg:flex items-center justify-around space-x-20 border-b-2 py-16 border-b-gray-800 group relative">
            <div className="w-1/3 h-96 rounded-md transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="/Lumen.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-gray-100 rounded-xl overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="/lumer-hover.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 border-b-2 py-12 border-b-gray-800 group relative top-[-5rem]">
            <div className="w-1/2 h-96 rounded-md relative">
              <img
                src="/Lumen.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-gray-100  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 rounded-xl overflow-hidden group-hover:rotate-0">
                <img
                  src="/lumer-hover.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Placeholder for image */}
            <div className="w-[80%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Third project */}
          <div className="hidden lg:flex items-center justify-around space-x-20 py-16  group relative">
            <div className="w-1/3 h-96 rounded-md transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="/SMART.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-gray-100 rounded-xl overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="/stats-hover.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 py-12 group relative top-[-10rem]">
            <div className="w-1/2 h-96 rounded-md relative">
              <img
                src="/SMART.png"
                alt="smoothie"
                className="w-full h-full object-cover"
              />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-gray-100  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 rounded-xl overflow-hidden group-hover:rotate-0">
                <img
                  src="/stats-hover.png"
                  alt="smoothie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Placeholder for image */}
            <div className="w-[80%] flex flex-col justify-center items-start gap-4">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
    </div>
  );
};

export default CaseStudies;
