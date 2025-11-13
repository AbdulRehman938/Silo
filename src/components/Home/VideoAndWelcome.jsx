import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import VideoModal from "../Common/VideoModal";
import demoVideo from "../../DemoVideo/Demo-Video.mp4";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { WelcomeLetters } from "./WelcomeLetters";
import LiquidImage from "./LiquidImage";

export default function VideoAndWelcome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      {/* Mobile-only simplified block: visible on small screens only
          Animated letters placed BEFORE the content on mobile as requested. */}

      <div className="relative w-full overflow-hidden mt-6 md:mt-10 lg:mt-14">
        <div className="h-80 lg:h-[80vh] md:h-[60vh] relative">
          <img
            src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717240/image_re2b0o.png"
            alt="Showcase"
            className="block w-full h-full object-cover select-none"
          />

          {/* semi-transparent black cover */}
          <div className="absolute inset-0 bg-black/60" aria-hidden />

          {/* centered play CTA */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4 text-start text-white px-4">
              <button
                type="button"
                aria-label="Play showreel"
                onClick={handleOpen}
                className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black shadow-lg hover:bg-brand hover:scale-110"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-0.5"
                >
                  <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                </svg>
              </button>

              <h3 className="text-lg md:text-2xl font-bold leading-tight">
                Watch our showreel <br /> 2015–2025
              </h3>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={open}
        onClose={handleClose}
        src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4"
        title={"The Silo - Showreel"}
        byline={"The Silo Creative"}
        poster={"https://res.cloudinary.com/di9tb45rl/image/upload/v1762717240/image_re2b0o.png"}
      />

      <div className="hidden md:block relative mx-auto lg:max-w-[80vw] px-3 mt-10 md:mt-14 lg:mt-20 md:max-w-[95vw] md:px-0">
        <div id="welcome-parent-div" className="relative flex items-end justify-between h-[90vh] lg:h-[70vh] xl:h-[80vh] md:h-[60vh] 2xl:h-[90vh]">
          {/* Left text div - aligned at bottom left */}
          <div className="relative z-10 self-end pb-4 max-w-[38%] md:max-w-[45%] flex flex-col justify-end gap-6 md:gap-2">
            <p className="text-base md:text-base lg:text-xl font-semibold md:tracking-tighter tracking-tight text-black">
              We’re the creative agency for brands that want more than filler
              posts or cookie–cutter campaigns.
            </p>
            <p className="text-xs md:text-xs lg:text-base leading-relaxed text-black/80">
              We create intentional, personality–driven content, from authentic
              creator videos to scroll–stopping social feeds – designed to
              connect. Every piece is grounded in strategy, fuelled by
              creativity, and built to spark genuine engagement that grows your
              brand’s online community.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#FF322E] w-xl h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white  border-transparent relative overflow-hidden group"
              >
                <div className="absolute left-3 top-1/2 -translate-y-1/2 translate-x-5 svg-wrapper group-hover:animate-bounce-custom">
                  <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:rotate-45 group-hover:scale-[140%]" />
                </div>
                <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
                  About us
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>Let’s Talk</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          {/* Welcome text div - aligned at bottom right, covering full width */}
          <div className="relative z-20 self-end w-[55%] h-full flex justify-start items-end pointer-events-none select-none overflow-visible">
            <div className="canvas w-full h-full relative flex items-end">
              <WelcomeLetters />
            </div>
          </div>
        </div>
      </div>
      
      <div id="welcome-parent-div-mobile" className="md:hidden h-[38rem] flex justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-10 h-full">
          <div className="pointer-events-none select-none mb-6 mt-10 h-[35rem] w-[80vw] ml-20">
            <WelcomeLetters />
          </div>

          <div className="mx-6">
            <p className="text-[18px] font-extrabold tracking-tight text-black">
              We’re the creative agency for brands that want more than filler
              posts or cookie–cutter campaigns.
            </p>
            <p className="text-[12px] leading-relaxed text-black/80 mt-2">
              We create intentional, personality–driven content, from authentic
              creator videos to scroll–stopping social feeds – designed to
              connect. Every piece is grounded in strategy, fuelled by
              creativity, and built to spark genuine engagement that grows your
              brand’s online community.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FF322E] h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group"
              >
                <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                  <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-2 group-hover:rotate-45 group-hover:scale-[140%]" />
                </div>
                <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-6">
                  About us
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-dm font-bold text-lg leading-[150%] text-[#FF322E] tracking-normal group"
              >
                <span>Let’s Talk</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-xl font-black" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="line" className="w-full h-[0.06rem] bg-black mt-24 mb-40 2xl:mt-40"></div>
    </div>
  );
}
