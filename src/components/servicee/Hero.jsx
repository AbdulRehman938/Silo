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
      <div className="hidden sm:block min-h-screen">
        <div className="w-full max-w-[1280px] min-h-screen mx-auto mt-24 flex flex-col justify-center items-center hero-top">
          <div
            className="flex items-center w-[210px] h-[300px] justify-center service-video "
          >
            <VideoPlayer containerClassName="w-full h-full" onVideoClick={handleOpen} />
          </div>
          <div className="flex flex-col justify-start items-center text-black leading-tight">
            <h1 className="font-bold xl:text-[200px] lg:text-[150px] 2xl:mb-3 mt-0 md:text-[16vw] md:mb-0 md:0">
              What we do
            </h1>
            <span className="text-black text-xl font-normal text-center lg:w-[60vw] lg:text-lg md:w-[70vw] md:text-base md:mb-5">
              {" "}
              We make content that cuts through the noise. Strategy, UGC,
              design, and motion, <br /> built to get noticed and remembered
            </span>
          </div>
          <div className="flex flex-wrap gap-10 2xl:mb-28 xl:mb-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[45px] hero-btn px-6 py-3 text-xs font-bold  tracking-wide text-white border-transparent relative overflow-hidden group"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight   className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-40">
                Let's chat
              </span>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-[45px] hero-btn px-8 py-3 text-xs font-bold  tracking-wide text-brand relative overflow-hidden group"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight   className="text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
                About us
              </span>
            </a>
          </div>
        </div>
        <Cards />
        <Interested />
        <OptionalAddOns />
        <Section />
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black " />
      </div>
      {/* Mobile-only view - visible only on small screens */}
      <div className="block sm:hidden w-full h-auto bg-white px-1 py-6 mt-20">
        {/* Video (targeting the same video but sized for mobile) */}
        <div className="mb-4">
          <VideoPlayer
            containerClassName="w-[50%] mx-auto h-[35vh]"
            videoClassName="w-full h-auto object-contain"
            onVideoClick={handleOpen}
          />
        </div>

        {/* Headline & description (smaller for mobile) */}
        <div className="flex flex-col gap-3 text-center text-black mt-20">
          <h1 className="text-6xl font-black leading-tight">What we do</h1>
          <p className="text-sm leading-relaxed">
            We make content that cuts through the noise. Strategy, UGC, design,
            and motion, built to get noticed and remembered.
          </p>
        </div>

        {/* Buttons stacked for mobile */}
        <div className="mt-6 flex gap-3 mx-auto ml-5">
          <a
            href="#"
            className="w-[45%] inline-flex items-center justify-center gap-2 bg-[#FF322E] h-12 px-4 text-sm font-bold tracking-wide text-white"
          >
            
            <span className="whitespace-nowrap">Let's chat</span>
          </a>

          <a
            href="#"
            className="w-[45%] inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-12 px-4 text-sm font-bold tracking-wide text-brand"
          >
            
            <span>About us</span>
          </a>
        </div>

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
