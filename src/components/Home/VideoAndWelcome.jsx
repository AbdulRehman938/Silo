import React, { useState, useRef, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import VideoModal from "../Common/VideoModal";
import demoVideo from "../../DemoVideo/Demo-Video.mp4";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function VideoAndWelcome() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Animated letters component: uses a per-letter layout to match the attached image.
  // Each entry defines left/top (percent), rotation (deg), size (vw) and zIndex so letters overlap correctly.
  function AnimatedLetters({ word = "Welcome", layout }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        (entries) => {
          // set inView based on current intersection state. Do NOT disconnect so the animation
          // can replay whenever the element re-enters the viewport.
          setInView(entries[0].isIntersecting);
        },
        { threshold: 0.12 }
      );
      obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);

    // Default layout that approximates the attached artwork's placement and sizing.
    const defaultLayout = [
      {
        left: "-10%",
        top: "2%",
        rotate: -22,
        size: "18vw",
        z: 7,
        fontWeight: "bold",
      },
      {
        left: "20%",
        top: "28%",
        rotate: 0,
        size: "14vw",
        z: 6,
        fontWeight: "bold",
      },
      {
        left: "4%",
        top: "32%",
        rotate: 18,
        size: "20vw",
        z: 5,
        fontWeight: "bold",
      },
      {
        left: "15%",
        top: "65%",
        rotate: 20,
        size: "22vw",
        z: 6,
        fontWeight: "bold",
      },
      {
        left: "34%",
        top: "60%",
        rotate: -36,
        size: "24vw",
        z: 3,
        fontWeight: "bold",
      },
      {
        left: "28%",
        top: "98%",
        rotate: 0,
        size: "30vw",
        z: 2,
        fontWeight: "bold",
      },
      {
        left: "78%",
        top: "140%",
        rotate: 0,
        size: "16vw",
        z: 1,
        fontWeight: "bold",
      },
    ];

    const positions =
      layout && layout.length === word.length ? layout : defaultLayout;

    // map logical weight names to Tailwind classes
    const weightMap = {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    };

    return (
      <div
        ref={ref}
        className="relative h-full w-full pointer-events-none select-none"
      >
        {Array.from(word).map((ch, i) => {
          const pos = positions[i] || {
            left: `${i * 10}%`,
            top: `${i * 6}%`,
            rotate: 0,
            size: "10vw",
            z: 1,
          };
          const finalRotate = pos.rotate || 0;
          const weightClass =
            weightMap[(pos.fontWeight || "").toLowerCase()] || "font-black";
          const hidden = { y: -220, opacity: 0, rotate: finalRotate - 30 };
          const visible = {
            y: 0,
            opacity: 1,
            rotate: [
              finalRotate + 8,
              finalRotate - 8,
              finalRotate + 4,
              finalRotate,
            ],
          };

          return (
            <motion.span
              key={i}
              initial="hidden"
              animate={inView ? visible : hidden}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 420,
                damping: 28,
              }}
              style={{
                left: pos.left,
                top: pos.top,
                fontSize: pos.size,
                zIndex: pos.z,
                lineHeight: 0.8,
              }}
              className={`absolute -translate-x-1/2 text-black leading-none ${weightClass}`}
            >
              {ch}
            </motion.span>
          );
        })}
      </div>
    );
  }

  // Mobile-specific layout: simpler, centered, and smaller so letters fit nicely on phones.
  const mobileLayout = [
    { left: '00%', top: '8%', rotate: -30, size: '30vw', z: 7, fontWeight: 'bold' },
    { left: '28%', top: '32%', rotate: -4, size: '20vw', z: 6, fontWeight: 'bold' },
    { left: '15%', top: '38%', rotate: 20, size: '28vw', z: 5, fontWeight: 'bold' },
    { left: '27%', top: '50%', rotate: 20, size: '31vw', z: 4, fontWeight: 'bold' },
    { left: '43%', top: '52%', rotate: -42, size: '33vw', z: 3, fontWeight: 'bold' },
    { left: '33%', top: '75%', rotate: 0, size: '36vw', z: 2, fontWeight: 'bold' },
    { left: '70%', top: '90%', rotate: 0, size: '23vw', z: 1, fontWeight: 'bold' },
  ];

  return (
    <div>
      {/* Mobile-only simplified block: visible on small screens only
          Animated letters placed BEFORE the content on mobile as requested. */}

      <div className="relative w-full overflow-hidden mt-6 md:mt-10 lg:mt-14">
        <div className="h-96 lg:h-[80vh] md:h-[60vh] relative">
          <img
            src="/image.png"
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
        src={demoVideo}
        title={"The Silo - Showreel"}
        byline={"The Silo Creative"}
        poster={"/image.png"}
      />

      <div className="hidden md:block relative mx-auto max-w-[80vw] px-3 md:px-6 mt-10 md:mt-14 lg:mt-20 md:max-w-[95vw]">
        <div className="relative grid items-start gap-2 md:grid-cols-2 md:gap-2 lg:gap-4 h-[90vh] lg:h-[70vh] xl:h-[80vh] md:h-[60vh]">
          <div className="relative z-10 pr-1 md:pr-3 self-end pb-1 max-w-[479px] h-[216px] flex flex-col justify-end gap-6 ">
            <p className="text-[13px] md:text-xl font-extrabold tracking-tight text-black">
              We’re the creative agency for brands that want more than filler
              posts or cookie–cutter campaigns.
            </p>
            <p className="text-[12px] lg:text-sm leading-relaxed text-black/80 md:text-sm">
              We create intentional, personality–driven content, from authentic
              creator videos to scroll–stopping social feeds – designed to
              connect. Every piece is grounded in strategy, fuelled by
              creativity, and built to spark genuine engagement that grows your
              brand’s online community.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FF322E] w-xl h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white  border-transparent relative overflow-hidden group"
              >
                <div className="absolute left-3 top-1/2 -translate-y-1/2 translate-x-5 svg-wrapper group-hover:animate-bounce-custom">
                  <IoIosSend className="block text-white w-8 h-8 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-2 group-hover:rotate-45 group-hover:scale-[140%]" />
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

          <div className="relative z-20 -ml-4 md:-ml-16 h-[50vh] lg:h-[35vh] w-[50vw] xl:h-[40vh] md:h-[25vh] md:mt-0 md:scale-[123%] xl:mt-5 pointer-events-none select-none transform-gpu origin-top-left transition-transform duration-200 lg:scale-110 lg:-mt-5 lg:-ml-10 xl:scale-30">
            {/* Animated letters will replace the static image. The whole block scales down on lg/xl so
                per-letter absolute px positions stay consistent (we compute against a 2xl reference)
                while visually fitting smaller breakpoints. */}
            <AnimatedLetters word={"Wecolme"} />
          </div>
        </div>
      </div>



      
      <div className="md:hidden h-[70vh] flex justify-between items-center gap-20">
        <div className="flex flex-col justify-between items-center h-full">
          <div className="pointer-events-none select-none mb-6 mt-10 h-60 w-[80vw] mx-auto">
            <AnimatedLetters word={"Wecolme"} layout={mobileLayout} />
          </div>

          <div className=" mx-5">
            <p className="text-[13px] font-extrabold tracking-tight text-black">
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
      <div id="line" className="w-full h-1 bg-black mt-40 mb-40"></div>
    </div>
  );
}
