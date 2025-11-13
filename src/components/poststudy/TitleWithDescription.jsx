import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import demoVideo from "../../DemoVideo/Demo-Video.mp4";

const TitleWithDescription = ({ title, description }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="w-full max-w-[90vw] mx-auto py-16 md:py-24">
      <div className="relative min-h-[300px] md:min-h-[400px]">
        {/* Title - Top Left (stack on mobile, absolute at md+) */}
        <div className="relative w-full md:absolute md:top-0 md:left-0 md:w-[45%]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
            {title || "This job was pretty bloody cool."}
          </h1>
        </div>

  {/* Description - Bottom Right (stack on mobile, absolute at md+) */}
  <div className="relative mt-6 w-full md:absolute md:-bottom-12 md:right-0 md:w-[50%] flex flex-col gap-4 md:mt-0">
          {Array.isArray(description) ? (
            description.map((para, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-gray-600 leading-relaxed"
              >
                {para}
              </p>
            ))
          ) : (
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
            </p>
          )}
        </div>
      </div>

      <div className="relative w-full h-[50vh] md:h-auto md:aspect-video overflow-hidden group mt-20">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={demoVideo}
          loop
          muted={isMuted}
          autoPlay
          playsInline
        />

        {/* Black Overlay with Play/Pause and Mute Buttons - Shows on Hover (Desktop/Tablet) */}
        <div
          className={`hidden md:flex absolute inset-0 bg-black/50 items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={togglePlayPause}
            className="w-20 h-20 rounded-full bg-red-500/30 backdrop-blur-sm flex items-center justify-center hover:bg-red-500/50 transition-all duration-300 hover:scale-110 border-2 border-red-400/50"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <FaPause className="text-white text-3xl ml-0" />
            ) : (
              <FaPlay className="text-white text-3xl ml-1" />
            )}
          </button>

          {/* Desktop Mute Button - Next to Play/Pause */}
          <button
            onClick={toggleMute}
            className="w-14 h-14 rounded-full bg-red-500/30 backdrop-blur-sm flex items-center justify-center hover:bg-red-500/50 transition-all duration-300 hover:scale-110 border-2 border-red-400/50"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <FaVolumeMute className="text-white text-xl" />
            ) : (
              <FaVolumeUp className="text-white text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Play/Pause Button - Bottom Right */}
        <button
          onClick={togglePlayPause}
          className="md:hidden absolute bottom-4 right-16 w-12 h-12 rounded-full bg-red-500/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-500/60 transition-all duration-300 z-10 border-2 border-red-400/50"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <FaPause className="text-white text-lg ml-0" />
          ) : (
            <FaPlay className="text-white text-lg ml-1" />
          )}
        </button>

        {/* Mobile Mute/Unmute Button - Bottom Right */}
        <button
          onClick={toggleMute}
          className="md:hidden absolute bottom-4 right-4 w-10 h-10 rounded-full bg-red-500/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-500/60 transition-all duration-300 z-10 border-2 border-red-400/50"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-lg" />
          ) : (
            <FaVolumeUp className="text-white text-lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TitleWithDescription;
