import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import demoVideo from "../../DemoVideo/Demo-Video.mp4";
import Cards from "./Cards";
import Interested from "./Interested";
import OptionalAddOns from "./OptionalAddOns";
import "../../styles/scaling-overrides.css";

const Hero = () => {
  return (
    <>
      {/* Desktop / larger screens - hidden on small screens */}
      <div className="hidden sm:block w-full h-full">
        <div className="w-[100vw] hero-main 2xl:max-h-[58em] flex flex-col justify-between -gap-10 items-center 2xl:mt-16 lg:mt-5 lg:h-[88vh] md:mt-5 md:h-[88vh] xl:h-[90vh] xl:mt-10 hero-top">
          <div
            className="flex items-center 2xl:h-[60vh] w-[100%] justify-center service-video xl:h-[40vh]"
          >
            <VideoPlayer containerClassName="video" />
          </div>
          <div className="flex flex-col 2xl:-mt-16 justify-start gap-1 items-center text-black leading-tight">
            <h1 className="2xl:text-[15vw] hero-title font-black lg:text-[15vw] 2xl:mb-3 md:text-[16vw] md:mb-0 md:0">
              What we do
            </h1>
            <span className="2xl:text-2xl 2xl:-mt-5 2xl:font-medium text-xl text-center 2xl:w-[48vw] lg:w-[60vw] lg:text-lg md:w-[70vw] md:text-base md:mb-5 hero-desc ">
              {" "}
              We make content that cuts through the noise. Strategy, UGC,
              design, and motion, built to get noticed and remembered
            </span>
          </div>
          <div className="flex flex-wrap gap-10 2xl:mb-28 xl:mb-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#FF322E] h-[55px] hero-btn px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-12 group-hover:rotate-45 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-40">
                Let's chat
              </span>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-[55px] hero-btn px-8 py-3 text-xs font-bold uppercase tracking-wide text-brand relative overflow-hidden group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <IoIosSend className="block text-brand w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-10 group-hover:rotate-45 group-hover:scale-[140%]" />
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
      </div>
      {/* Mobile-only view - visible only on small screens */}
      <div className="block sm:hidden w-full h-auto bg-white px-1 py-6">
        {/* Video (targeting the same video but sized for mobile) */}
        <div className="mb-4">
          <VideoPlayer
            containerClassName="w-full h-auto"
            videoClassName="w-full h-auto object-contain"
          />
        </div>

        {/* Headline & description (smaller for mobile) */}
        <div className="flex flex-col gap-3 text-center text-black">
          <h1 className="text-5xl font-black leading-tight">What we do</h1>
          <p className="text-sm leading-relaxed">
            We make content that cuts through the noise. Strategy, UGC, design,
            and motion, built to get noticed and remembered.
          </p>
        </div>

        {/* Buttons stacked for mobile */}
        <div className="mt-6 flex gap-3 mx-auto ml-5">
          <a
            href="#"
            className="w-[45%] inline-flex items-center justify-center gap-2 bg-[#FF322E] h-12 px-4 text-sm font-bold uppercase tracking-wide text-white"
          >
            <IoIosSend className="w-5 h-5" />
            <span className="whitespace-nowrap">Let's chat</span>
          </a>

          <a
            href="#"
            className="w-[45%] inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand h-12 px-4 text-sm font-bold uppercase tracking-wide text-brand"
          >
            <IoIosSend className="w-5 h-5" />
            <span>About us</span>
          </a>
        </div>

        {/* Include cards component (will also be mobile visible) */}
        <div className="mt-6">
          <Cards />
        </div>
        <Interested />
        <OptionalAddOns />
      </div>
    </>
  );
};

function VideoPlayer({ containerClassName = "", videoClassName = "" }) {
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
      id="video"
      className={`2xl:w-[210px] 2xl:h-[294px] xl:w-[20%] xl:h-[40vh] lg:h-[60vh] lg:w-[30%] md:h-[70vh] bg-black relative flex items-center justify-center group overflow-hidden ${containerClassName}`}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4"
        className={videoClassName || "w-full h-full object-cover bg-black"}
        loop
        muted={isMuted}
        autoPlay
        playsInline
      />
      {/* Overlay controls */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
          showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
        } group-hover:opacity-100 group-hover:pointer-events-auto`}
      >
        {/* Play/Pause button centered */}
        <button
          onClick={handlePlayPause}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full p-6 text-black hover:bg-white shadow-lg focus:outline-none z-10"
          style={{ fontSize: 38 }}
        >
          {isPlaying ? <FaPause size={38} /> : <FaPlay size={38} />}
        </button>
        {/* Sound button top right */}
        <button
          onClick={handleMute}
          className="absolute top-4 right-4 bg-white/80 rounded-full p-3 text-black hover:bg-white shadow-lg focus:outline-none z-10"
          style={{ fontSize: 28 }}
        >
          {isMuted ? <FaVolumeMute size={28} /> : <FaVolumeUp size={28} />}
        </button>
      </div>
    </div>
  );
}

export default Hero;
