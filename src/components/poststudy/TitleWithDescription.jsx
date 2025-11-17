import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPlay, FaPause } from "react-icons/fa";

const TitleWithDescription = ({ title, description }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [open, setOpen] = useState(false);

  const cmsData = {
    showVideo: true,
    videoUrl: "https://player.vimeo.com/video/76979871"
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

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

  const handleOpen = () => {
    if (!cmsData.showVideo) return;
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePlayPause = (e) => {
    e.stopPropagation();
    handleOpen();
  };

  return (
    <>
      <div className="w-full max-w-[90vw] mx-auto py-16 md:py-24">
        <div className="relative min-h-[300px] md:min-h-[400px]">
          <div className="relative w-full md:absolute md:top-0 md:left-0 md:w-[45%]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              {title || "This job was pretty bloody cool."}
            </h1>
          </div>

          <div className="relative mt-6 w-full md:absolute md:-bottom-12 md:right-0 md:w-[50%] flex flex-col gap-4 md:mt-0">
            {Array.isArray(description) ? (
              description.map((para, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-black leading-relaxed"
                >
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg text-black leading-relaxed">
                {description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
              </p>
            )}
          </div>
        </div>

        <div 
          className="relative w-full h-[50vh] md:h-auto md:aspect-video overflow-hidden mt-20 cursor-pointer"
          onClick={handleOpen}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/di9tb45rl/video/upload/v1762717692/Demo-video_himxf7.mp4"
            loop
            muted

            playsInline
          />

          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <button
              onClick={handlePlayPause}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-4 transition-all"
            >
              {isPlaying ? <FaPause className="w-8 h-8" /> : <FaPlay className="w-8 h-8" />}
            </button>
          </div>
        </div>
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

export default TitleWithDescription;