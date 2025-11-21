import { useEffect } from "react";
import Hero from "../components/About/Hero";
import WhatSiloIs from "../components/About/WhatSiloIs";
import WhyUGC from "../components/About/WhyUGC";
import WhoWeLoveWorkingWith from "../components/About/WhoWeLoveWorkingWith";
import ThingsWeBelieveIn from "../components/About/ThingsWeBelieveIn";
import MindsInTheSilo from "../components/About/MindsInTheSilo";
import Section from "../components/Home/Section";
import LazySection from "../components/Common/LazySection";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden flex flex-col mx-auto">
      <div className="min-h-screen mx-auto max-w-[1280px]">
        <Hero />
      </div>

      <div className="h-[1px] bg-black w-[100vw]"></div>
      <div className=" min-h-screen mx-auto w-full max-w-[1280px]">
        <LazySection>
        <WhatSiloIs />
        </LazySection>
        <LazySection>
        <WhyUGC />
        </LazySection>
        <LazySection>
        <WhoWeLoveWorkingWith />
        </LazySection>
        <LazySection>
        <ThingsWeBelieveIn />
        </LazySection>
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black my-10" />
        <LazySection>
        <MindsInTheSilo />
        </LazySection>
         <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black mt-10 mb-20" />
        <LazySection>
        <Section />
        </LazySection>
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black" />
      </div>
    </div>
  );
};

export default About;
