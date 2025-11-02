import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import demoVideo from "../../DemoVideo/Demo-Video.mp4";
import demoVideo2 from "../../DemoVideo/demo2.mp4";
import Cards from "./Cards";

const Hero = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-[100vw] h-[105vh] flex flex-col justify-start items-center mt-20">
        <VideoPlayer />
        <div className="flex flex-col justify-start items-center text-black leading-tight">
          <h1 className="text-[28vh] font-black">What we do</h1>
          <span className="text-xl font-medium text-black text-center w-[40vw]">
            {" "}
            We make content that cuts through the noise. Strategy, UGC, design,
            and motion, built to get noticed and remembered
          </span>
        </div>
        <div className="flex flex-wrap gap-10 mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FF322E] h-[55px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group"
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
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-transparent border-2 border-brand h-[55px] px-8 py-3 text-xs font-bold uppercase tracking-wide text-brand relative overflow-hidden group"
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
    </div>
  );
};

function VideoPlayer() {
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
      className="w-[20%] h-[70%] bg-black relative flex items-center justify-center group overflow-hidden"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <video
        ref={videoRef}
        src={demoVideo2}
        className="w-full h-full object-cover bg-black"
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
