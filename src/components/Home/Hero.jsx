import React from 'react'
import LiquidImage from './LiquidImage'
import LogoLoop from '../Common/LogoLoop'
import VideoAndWelcome from './VideoAndWelcome'
import ContentAndDone from './ContentAndDone'
import Section from './Section'

const DEFAULT_LOGOS = [
  { src: '/asics.png', alt: 'ASICS' },
  { src: '/webflow.png', alt: 'Webflow' }
]

export default function Hero() {
  return (
    <div>
       <div className="relative w-full overflow-hidden mb-6 md:mb-10 lg:mb-12">
        <LiquidImage imageUrl="/hero.png" />
      </div>

      <div className="w-full bg-white mt-6 md:mt-10 lg:mt-24 mb-6 md:mb-10 lg:mb-14">
        <div className="mx-auto max-w-[120rem] px-3 md:px-6">
          <div className="py-4 md:py-5 text-center font-bold text-2xl text-black">Used by companies who know what works.</div>
        </div>
        <div className="pb-8 mt-5">
          <LogoLoop logos={DEFAULT_LOGOS} gap={48} speed={100} stripCoverage={4} shuffleCopies={true} logoHeight={48} />
        </div>
      </div>

      <VideoAndWelcome />

      <ContentAndDone />
      <div className="w-[100vw] h-[0.06rem] bg-black my-20"></div>
      <Section />
    </div>
  )
}