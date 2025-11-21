import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPlay, FaPause} from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Cards from "./Cards";
import Interested from "./Interested";
import OptionalAddOns from "./OptionalAddOns";
import "../../styles/scaling-overrides.css";
import Section from "../Home/Section.jsx";

const Hero = () => {
  const [cmsData, setCmsData] = useState({
    showVideo: true,
    videoUrl: "https://player.vimeo.com/video/76979871"
  });
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!cmsData.showVideo) return;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const playerRef = useRef(null);

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

  return (
    <>
      {/* Desktop / larger screens - hidden on small screens */}
      <div className="hidden sm:block sm:h-[calc(100vh-80px)] pt-8 mt-20">
        <div className="w-full max-w-[1280px] h-full mx-auto flex flex-col justify-between items-center px-4 md:px-10 lg:px-10 pb-8 pt-10">
          <div
            className="service-hero-title flex items-center w-[180px] h-[250px] justify-center service-video mb-3"
          >
            <VideoPlayer containerClassName="w-full h-full" onVideoClick={handleOpen} />
          </div>
          <div className="flex flex-col justify-start items-center text-black leading-tight mb-3">
            <h1 className="font-bold xl:text-[160px] lg:text-[120px] md:text-[14vw] leading-none mb-1">
              What we do
            </h1>
            <span className="text-black lg:text-base md:text-sm font-normal text-center max-w-3xl px-4">
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
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-[45px] hero-btn px-8 py-3 text-xs font-bold tracking-wide text-brand relative overflow-hidden group"
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
      <div className="hidden sm:block">
        <Cards />
        <Interested />
        <OptionalAddOns />
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black" />
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
            <h1 className="text-5xl font-black leading-tight">What we do</h1>
            <p className="text-sm leading-relaxed px-4">
              We make content that cuts through the noise. Strategy, UGC, design,
              and motion, built to get noticed and remembered.
            </p>
          </div>

          {/* Buttons stacked for mobile */}
          <div className="flex gap-3 justify-center w-full px-4">
            <a
              href="/contact"
              className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-[#FF322E] h-12 px-4 text-sm font-bold tracking-wide text-white"
            >
              <span className="whitespace-nowrap">Let's chat</span>
            </a>

            <a
              href="/portfolio"
              className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-12 px-4 text-sm font-bold tracking-wide text-brand"
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
        <OptionalAddOns />
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black " />
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
    </>
  );
};

function VideoPlayer({ containerClassName = "", videoClassName = "", onVideoClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Ensure video is muted/playing state sync
  React.useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isMuted, isPlaying]);

  return (
    <div 
      className={`relative cursor-pointer ${containerClassName}`}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
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
        <source src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-4">
          <button
            onClick={handlePlayPause}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all"
          >
            {isPlaying ? <FaPause className="w-6 h-6" /> : <FaPlay className="w-6 h-6" />}
          </button>
         
        </div>
      )}
    </div>
  );
}

export default Hero;
