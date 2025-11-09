import { Link } from 'react-router-dom'
import { IoIosSend, IoMdSend } from 'react-icons/io'
const Footer = () => {
  return (
    <footer className="w-full bg-white text-black border-t border-black">
      {/* Top grid: logo/newsletter + link columns */}
      <div className="hidden md:block  mx-auto w-full max-w-[90vw] px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Left: Brand + Newsletter */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img src="/footerlogo.png" alt="Silo logo" className="h-8" />
            </div>
            <p className="text-xl font-medium mb-3">Join our newsletter to stay up to date.</p>
            <form className="flex w-full max-w-md items-stretch gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full border border-neutral-300 px-4 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                required
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-400 h-[42px] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-red-500 relative overflow-hidden group"
              >
                <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                  <IoIosSend className="block text-red-500 w-4 h-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-8 group-hover:rotate-45 group-hover:scale-[140%]" />
                </div>
                <span className="block transition-all duration-300 ease-in-out text-sm group-hover:translate-x-40">
                  Subscribe
                </span>
              </button>
            </form>
            <p className="mt-3 text-sm text-black max-w-md">
              By subscribing you agree to with our <a href="#" className="underline hover:text-brand hover:text-base cursor-pointer ease-in-out duration-200">Privacy Policy</a> and provide consent to receive
              updates from our company.
            </p>
          </div>
          {/* Middle: About */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">About us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Services</a></li>
              <li><a href="/about" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>About the Silo</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Mission and Values</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Meet the Team</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Why UGC?</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Careers</a></li>
            </ul>
          </div>
          {/* Right: Case Studies */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Case Studies</h4>
            <ul className="space-y-3">
              <li><a href="/case-study-post" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Case study 1</a></li>
              <li><a href="/case-study-post" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Case study 2</a></li>
              <li><a href="/case-study-post" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Case study 3</a></li>
              <li><a href="/case-study-post" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Case study 4</a></li>
              <li><a href="/case-study-post" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}>Case study 5</a></li>
            </ul>
          </div>
          {/* Socials */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer flex items-center gap-2" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}><img src="/Youtube.png" alt="Youtube" className="w-4 h-4" />Youtube</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer flex items-center gap-2" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}><img src="/X.png" alt="X" className="w-4 h-4" />X</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer flex items-center gap-2" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}><img src="/Instagram.png" alt="Instagram" className="w-4 h-4" />Instagram</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer flex items-center gap-2" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}><img src="/Tiktok.png" alt="TikTok" className="w-4 h-4" />TikTok</a></li>
              <li><a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer flex items-center gap-2" style={{fontFamily: 'DM Sans', fontWeight: 700, lineHeight: '150%'}}><img src="/Linkedin.png" alt="LinkedIn" className="w-4 h-4" />LinkedIn</a></li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <hr className="mt-10 md:mt-12 border-black" />
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-6">
          <p className="text-base text-black">© 2025 The Silo Creative Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 text-base">
            <a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer">Privacy Policy</a>
            <Link to="/terms" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer">Terms of Service</Link>
            <a href="#" className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer">Cookies Settings</a>
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
          <a href="#" className="bg-neutral-200 p-2"><span className="sr-only">Youtube</span><img src="/Youtube.png" alt="Youtube" className="w-6 h-6" /></a>
          <a href="#" className="bg-neutral-200 p-2"><span className="sr-only">twitter</span><img src="/X.png" alt="X" className="w-6 h-6" /></a>
          <a href="#" className="bg-neutral-200 p-2"><span className="sr-only">Instagram</span><img src="/Instagram.png" alt="Instagram" className="w-6 h-6" /></a>
          <a href="#" className="bg-neutral-200 p-2"><span className="sr-only">TikTok</span><img src="/Tiktok.png" alt="TikTok" className="w-6 h-6" /></a>
          <a href="#" className="bg-neutral-200 p-2"><span className="sr-only">LinkedIn</span><img src="/Linkedin.png" alt="LinkedIn" className="w-6 h-6" /></a>
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
            <li><a href="#" className="hover:underline text-sm">Careers</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="font-bold mb-1">Support</div>
          <ul className="space-y-1">
            <li><a href="/case-study-post" className="hover:underline text-sm">Case study 1</a></li>
            <li><a href="/case-study-post" className="hover:underline text-sm">Case study 2</a></li>
            <li><a href="/case-study-post" className="hover:underline text-sm">Case study 3</a></li>
            <li><a href="/case-study-post" className="hover:underline text-sm">Case study 4</a></li>
            <li><a href="/case-study-post" className="hover:underline text-sm">Case study 5</a></li>
          </ul>
        </div>
      </div>
      {/* Newsletter */}
      <div className="mt-6">
        <div className="font-bold mb-2">Get updates</div>
        <p className='text-xs font-semibold text-gray-500 mb-5'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
        <form className="flex w-full border border-neutral-400 overflow-hidden" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none bg-white"
            required
          />
          <button
            type="submit"
            className="px-4 text-lg text-black font-bold flex items-center justify-center relative overflow-hidden group"
            aria-label="Subscribe"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
              <IoIosSend className="block text-brand w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-2 group-hover:rotate-45 group-hover:scale-[140%]" />
            </div>
            <span className="transition-all duration-300 ease-in-out group-hover:translate-x-6">
              <IoMdSend className='text-xl text-brand' />
            </span>
          </button>
        </form>
      </div>
    </div>
    </footer>
  )
}
export default Footer










