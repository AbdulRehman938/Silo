import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ContentAndDone() {
  return (
    <div className="mx-auto overflow-hidden max-w-[100vw]">
      {/* Desktop view (hidden on mobile) */}
      <div className="hidden md:block 2xl:mx-16">
        <div className="flex justify-center gap-[18%] items-center w-full mx-28 md:mx-10 ">
          <h2 className="text-2xl lg:text-5xl xl:text-6xl md:text-4xl xl:w-[60rem] 2xl:text-7xl font-semibold tracking-tight text-black w-[28rem] 2xl:w-full lg:w-[35rem]">
            This is simply <br /> what we do
          </h2>
          <div className="text-sm lg:text-xs xl:text-base xl:mr-52 font-bold leading-10 text-black/80 2xl:text-xl md:text-xs w-full">
            <span>
              We make content people stop for.<br />
              <span style={{ display: 'inline-block', marginTop: '1em' }}>
                Strategy first. Design that bites. Delivery that doesn’t miss.
              </span>
            </span>
          </div>
        </div>
  <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 items-start mx-28 md:mx-10">
          <article className="w-full flex flex-col gap-8 md:gap-6">
            <div className="overflow-hidden rounded-md w-auto h-[40rem] md:h-[400px] lg:h-[30rem] 2xl:max-h-[40rem]">
              <img
                src="/first.png"
                alt="Social Strategy & Management"
                className="block h-full w-full object-fill"
              />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] md:text-3xl lg:text-[32px] leading-[130%] tracking-normal text-black">
              Social Strategy & Management
            </h3>
            <p className="mt-2 font-dm font-bold text-[16px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal text-black">
              We map your audience, set a plan, and run the feed. Clear pillars,
              weekly calendars, and fast creative sprints. No filler, just posts
              that earn their place.
            </p>
          </article>

          <article className="w-full flex flex-col gap-8 md:gap-6 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-20">
            <div className="overflow-hidden rounded-md w-auto h-[20rem] md:h-[320px] lg:h-[30rem]">
              <img
                src="/second.png"
                alt="UGC Creator Network"
                className="block h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] md:text-3xl lg:text-[32px] leading-[130%] tracking-normal text-black">
              UGC Creator Network
            </h3>
            <p className="mt-2 font-dm font-bold text-[16px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal text-black">
              Real faces. Real reach. We brief, source, and direct vetted
              creators across regions. You get a steady pipeline of native video
              that feels like the platform, not an ad.
            </p>
          </article>

          <article className="w-full md:col-span-2 lg:col-span-1 flex md:justify-center lg:justify-end 2xl:ml-0 lg:mt-32 xl:mt-40 2xl:mt-60 lg:ml-[14rem] xl:ml-0">
            <div className="w-full flex flex-col gap-8 md:gap-6 md:mt-0">
              <div className="overflow-hidden rounded-md w-auto h-[20rem] md:h-[320px] lg:h-[25rem]">
                <img
                  src="/third.png"
                  alt="Design + Motion"
                  className="block h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-epilogue font-bold text-[32px] md:text-3xl lg:text-[32px] leading-[130%] tracking-normal text-black">
                Design + Motion
              </h3>
              <p className="mt-2 font-dm font-bold text-[16px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal text-black">
                Sharp branding, scroll‑stopping graphics, and motion that moves
                the story. Titles that hit, captions that carry, and edits that
                keep the thumbs still.
              </p>
            </div>
          </article>
        </div>
           <div id="line" className="w-full h-[0.1rem] bg-black mt-24 mb-40 2xl:mt-40"></div>
 

        <div id="done" className="w-full min-h-screen py-10 px-16">
          <h2 className="text-7xl font-semibold tracking-tight text-black mb-4">
            Stuff we’ve done
          </h2>
          <p className="text-lg text-black mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

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
                <h3 className="text-4xl font-bold text-black">
                  Smoothie Smash
                </h3>
                <p className="text-xl text-black font-bold">Food & Drink</p>
                <p className="text-lg font-semibold text-black">
                  We built a TikTok-first launch campaign for this food
                  start-up. Fast cuts, bold graphics, and creator-led taste
                  tests turned into millions of views and a sell-out first week.
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
                <h3 className="text-4xl font-bold text-black">
                  Smoothie Smash
                </h3>
                <p className="text-xl text-black font-bold">Food & Drink</p>
                <p className="text-lg font-semibold text-black">
                  We built a TikTok-first launch campaign for this food
                  start-up. Fast cuts, bold graphics, and creator-led taste
                  tests turned into millions of views and a sell-out first week.
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
                  explainer animations to punchy LinkedIn posts, we built a
                  visual system that made analytics unmissable.
                </p>
                 <div className="flex space-x-2 mt-2">
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    Design
                  </span>
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    B2B
                  </span>
                  <span className="text-base font-bold whitespace-nowrap text-black p-2 bg-brand/20">
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
                  explainer animations to punchy LinkedIn posts, we built a
                  visual system that made analytics unmissable.
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

          <div className="flex justify-center">
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
      </div>

      {/* Mobile-only view (hidden on desktop) */}
      <div className="block md:hidden mt-[-5rem]">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-4">
          This is simply what we do
        </h2>
        <div className="text-sm text-black/80 mb-10">
          <p>We make content people stop for.</p>
          <p>Strategy first. Design that bites. Delivery that doesn’t miss.</p>
        </div>

        {/* Stacked mobile cards */}
        <div className="space-y-20">
          <div className="rounded-md overflow-hidden">
            <img
              src="/first.png"
              alt="Social Strategy"
              className="w-full h-96 object-cover"
            />
            <h3 className="mt-3 font-epilogue font-bold text-lg">
              Social Strategy & Management
            </h3>
            <p className="text-sm text-black/80">
              We map your audience, set a plan, and run the feed. Clear pillars
              and fast creative sprints.
            </p>
          </div>

          <div className="rounded-md overflow-hidden">
            <img
              src="/second.png"
              alt="UGC Creator Network"
              className="w-full h-48 object-cover"
            />
            <h3 className="mt-3 font-epilogue font-bold text-lg">
              UGC Creator Network
            </h3>
            <p className="text-sm text-black/80">
              Real faces. Real reach. We brief, source, and direct vetted
              creators for native video at scale.
            </p>
          </div>

          <div className="rounded-md overflow-hidden">
            <img
              src="/third.png"
              alt="Design + Motion"
              className="w-full h-60 object-cover"
            />
            <h3 className="mt-3 font-epilogue font-bold text-lg">
              Design + Motion
            </h3>
            <p className="text-sm text-black/80">
              Sharp branding, scroll‑stopping graphics, and motion that moves
              the story.
            </p>
          </div>
        </div>

        <div className="w-full h-1 bg-black my-12"></div>

        {/* Mobile Done Section */}
        <div id="done-mobile" className="w-full">
          <h2 className="text-4xl font-bold tracking-tight text-black mb-4">
            Stuff we've done
          </h2>
          <p className="text-base text-black mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="space-y-12">
            <div className="border-y-2 py-8 border-y-gray-800">
              <div className="w-full h-64 rounded-md mb-6">
                <img src="/Smoothie.png" alt="smoothie" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Smoothie Smash</h3>
                <p className="text-lg text-black font-bold">Food & Drink</p>
                <p className="text-base font-medium text-black">
                  We built a TikTok-first launch campaign for this food start-up.
                </p>
                <div className="flex space-x-2">
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">UGC</span>
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">TikTok</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 font-dm font-bold text-lg text-[#FF322E]">
                  <span>View Project</span>
                  <MdOutlineKeyboardArrowRight className="text-xl" />
                </a>
              </div>
            </div>

            <div className="border-b-2 relative top-[-2rem] py-8 border-b-gray-800">
              <div className="w-full h-64 rounded-md mb-6">
                <img src="/Lumen.png" alt="lumin solar" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Lumin Solar</h3>
                <p className="text-lg text-black font-bold">Energy</p>
                <p className="text-base font-medium text-black">
                  For this clean-tech brand we stripped out the jargon and made solar feel simple.
                </p>
                <div className="flex space-x-2">
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">Motion Design</span>
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">Strategy</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 font-dm font-bold text-lg text-[#FF322E]">
                  <span>View Project</span>
                  <MdOutlineKeyboardArrowRight className="text-xl" />
                </a>
              </div>
            </div>

            <div className="py-8 relative top-[-8rem]">
              <div className="w-full h-64 rounded-md mb-6">
                <img src="/SMART.png" alt="smart stats" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Smart Stats</h3>
                <p className="text-lg text-black font-bold">SaaS</p>
                <p className="text-base font-medium text-black">
                  We gave this data platform a face, not just numbers.
                </p>
                <div className="flex space-x-2">
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">Design</span>
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">B2B</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 font-dm font-bold text-lg text-[#FF322E]">
                  <span>View Project</span>
                  <MdOutlineKeyboardArrowRight className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[-5rem]">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-sm bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-brand">
              <span>View all</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}