import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ContentAndDone() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer = null;
    // store pending timeout ids per element so we can cancel if they leave early
    const pending = new WeakMap();

    const setup = () => {
      // Only enable viewport-reveal on tablet sizes (md >=768 && < lg 1024)
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const els = Array.from(document.querySelectorAll('.hover-placeholder'));

      // cleanup any previous observer/timeouts
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      // if not tablet, ensure placeholders are hidden and clear timeouts
      if (!isTablet) {
        els.forEach((el) => {
          if (pending.has(el)) {
            clearTimeout(pending.get(el));
            pending.delete(el);
          }
          el.classList.remove('opacity-100', 'scale-100', 'rotate-0', 'pointer-events-auto', 'in-view');
          el.classList.add('opacity-0', 'scale-90', 'rotate-6', 'pointer-events-none');
        });
        return;
      }

      // Tablet: create observer that delays reveal by 1s
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting) {
              // if already visible, do nothing
              if (el.classList.contains('in-view')) return;
              // if there's already a pending timer, keep it
              if (pending.has(el)) return;
              const id = window.setTimeout(() => {
                el.classList.add('opacity-100', 'scale-100', 'rotate-0', 'pointer-events-auto', 'in-view');
                el.classList.remove('opacity-0', 'scale-90', 'rotate-6', 'pointer-events-none');
                pending.delete(el);
              }, 1000);
              pending.set(el, id);
            } else {
              // left viewport: cancel pending reveal (if any) and hide immediately
              if (pending.has(el)) {
                clearTimeout(pending.get(el));
                pending.delete(el);
              }
              el.classList.remove('opacity-100', 'scale-100', 'rotate-0', 'pointer-events-auto', 'in-view');
              el.classList.add('opacity-0', 'scale-90', 'rotate-6', 'pointer-events-none');
            }
          });
        },
        { threshold: 0 }
      );

      els.forEach((el) => observer.observe(el));
    };

    setup();
    window.addEventListener('resize', setup);
    return () => {
      window.removeEventListener('resize', setup);
      if (observer) observer.disconnect();
      // clear any pending timeouts
      // iterate over elements again (WeakMap doesn't allow iteration) - select elements
      const els = Array.from(document.querySelectorAll('.hover-placeholder'));
      els.forEach((el) => {
        if (pending.has(el)) {
          clearTimeout(pending.get(el));
          pending.delete(el);
        }
      });
    };
  }, []);
  return (
    <div className="pt-0 mx-auto px-0 max-w-[1280px] md:pb-28 ">
      {/* Desktop view (hidden on mobile) */}
      <div className="hidden md:block overflow-visible max-w-[1280px]">
        <div className="flex justify-center relative items-start w-full mx-auto">
          <h2 className="mr-auto text-2xl lg:text-5xl xl:text-6xl md:text-6xl xl:w-[30rem] 2xl:text-7xl font-bold tracking-tight text-black w-[28rem] 2xl:w-[28rem] lg:w-[22rem]">
            This is simply <br /> what we do
          </h2>
         
        </div>
        <div className="h-fit overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mx-auto md:mt-0">
          <article className="w-full flex flex-col gap-8 mt-0 pt-0 md:gap-6 ">
            <div className="overflow-hidden w-auto h-[20rem] md:h-[320px] lg:h-[25rem] lg:mt-20">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717232/first_dyyzet.png"
                alt="Social Strategy & Management"
                className="block h-full w-full object-fill" loading="lazy" />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] md:text-3xl lg:text-[32px] leading-[130%] tracking-normal text-black">
              Social Strategy & Management
            </h3>
            <p className="mt-2 font-semibold text-[16px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal text-black">
             Your brand deserves more than random posts and recycled trends. We start with strategy — mapping your audience, defining content pillars, and building weekly calendars that give your feed structure and purpose. Then we bring it to life with fast-paced creative sprints and posts designed to connect, not just fill space. <span className="font-bold">Every piece earns its place. Every post builds your brand.</span> 
            </p>
          </article>

          <article className="w-full flex flex-col gap-8 md:gap-6">
            <div className="overflow-hidden w-auto h-[20rem] md:h-[320px] lg:h-[15rem] lg:mt-40">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717288/second_wt2ss3.png"
                alt="UGC Creator Network"
                className="block h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] md:text-3xl lg:text-[32px] leading-[130%] tracking-normal text-black">
              UGC Creator Network
            </h3>
            <p className="mt-2 font-semibold text-[16px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal text-black">
              People connect with people and that’s why we tap into a global network of vetted creators to put real faces and real voices behind your brand. We handle the briefs, sourcing, and direction so you get a steady flow of native videos that feel at home on the platform, not like another ad. <span className="font-bold">Authentic content. Real reach. Built for the scroll.</span> 
            </p>
          </article>

          <article className="w-full md:col-span-2 lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-full md:w-2/3 lg:w-auto flex flex-col gap-8 md:gap-6">
              <div className="overflow-hidden w-auto h-[20rem] md:h-[320px] lg:h-[20rem] lg:mt-60">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717293/third_gwfnbk.png"
                  alt="Design + Motion"
                  className="block h-full w-full object-cover" loading="lazy" />
              </div>
              <h3 className="mt-4 font-epilogue font-bold text-[32px] md:text-3xl lg:text-[32px] leading-[130%] tracking-normal text-black">
                Design + Motion
              </h3>
              <p className="mt-2 font-semibold text-[16px] md:text-[16px] lg:text-[16px] leading-[150%] tracking-normal text-black">
              From stunning pitch decks and polished documents to bold web graphics and social posts, we design content that makes your brand look as good as it sounds. And when stills aren’t enough, we bring it all to life with animation and video production that moves the story forward. <span className="font-bold">Beautiful design. Seamless motion. Creative built to stand out on every screen.</span>
              </p>
            </div>
          </article>
        </div>
        <div className="w-[100vw] absolute h-[0.08rem] right-5 bg-black my-20 "></div>

        <div id="done" className="w-full min-h-screen pb-10 relative top-40">
          <h2 className="text-7xl font-bold tracking-tight text-black mb-4">
            Stuff we’ve done
          </h2>
          <p className="text-lg text-black mb-10 font-bold mt-10">
           Just some of the brands we’ve worked with
          </p>

          <div className="space-y-20 w-full mt-28">
            {/* First project */}
            <div
              className="hidden lg:flex items-center justify-around space-x-20 border-y-[0.1rem] py-16 border-y-gray-800 group relative cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/1';
              }}
              onClick={(e) => {
                if (e.target.closest('a')) return;
                window.location.href = '/case-study/1';
              }}
            >
              <div className="w-1/3 h-96 transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute hover-placeholder left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
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
                  href="/case-study/1"
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

            <div
              className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 border-y-2 py-12 border-y-gray-800 group relative cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/1';
              }}
              onClick={(e) => {
                if (e.target.closest('a')) return;
                window.location.href = '/case-study/1';
              }}
            >
              <div className="w-1/2 h-96 relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
                {/* Hover image placeholder */}
                <div className="absolute hover-placeholder -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                    alt="smoothie"
                    className="w-full h-full object-cover" loading="lazy" />
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
                  href="/case-study/1"
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
            <div
              className="hidden lg:flex items-center justify-around space-x-20 border-b-[0.1rem] pb-16 border-b-black group relative cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/2';
              }}
              onClick={(e) => {
                if (e.target.closest('a')) return;
                window.location.href = '/case-study/2';
              }}
            >
              <div className="w-1/3 h-96 transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute hover-placeholder left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
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
                  href="/case-study/2"
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

            <div
              className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 border-b-2 py-12 border-b-gray-800 group relative top-[-5rem] cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/2';
              }}
              onClick={(e) => {
                if (e.target.closest('a')) return;
                window.location.href = '/case-study/2';
              }}
            >
              <div className="w-1/2 h-96 relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
                {/* Hover image placeholder */}
                <div className="absolute hover-placeholder -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                    alt="smoothie"
                    className="w-full h-full object-cover" loading="lazy" />
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
                  href="/case-study/2"
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
            <div
              className="hidden lg:flex items-center justify-around space-x-20 pb-16 group relative cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/3';
              }}
              onClick={(e) => {
                if (e.target.closest('a')) return;
                window.location.href = '/case-study/3';
              }}
            >
              <div className="w-1/3 h-96 transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
              <div className="absolute hover-placeholder left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
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
                  <span className="text-base font-bold text-black p-2 bg-brand/20">
                    LinkedIn Content
                  </span>
                </div>
                <a
                  href="/case-study/3"
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

            <div
              className="hidden md:block md:flex-col-reverse lg:hidden items-center w-full mx-auto justify-center space-x-10 pt-12 group relative top-[-10rem] cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/3';
              }}
              onClick={(e) => {
                if (e.target.closest('a')) return;
                window.location.href = '/case-study/3';
              }}
            >
              <div className="w-1/2 h-96 relative">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
                {/* Hover image placeholder */}
                <div className="absolute hover-placeholder -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                  <img
                    src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                    alt="smoothie"
                    className="w-full h-full object-cover" loading="lazy" />
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
                  href="/case-study/3"
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

          <div className="flex justify-center md:mt-10">
            <a
              href="case-studies"
              className="inline-flex items-center justify-center gap-2  bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-brand relative overflow-hidden group"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight   className="text-brand w-4 h-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
                View all
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile-only view (hidden on desktop) */}
      <div className="block md:hidden mt-[-1rem] px-[4vw]">
        <h2 className="text-4xl font-bold tracking-tight text-black mb-[3rem]">
          This is simply what we do
        </h2>
     

        {/* Stacked mobile cards */}
        <div className="space-y-20">
          <div
            className=" overflow-hidden cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.location.href = '/case-study/1';
            }}
            onClick={(e) => {
              if (e.target.closest && e.target.closest('a')) return;
              window.location.href = '/case-study/1';
            }}
          >
            <img
              src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717232/first_dyyzet.png"
              alt="Social Strategy"
              className="w-full h-[28rem] object-cover" loading="lazy" />
            <h3 className="mt-3 font-epilogue font-bold text-lg">
              Social Strategy & Management
            </h3>
            <p className="text-sm text-black font-bold leading-relaxed">
              Your brand deserves more than random posts and recycled trends. We start with strategy — mapping your audience, defining content pillars, and building weekly calendars that give your feed structure and purpose. Then we bring it to life with fast-paced creative sprints and posts designed to connect, not just fill space. <span className="font-bold">Every piece earns its place. Every post builds your brand.</span> 
            </p>
          </div>

          <div
            className="overflow-hidden cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.location.href = '/case-studies';
            }}
            onClick={(e) => {
              if (e.target.closest && e.target.closest('a')) return;
              window.location.href = '/case-studies';
            }}
          >
            <img
              src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717288/second_wt2ss3.png"
              alt="UGC Creator Network"
              className="w-full h-64 object-cover" loading="lazy" />
            <h3 className="mt-3 font-epilogue font-bold text-lg">
              UGC Creator Network
            </h3>
            <p className="text-sm text-black/80 leading-relaxed">
             People connect with people and that's why we tap into a global network of vetted creators to put real faces and real voices behind your brand. We handle the briefs, sourcing, and direction so you get a steady flow of native videos that feel at home on the platform, not like another ad. <span className="font-bold">Authentic content. Real reach. Built for the scroll.</span> 
            </p>
          </div>

          <div
            className=" overflow-hidden cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.location.href = '/case-studies';
            }}
            onClick={(e) => {
              if (e.target.closest && e.target.closest('a')) return;
              window.location.href = '/case-studies';
            }}
          >
            <img
              src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717293/third_gwfnbk.png"
              alt="Design + Motion"
              className="w-full h-72 object-cover" loading="lazy" />
            <h3 className="mt-3 font-epilogue font-bold text-lg">
              Design + Motion
            </h3>
            <p className="text-sm text-black/80 leading-relaxed">
              From stunning pitch decks and polished documents to bold web graphics and social posts, we design content that makes your brand look as good as it sounds. And when stills aren't enough, we bring it all to life with animation and video production that moves the story forward. <span className="font-bold">Beautiful design. Seamless motion. Creative built to stand out on every screen.</span>
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black my-12"></div>

        {/* Mobile Done Section */}
        <div id="done-mobile" className="w-full">
          <h2 className="text-4xl font-bold tracking-tight text-black mb-4 mt-20">
            Stuff we've done
          </h2>
          <p className="text-base text-black mb-16 font-bold">
            Just some of the brands we’ve worked with
          </p>

          <div className="space-y-12">
            <div
              className="border-y py-8 border-y-black cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/1';
              }}
              onClick={(e) => {
                if (e.target.closest && e.target.closest('a')) return;
                window.location.href = '/case-study/1';
              }}
            >
              <div className="w-full h-80 mb-0">
                <img src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png" alt="smoothie" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Smoothie Smash</h3>
                <p className="text-lg text-black font-bold">Food & Drink</p>
                <p className="text-base font-medium text-black leading-relaxed">
                  We built a TikTok-first launch campaign for this food start-up.
                  Fast cuts, bold graphics, and creator-led taste tests turned
                  into millions of views and a sell-out first week.
                </p>
                <div className="flex space-x-2">
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">UGC</span>
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">TikTok</span>
                </div>
                <a href="/case-study/1" className="inline-flex items-center gap-2 font-dm font-bold text-lg text-[#FF322E]">
                  <span>View Project</span>
                  <MdOutlineKeyboardArrowRight className="text-xl" />
                </a>
              </div>
            </div>

            <div
              className="border-b relative top-[-2rem] py-8 border-b-black cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/2';
              }}
              onClick={(e) => {
                if (e.target.closest && e.target.closest('a')) return;
                window.location.href = '/case-study/2';
              }}
            >
              <div className="w-full h-80">
                <img src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png" alt="lumin solar" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Lumin Solar</h3>
                <p className="text-lg text-black font-bold">Energy</p>
                <p className="text-base font-medium text-black leading-relaxed">
                  For this clean-tech brand we stripped out the jargon and made
                  solar feel simple. Scroll-stopping motion and sharp messaging
                  powered record inbound leads.
                </p>
                <div className="flex space-x-2">
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">Motion Design</span>
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">Strategy</span>
                </div>
                <a href="/case-study/2" className="inline-flex items-center gap-2 font-dm font-bold text-lg text-[#FF322E]">
                  <span>View Project</span>
                  <MdOutlineKeyboardArrowRight className="text-xl" />
                </a>
              </div>
            </div>

            <div
              className="pt-8 relative top-[-8rem] cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.target.closest('a')) window.location.href = '/case-study/3';
              }}
              onClick={(e) => {
                if (e.target.closest && e.target.closest('a')) return;
                window.location.href = '/case-study/3';
              }}
            >
              <div className="w-full h-80">
                <img src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png" alt="smart stats" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Smart Stats</h3>
                <p className="text-lg text-black font-bold">SaaS</p>
                <p className="text-base font-medium text-black leading-relaxed">
                  We gave this data platform a face, not just numbers. From
                  explainer animations to punchy LinkedIn posts, we built a visual
                  system that made analytics unmissable.
                </p>
                <div className="flex space-x-2">
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">Design</span>
                  <span className="text-sm font-bold text-black p-2 bg-brand/20">B2B</span>
                </div>
                <a href="/case-study/3" className="inline-flex items-center gap-2 font-dm font-bold text-lg text-[#FF322E]">
                  <span>View Project</span>
                  <MdOutlineKeyboardArrowRight className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[-5rem]">
            <a href="case-studies" className="inline-flex items-center justify-center gap-2  bg-transparent border-2 border-brand h-[55px] px-6 py-3 text-base font-extrabold uppercase tracking-wide text-brand">
              <span>View all</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

