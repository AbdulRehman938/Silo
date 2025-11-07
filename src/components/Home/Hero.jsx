import { SiloHoverBanner } from "./SiloHoverBanner";
import LogoLoop from "../Common/LogoLoop";
import VideoAndWelcome from "./VideoAndWelcome";
import ContentAndDone from "./ContentAndDone";
import Section from "./Section";
import "../../styles/scaling-overrides.css";

const DEFAULT_LOGOS = [
  { src: "/asics.png", alt: "ASICS" },
  { src: "/webflow.png", alt: "Webflow" },
];

export default function Hero() {
  return (
    <div className="w-full">
      {/* Full screen hero section */}
      <div className="w-full 2xl:h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] lg:h-auto md:h-[60vh] h-[50vh] flex flex-col justify-between">
        <SiloHoverBanner
          svgSrc="/hero.svg"
          intensity={40}
          className="home-hero-text-float flex-shrink-0"
        />

        <div className="w-full bg-white flex-shrink-0 mt-auto">
          <div className="mx-auto max-w-[120rem] px-3 md:px-6 home-hero-text-h">
            <div className="py-4 md:py-5 text-center font-bold text-2xl 2xl:text-3xl xl:text-2xl text-black">
              Used by companies who know what works.
            </div>
          </div>
          <div className="pb-8 mt-5 home-hero-text-p">
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

      <ContentAndDone />
      <div className="w-full h-[0.06rem] bg-black my-20"></div>
      <Section />
    </div>
  );
}
