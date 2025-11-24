import { SiloHoverBanner } from "./SiloHoverBanner";
import LogoLoop from "../Common/LogoLoop";
import VideoAndWelcome from "./VideoAndWelcome";
import ContentAndDone from "./ContentAndDone";
import Section from "./Section";
import "../../styles/scaling-overrides.css";

const DEFAULT_LOGOS = [
  {
    src: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717226/asics_vgprpc.png",
    alt: "ASICS",
  },
  {
    src: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717294/webflow_r2dwk5.png",
    alt: "Webflow",
  },
];

export default function Hero() {
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto">
      {/* Full screen hero section */}
      <div className="w-full 2xl:h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] lg:h-auto md:h-[60vh] h-[50vh] flex flex-col justify-between">
        <SiloHoverBanner
          svgSrc="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/hero_hyl0xu.svg"
          intensity={40}
          className="home-hero-text-float flex-shrink-0 mt-8 md:mt-12 lg:mt-16"
        />

        <div className="relative left-1/2 -translate-x-1/2 w-screen bg-transparent flex-shrink-0 mt-6 md:mt-0 lg:mt-0">
          <div className="w-full home-hero-text-h">
            <div className="py-3 md:py-4 text-center font-bold text-2xl xl:text-xl text-black">
              Used by companies who know what works.
            </div>
          </div>
          <div className="pb-6 mt-3 home-hero-text-p">
            <LogoLoop
              logos={DEFAULT_LOGOS}
              gap={48}
              speed={100}
              stripCoverage={4}
              shuffleCopies={false}
              logoHeight={48}
            />
          </div>
        </div>
      </div>

        <VideoAndWelcome />
      </div>
      <div className="w-[100vw] h-[1px] bg-black md:my-28 my-20 relative left-1/2 -translate-x-1/2" />
      <div className="w-full max-w-[1280px] mx-auto">
        <ContentAndDone />
      </div>
      <div className="w-[100vw] h-[1px] bg-black md:my-28 my-20 relative left-1/2 -translate-x-1/2" />
      <div className="w-full max-w-[1280px] mx-auto">
        <Section />
      </div>
      <div className="w-[100vw] h-[1px] bg-black mt-10 relative left-1/2 -translate-x-1/2" />
    </>
  );
}
