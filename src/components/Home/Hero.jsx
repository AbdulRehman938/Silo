import React from 'react'
import LiquidImage from './LiquidImage'
import LogoLoop from '../Common/LogoLoop'
import VideoAndWelcome from './VideoAndWelcome'

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

      <div className="mx-auto max-w-[120rem] px-3 md:px-6 mt-12 md:mt-16 lg:mt-20">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black max-w-[18ch]">This is simply what we do</h2>
          <div className="text-[12px] md:text-[13px] leading-relaxed text-black/80 space-y-3">
            <p>We make content people stop for.</p>
            <p>Strategy first. Design that bites. Delivery that doesn’t miss.</p>
          </div>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 grid gap-8 md:grid-cols-3">
          <article className="md:w-[394.67px] md:h-[628px] flex flex-col gap-8">
            <div className="overflow-hidden rounded-md w-full h-[320px] md:h-[400px]">
              <img src="/first.png" alt="Social Strategy & Management" className="block h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] leading-[130%] tracking-normal text-black">Social Strategy & Management</h3>
            <p className="mt-2 font-dm font-bold text-[16px] leading-[150%] tracking-normal text-black">We map your audience, set a plan, and run the feed. Clear pillars, weekly calendars, and fast creative sprints. No filler, just posts that earn their place.</p>
          </article>

          <article className="md:w-[394.67px] md:h-[526px] pt-[100px] flex flex-col gap-8">
            <div className="overflow-hidden rounded-md w-full h-[240px]">
              <img src="/second.png" alt="UGC Creator Network" className="block h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] leading-[130%] tracking-normal text-black">UGC Creator Network</h3>
            <p className="mt-2 font-dm font-bold text-[16px] leading-[150%] tracking-normal text-black">Real faces. Real reach. We brief, source, and direct vetted creators across regions. You get a steady pipeline of native video that feels like the platform, not an ad.</p>
          </article>

          <article className="md:w-[394.67px] md:h-[626px] pt-[200px] flex flex-col gap-8">
            <div className="overflow-hidden rounded-md w-full h-[240px]">
              <img src="/third.png" alt="Design + Motion" className="block h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 font-epilogue font-bold text-[32px] leading-[130%] tracking-normal text-black">Design + Motion</h3>
            <p className="mt-2 font-dm font-bold text-[16px] leading-[150%] tracking-normal text-black">Sharp branding, scroll‑stopping graphics, and motion that moves the story. Titles that hit, captions that carry, and edits that keep the thumbs still.</p>
          </article>
        </div>
      </div>
    </div>
  )
}