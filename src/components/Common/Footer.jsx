import React from 'react'
import { AiFillTikTok } from 'react-icons/ai'
import { FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
const Footer = () => {
  return (
    <footer className="w-full bg-white text-black border-t border-neutral-200">
      {/* Top grid: logo/newsletter + link columns */}
      <div className="hidden md:block  mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Left: Brand + Newsletter */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img src="/footerlogo.png" alt="Silo logo" className="h-8" />
            </div>
            <p className="text-sm font-medium mb-3">Join our newsletter to stay up to date.</p>
            <form className="flex w-full max-w-md items-stretch gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full rounded border border-neutral-300 px-4 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                required
              />
              <button
                type="submit"
                className="shrink-0 rounded border border-red-400 text-red-500 px-4 py-2.5 text-sm font-semibold hover:bg-red-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-neutral-500 max-w-md">
              By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a> and provide consent to receive
              updates from our company.
            </p>
          </div>
          {/* Middle: About */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold mb-4">About us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Services</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>About the Silo</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Mission and Values</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Meet the Team</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Why UGC?</a></li>
            </ul>
          </div>
          {/* Right: Case Studies */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Case Studies</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Case study 1</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Case study 2</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Case study 3</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Case study 4</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Case study 5</a></li>
            </ul>
          </div>
          {/* Socials */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Youtube</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>X</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>Instagram</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>TikTok</a></li>
              <li><a href="#" className="hover:underline" style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px', lineHeight: '150%'}}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <hr className="mt-10 md:mt-12 border-neutral-200" />
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-6">
          <p className="text-xs text-neutral-600">© 2025 The Silo Creative Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    {/* Modern mobile-only footer layout */}
    <div className="block md:hidden px-4 py-8 w-full bg-white">
      {/* Top: Brand and copyright */}
      <div className="mb-4">
        <div className="font-extrabold text-xl mb-3">
           <img src="/footerlogo.png" alt="Silo logo" className="h-8" />
        </div>
        <div className="text-sm font-semibold">© 2025 The Silo Creative Limited</div>
        <div className="text-sm text-neutral-500 mb-2">All rights reserved</div>
        {/* Social icons row */}
        <div className="flex gap-3 mb-2 mt-4">
          <a href="#" className="rounded-full bg-neutral-200 p-2"><span className="sr-only">Youtube</span><FaYoutube className='rounded-full text-red-600 text-2xl' /></a>
        <a href="#" className="rounded-full bg-neutral-200 p-2"><span className="sr-only">twitter</span><RiTwitterXLine className='rounded-full text-black/90 text-2xl' /></a>
          <a href="#" className="rounded-full bg-neutral-200 p-2"><span className="sr-only">Instagram</span><FaInstagramSquare className='rounded-full text-red-600 text-2xl' /></a>
          <a href="#" className="rounded-full bg-neutral-200 p-2"><span className="sr-only">TikTok</span><AiFillTikTok className='rounded-full text-black/90 text-2xl' /></a>
          <a href="#" className="rounded-full bg-neutral-200 p-2"><span className="sr-only">LinkedIn</span><FaLinkedin className=' text-blue-500 bg-white text-2xl' /></a>
         
        </div>
      </div>
      {/* Two columns: Company and Support */}
      <div className="flex w-full mb-4 gap-8">
        <div className="flex-1">
          <div className="font-bold mb-1">Company</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-sm">Services</a></li>
            <li><a href="#" className="hover:underline text-sm">About the Silo</a></li>
            <li><a href="#" className="hover:underline text-sm">Mission and Values</a></li>
            <li><a href="#" className="hover:underline text-sm">Meet the Team</a></li>
            <li><a href="#" className="hover:underline text-sm">Why UGC?</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="font-bold mb-1">Support</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-sm">Case study 1</a></li>
            <li><a href="#" className="hover:underline text-sm">Case study 2</a></li>
            <li><a href="#" className="hover:underline text-sm">Case study 3</a></li>
            <li><a href="#" className="hover:underline text-sm">Case study 4</a></li>
            <li><a href="#" className="hover:underline text-sm">Case study 5</a></li>
          </ul>
        </div>
      </div>
      {/* Newsletter */}
      <div className="mt-6">
        <div className="font-bold mb-2">Get updates</div>
        <p className='text-xs font-semibold text-gray-500 mb-5'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        <form className="flex w-full border border-neutral-400 rounded overflow-hidden" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none bg-white"
            required
          />
          <button
            type="submit"
            className="px-4 text-lg text-black font-bold flex items-center justify-center"
            aria-label="Subscribe"
          >
            <span><IoMdSend className='text-xl text-brand' /></span>
          </button>
        </form>
      </div>
    </div>
    </footer>
  )
}
export default Footer










