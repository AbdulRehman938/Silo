import React from 'react'
const Footer = () => {
  return (
    <footer className="w-full bg-white text-black border-t border-neutral-200">
      {/* Top grid: logo/newsletter + link columns */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
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
    </footer>
  )
}
export default Footer










