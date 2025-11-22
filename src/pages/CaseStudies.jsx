import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section2 from "../components/About/Section2";
import Section from "../components/Home/Section";
import LazyImage from "../components/Common/LazyImage";
import LazySection from "../components/Common/LazySection";

const CaseStudies = () => {
  // Removed video section and modal logic
  return (
    <div className="max-w-[1280px] mx-auto h-auto flex flex-col justify-start items-center mt-16 xl:mt-10 lg:mt-40 md:mt-40">
      {/* ...existing code... (section removed) */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen mx-auto h-[1px] bg-black" />
      <LazySection>
      <div id="done" className="max-w-[1280px] pb-0 px-4 md:px-10 lg:px-10 mx-auto">
        <div className="space-y-20 mx-auto ">
          {/* First project */}
          {/* ...existing code... */}

          {/* Second project */}
          <div 
            className="hidden lg:flex items-center justify-around space-x-20 border-b pb-16 border-b-black group relative cursor-pointer"
            onClick={() => window.location.href = '/case-study/2'}
          >
            <div className="w-1/3 h-80 xl:h-96  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:rotate-0 lg:group-hover:pointer-events-auto">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="/case-study/2"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div 
            className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
            onClick={() => window.location.href = '/case-study/2'}
          >
            {/* Text content first */}
            <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="/case-study/2"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
            {/* Image second */}
            <div className="w-full md:w-1/2 h-80  relative">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-64 xl:h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 overflow-hidden lg:group-hover:rotate-0">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Third project */}
          <div 
            className="hidden lg:flex items-center justify-around space-x-20 pb-16 group relative cursor-pointer"
            onClick={() => window.location.href = '/case-study/3'}
          >
            <div className="w-full lg:w-1/4 h-80  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:rotate-0 lg:group-hover:pointer-events-auto">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="/case-study/3"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out lg:group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div 
            className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
            onClick={() => window.location.href = '/case-study/3'}
          >
            {/* Text content first */}
            <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="/case-study/3"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
            {/* Image second */}
            <div className="w-full md:w-1/2 h-72  relative">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 overflow-hidden lg:group-hover:rotate-0">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20 mx-auto">
          {/* Fourth project */}
          <div 
            className="hidden lg:flex items-center justify-around space-x-20 border-y py-16 border-y-black group relative cursor-pointer"
            onClick={() => window.location.href = '/case-study/4'}
          >
            <div className="w-1/3 h-96  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Smoothie Smash</h3>
              <p className="text-xl text-black font-bold">Food & Drink</p>
              <p className="text-lg font-semibold text-black">
                We built a TikTok-first launch campaign for this food start-up.
                Fast cuts, bold graphics, and creator-led taste tests turned
                into millions of views and a sell-out first week.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  UGC
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  TikTok
                </span>
              </div>
              <a
                href="/case-study/4"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div 
            className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
            onClick={() => window.location.href = '/case-study/4'}
          >
            {/* Text content first */}
            <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Smoothie Smash</h3>
              <p className="text-xl text-black font-bold">Food & Drink</p>
              <p className="text-lg font-semibold text-black">
                We built a TikTok-first launch campaign for this food start-up.
                Fast cuts, bold graphics, and creator-led taste tests turned
                into millions of views and a sell-out first week.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  UGC
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  TikTok
                </span>
              </div>
              <a
                href="/case-study/4"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
            {/* Image second */}
            <div className="w-full md:w-1/2 h-80  relative">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/Smoothie_dhwlm0.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717289/smoothie-hover_znf5gc.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Fifth project */}
          <div 
            className="hidden lg:flex items-center justify-around space-x-20 border-b py-16 border-b-black group relative cursor-pointer"
            onClick={() => window.location.href = '/case-study/5'}
          >
            <div className="w-1/3 h-80 xl:h-96  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 w-1/6 h-96 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="/case-study/5"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div 
            className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 border-b border-b-black py-12 group relative mt-0 cursor-pointer"
            onClick={() => window.location.href = '/case-study/5'}
          >
            {/* Text content first */}
            <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Lumin Solar</h3>
              <p className="text-xl text-black font-bold">Energy</p>
              <p className="text-lg font-semibold text-black">
                For this clean-tech brand we stripped out the jargon and made
                solar feel simple. Scroll-stopping motion and sharp messaging
                powered record inbound leads.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Motion Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Strategy
                </span>
              </div>
              <a
                href="/case-study/5"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
            {/* Image second */}
            <div className="w-full md:w-1/2 h-80  relative">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717249/Lumen_w2q5zm.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-64 xl:h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717251/lumer-hover_vxhyvl.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Sixth project */}

          {/* Sixth project */}
          <div 
            className="hidden lg:flex items-center justify-around space-x-20 py-16 group relative cursor-pointer"
            onClick={() => window.location.href = '/case-study/6'}
          >
            <div className="w-full lg:w-1/4 h-80  transform transition-transform duration-600 ease-in-out lg:group-hover:-translate-x-12">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Hover image placeholder (absolutely positioned so it doesn't shift layout) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 md:w-1/6 md:h-96 w-full h-64 bg-white overflow-hidden opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:pointer-events-auto">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-[30%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="/case-study/6"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
          </div>

          <div 
            className="block md:flex lg:hidden items-center w-full mx-auto justify-center md:space-x-10 space-y-3 md:space-y-0 pt-12 group relative mt-0 cursor-pointer"
            onClick={() => window.location.href = '/case-study/6'}
          >
            {/* Text content first */}
            <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-4 text-left">
              <h3 className="text-4xl font-bold text-black">Smart Stats</h3>
              <p className="text-xl text-black font-bold">SaaS</p>
              <p className="text-lg font-semibold text-black">
                We gave this data platform a face, not just numbers. From
                explainer animations to punchy LinkedIn posts, we built a visual
                system that made analytics unmissable.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  Design
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  B2B
                </span>
                <span className="text-base font-bold text-black p-2 bg-brand/20">
                  LinkedIn Content
                </span>
              </div>
              <a
                href="/case-study/6"
                className="inline-flex items-center gap-2 font-dm mt-10 font-bold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <span
                  aria-hidden
                  className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                </span>
              </a>
            </div>
            {/* Image second */}
            <div className="w-full md:w-1/2 h-72  relative">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717287/SMART_h3lxc7.png"
                alt="smoothie"
                className="w-full h-full object-cover" loading="lazy" />
              {/* Hover image placeholder */}
              <div className="absolute -right-80 top-0 w-[70%] h-80 bg-white  opacity-0 scale-90 rotate-6 transition-all duration-600 ease-in-out z-10 pointer-events-none group-hover:opacity-100 group-hover:scale-100 overflow-hidden group-hover:rotate-0">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717298/stats-hover_hbm23m.png"
                  alt="smoothie"
                  className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </LazySection>
      <div className="relative left-1/2 -translate-x-1/2 w-screen mx-auto h-[1px] bg-black mt-10 mb-10" />
      <LazySection>
        <Section />
      </LazySection>
      <div className="relative left-1/2 -translate-x-1/2 w-screen mx-auto h-[1px] bg-black" />

      {/* ...existing code... (modal removed) */}
    </div>
  );
}

export default CaseStudies;