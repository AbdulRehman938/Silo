import React from "react";
import { IoIosSend } from "react-icons/io";

const Section = () => {
  return (
    <section className="mx-auto max-w-[120rem] px-4 py-12">
  {/* Default view: hidden on mobile, visible on lg+ (md has its own layout) */}
  <div className="hidden md:hidden lg:block">
        <div className="border-2 border-gray-600 rounded-sm overflow-hidden mx-28">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left column - content */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-black mb-6">
                Ready when you are.
              </h1>
              <p className="text-sm md:text-xl text-gray-700 font-semibold mb-8 max-w-2xl">
                Whether you’re a brand looking for scroll-stopping content or a
                creator ready to join our roster, this is where it starts.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FF322E] h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-12 group-hover:rotate-45 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-40">
                    For Brands
                  </span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-brand relative overflow-hidden group"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <IoIosSend className="block text-brand w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-10 group-hover:rotate-45 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
                    View all
                  </span>
                </a>
              </div>
            </div>

            {/* Right column - empty space for image */}
            <div className="w-full md:w-1/2 bg-gray-50 md:min-h-[280px]">
              <img src="/section.png" alt="section" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* MD-only view: show this block only on md screens (>=md and <lg).
          Here the right image-placeholder appears on top and the content below. */}
      <div className="hidden md:block lg:hidden">
        <div className="border-2 border-gray-600 py-6 rounded-sm overflow-hidden">
          <div className="flex flex-col items-stretch">
            {/* Top: right image placeholder (appears on top for md view) */}
            <div className="w-full bg-gray-50 h-52 md:h-64 lg:h-72 px-10">
              <img src="/section.png" alt="section" className="w-full h-full object-cover" />
            </div>

            {/* Bottom: content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">Ready when you are.</h2>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                Whether you’re a brand looking for scroll-stopping content or a
                creator ready to join our roster, this is where it starts.
              </p>

              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center justify-center bg-[#FF322E] text-white px-4 py-2 rounded">For Brands</a>
                <a href="#" className="inline-flex items-center justify-center border border-[#FF322E] text-[#FF322E] px-4 py-2 rounded">For Creators</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only view: show only on mobile (<md). Content on top, image on bottom. */}
      <div className="block md:hidden">
        <div className="border-2 border-gray-600 py-6 rounded-sm overflow-hidden mt-[-5rem]">
          <div className="flex flex-col items-stretch">
            {/* Top: content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-black mb-3">Ready when you are.</h2>
              <p className="text-sm text-gray-700 mb-4">
                Whether you’re a brand looking for scroll-stopping content or a
                creator ready to join our roster, this is where it starts.
              </p>

              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center justify-center bg-[#FF322E] text-white px-4 py-2 rounded">For Brands</a>
                <a href="#" className="inline-flex items-center justify-center border border-[#FF322E] text-[#FF322E] px-4 py-2 rounded">For Creators</a>
              </div>
            </div>

            {/* Bottom: image placeholder */}
            <div className="w-full bg-gray-50 h-44 px-5">
              <img src="/section.png" alt="section" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
