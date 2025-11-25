import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Cards from "./Cards";
import Interested from "./Interested";
// import OptionalAddOns from "./OptionalAddOns";
import "../../styles/scaling-overrides.css";
import Section from "../Home/Section.jsx";

const Hero = () => {
  const [cmsData, setCmsData] = useState({
    showVideo: true,
    videoUrl: "https://player.vimeo.com/video/76979871",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!cmsData.showVideo) return;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [videoState, setVideoState] = useState("initial"); // 'initial', 'fixed', 'absolute'
  const [absoluteTop, setAbsoluteTop] = useState(0); // For absolute positioning
  const previousStateRef = useRef("initial"); // Track previous state to prevent flickering

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      const node = playerRef.current;
      if (!node) return;
      if (!node.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Handle scroll for sticky video
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!heroSectionRef.current) {
            ticking = false;
            return;
          }

          const heroRect = heroSectionRef.current.getBoundingClientRect();
          const footer = document.querySelector("footer");
          const footerRect = footer?.getBoundingClientRect();
          const videoHeight = 240; // Height when sticky
          const bottomOffset = 200; // Increased offset to stop video higher above footer

          // Use hysteresis to prevent flickering
          // Different thresholds based on current state
          let threshold;
          if (previousStateRef.current === "initial") {
            threshold = -150; // Need to scroll further down to switch to fixed
          } else {
            threshold = -50; // Can scroll back up sooner to return to initial
          }
          
          const heroTopOutOfView = heroRect.top < threshold;

          // Calculate if video would overlap footer
          const footerApproaching =
            footerRect && footerRect.top <= window.innerHeight;

          let newState = previousStateRef.current;

          if (!heroTopOutOfView) {
            // We're at the top, show in initial position
            newState = "initial";
          } else if (heroTopOutOfView && !footerApproaching) {
            // We've scrolled past hero and footer is not near, stick to viewport
            newState = "fixed";
          } else if (footerApproaching && footerRect) {
            // Footer is approaching, calculate absolute position
            const scrollY = window.scrollY || window.pageYOffset;
            const footerTop = footerRect.top + scrollY;
            const calculatedTop = footerTop - videoHeight - bottomOffset;
            setAbsoluteTop(calculatedTop);
            newState = "absolute";
          }

          // Only update state if it actually changed
          if (newState !== previousStateRef.current) {
            previousStateRef.current = newState;
            setVideoState(newState);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Desktop / larger screens - hidden on small screens */}
      <div
        ref={heroSectionRef}
        className="hidden sm:block sm:h-[calc(100vh-80px)] pt-8 mt-20"
      >
        <div className="w-full max-w-[1280px] h-full mx-auto flex flex-col justify-between items-center px-4 md:px-10 lg:px-10 pb-2 pt-2">
          {/* Placeholder to prevent layout shift when video becomes fixed */}
          {videoState !== "initial" && (
            <div className="w-[180px] h-[210px] mb-3" aria-hidden="true" />
          )}

          {/* Video in initial state (normal position) */}
          {videoState === "initial" && (
            <div
              ref={videoContainerRef}
              className="service-hero-title relative flex items-center justify-center service-video w-[180px] h-[210px] mb-3 transition-all duration-500 ease-in-out"
            >
              <VideoPlayer
                containerClassName="w-full h-full"
                onVideoClick={handleOpen}
              />
            </div>
          )}

          <div className="flex flex-col justify-start items-center text-black leading-tight mb-3">
            <h1 className="font-bold xl:text-[160px] lg:text-[120px] md:text-[14vw] leading-none mb-1">
              What we do
            </h1>
            <span className="text-black lg:text-base md:text-sm font-normal text-center max-w-3xl px-4 my-5">
              We make content that cuts through the noise. Strategy, UGC,
              design, and motion, built to get noticed and remembered
            </span>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[45px] hero-btn px-6 py-3 text-xs font-bold tracking-wide text-white border-transparent relative overflow-hidden group"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-40">
                Let's chat
              </span>
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-brand h-[45px] hero-btn px-8 py-3 text-xs font-bold tracking-wide text-brand relative overflow-hidden group"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight className="text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
                About us
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Video in fixed/absolute state - rendered at body level via portal */}
      {videoState !== "initial" &&
        createPortal(
          <div
            ref={videoContainerRef}
            className={`service-hero-title flex items-center justify-center service-video transition-all duration-500 ease-in-out w-[200px] h-[240px] z-50 sm:flex ${
              videoState === "fixed"
                ? "fixed bottom-6 right-6"
                : "absolute right-6"
            }`}
            style={videoState === "absolute" ? { top: `${absoluteTop}px` } : {}}
          >
            <VideoPlayer
              containerClassName="w-full h-full"
              onVideoClick={handleOpen}
            />
          </div>,
          document.body
        )}

      <div className="hidden sm:block">
        <Cards />
        <Interested />
        {/* <OptionalAddOns /> */}
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black" />
      </div>
      {/* Mobile-only view - visible only on small screens */}
      <div className="block sm:hidden w-full h-auto pt-8 px-4">
        <div className="flex flex-col justify-start items-center gap-10 pb-0 pt-20">
          {/* Video (targeting the same video but sized for mobile) */}
          <div className="mb-2">
            <VideoPlayer
              containerClassName="w-[180px] h-[220px] mx-auto"
              videoClassName="w-full h-full object-cover"
              onVideoClick={handleOpen}
            />
          </div>

          {/* Headline & description (smaller for mobile) */}
          <div className="flex flex-col gap-2 text-center text-black mb-3">
            <h1 className="text-6xl font-black leading-tight">What we do</h1>
            <p className="text-sm leading-relaxed mt-5">
              We make content that cuts through the noise. Strategy, UGC,
              design, and motion, built to get noticed and remembered.
            </p>
          </div>

          {/* Buttons stacked for mobile */}
          <div className="flex gap-3 justify-center w-full px-4 -mt-5">
            <a
              href="/contact"
              className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-[#FF322E] h-12 px-4 text-sm font-bold tracking-wide text-white"
            >
              <span className="whitespace-nowrap">Let's chat</span>
            </a>

            <a
              href="/about"
              className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-brand h-12 px-4 text-sm font-bold tracking-wide text-brand"
            >
              <span>About us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sections outside h-screen */}
      <div className="block sm:hidden">
        {/* Include cards component (will also be mobile visible) */}
        <div className="mt-6">
          <Cards />
        </div>
        <Interested />
        {/* <OptionalAddOns /> */}
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black " />
      </div>

      {open &&
        createPortal(
          <div
            onClick={handleClose}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
          >
            <div
              onClick={handleClose}
              className="absolute inset-0 bg-black/60"
            />

            <div
              ref={playerRef}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1100px] mx-4 h-[50vh] md:h-[60vh]"
            >
              <iframe
                title="Vimeo player"
                src={`${cmsData.videoUrl}?autoplay=1&muted=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 0, borderRadius: 0 }}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

function VideoPlayer({
  containerClassName = "",
  videoClassName = "",
  onVideoClick,
}) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Always keep video playing
  React.useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
    videoRef.current.play();
  }, [isMuted]);

  // Overlay and play button always visible
  return (
    <div
      className={`relative cursor-pointer ${containerClassName}`}
      onClick={onVideoClick}
    >
      <video
        ref={videoRef}
        className={`w-full h-full object-fill ${videoClassName}`}
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-4 pointer-events-none">
        <button className="bg-white bg-opacity-80 rounded-full p-3 transition-all pointer-events-none">
          <FaPlay className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
