import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "../../styles/scaling-overrides.css"

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  const handleHeaderClick = (e) => {
    // only toggle when clicking the header background (not interactive children)
    // and only on mobile/tablet (below lg breakpoint)
    if (e.currentTarget === e.target && typeof window !== 'undefined' && window.innerWidth < 1024) {
      toggle();
    }
  };
  

  return (
    <header onClick={handleHeaderClick} className="fixed top-0 left-0 w-full right-0 z-50 bg-transparent mt-3 md:mt-5">
      <div className="mx-3 lg:mx-10">
        <div className="max-w-[1440px] border-[1px] border-black bg-white mx-auto py-3 px-3 md:px-6 flex justify-between items-center decoration-black">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center" aria-label="Home">
          <img src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/hero_hyl0xu.svg" alt="Silo" className="h-7 header2 w-auto md:h-9" />
        </Link>

        {/* Right: CTA */}
        <div className="flex items-center justify-center gap-6">
          {/* Center: Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 2xl:gap-6 text-xl font-bold text-black relative">
            <NavLink
              to="/about"
              className={({ isActive }) => `px-2 xl:px-2.5  2xl:px-1 py-2 xl:py-2.5 2xl:py-3 font-bold whitespace-nowrap transition-colors ${isActive ? 'text-brand font-extrabold' : 'text-black'}`}
            >
              The Silo
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-2 xl:px-2.5 2xl:px-1 py-2 xl:py-2.5 2xl:py-3 font-bold whitespace-nowrap transition-colors ${isActive ? 'text-brand font-extrabold' : 'text-black'}`}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `px-2 xl:px-2.5 2xl:px-1 py-2 xl:py-2.5 2xl:py-3 font-bold whitespace-nowrap transition-colors ${isActive ? 'text-brand font-extrabold' : 'text-black'}`}
            >
              Services
            </NavLink>
            <NavLink
              to="/job-board"
              className={({ isActive }) => `px-2 xl:px-2.5 2xl:px-1 py-2 xl:py-2.5 2xl:py-3 font-bold whitespace-nowrap transition-colors ${isActive ? 'text-brand font-extrabold' : 'text-black'}`}
            >
              Job Board
            </NavLink>
            <NavLink
              to="/ramblings"
              className={({ isActive }) => `px-2 xl:px-2.5 2xl:px-1 py-2 xl:py-2.5 2xl:py-3 font-bold whitespace-nowrap transition-colors ${isActive ? 'text-brand font-extrabold' : 'text-black'}`}
            >
              Ramblings
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-12 w-16 items-center justify-center border border-transparent"
            onClick={toggle}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col items-center justify-center gap-1.5">
              <span className="block h-1 w-9 bg-black"></span>
              <span className="block h-1 w-9 bg-black"></span>
              <span className="block h-1 w-9 bg-black"></span>
            </span>
          </button>

          {/* CTA visible on large screens only; on tablet/mobile it's inside the hamburger panel below */}
          <Link to="/contact" className="hidden lg:inline-flex relative text-sm xl:text-base 2xl:text-lg whitespace-nowrap bg-brand text-white py-2 xl:py-2.5 2xl:py-3 px-4 xl:px-5 2xl:px-6 items-center border-none overflow-hidden header-btn transition-all duration-200 cursor-pointer group active:scale-95 no-underline">
            <div className="absolute svg-wrapper group-hover:animate-bounce-custom">
              <FaChevronRight  className="block opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-7 group-hover:scale-[160%]" />
            </div>
            <span className="block transition-all font-bold duration-300 ease-in-out group-hover:translate-x-28">Lets Talk</span>
          </Link>
        </div>
        </div>
      </div>

      {/* Panel for tablet/mobile: overlay + right drawer covering 70% width */}
      {createPortal(
        <div className={`lg:hidden fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* backdrop (below the curtain and below the header) */}
          <div
            onClick={close}
            className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100 pointer-events-auto z-30' : 'opacity-0 pointer-events-none'}`}
          />

          {/* curtain panel: extends from header */}
          <aside
            className={`absolute left-0 right-0 top-16 md:top-20 transform transition-all duration-700 ease-out ${open ? 'opacity-100 translate-y-0 pointer-events-auto z-40' : 'opacity-0 -translate-y-4 pointer-events-none z-40'}`}
            aria-hidden={!open}
          >
            <div className="mx-3 lg:mx-10">
              <div className="max-w-[1440px] border-[1px] border-black border-t-0 mx-auto bg-white rounded-b-xl overflow-hidden shadow-lg">
                <nav className="px-6 py-8 flex-1 flex flex-col gap-6">
                    <NavLink to="/about" onClick={close} className={({ isActive }) => `text-xl font-bold tracking-tight transition ${isActive ? 'text-brand font-extrabold border-b-2 border-brand pb-1' : 'text-black'}`}>
                      The Silo
                    </NavLink>
                    <NavLink to="/about" onClick={close} className={({ isActive }) => `text-xl font-bold transition ${isActive ? 'text-brand font-extrabold border-b-2 border-brand pb-1' : 'text-black'}`}>
                      Portfolio
                    </NavLink>
                    <NavLink to="/services" onClick={close} className={({ isActive }) => `text-xl font-bold transition ${isActive ? 'text-brand font-extrabold border-b-2 border-brand pb-1' : 'text-black'}`}>
                      Services
                    </NavLink>
                    <NavLink to="/job-board" onClick={close} className={({ isActive }) => `text-xl font-bold transition ${isActive ? 'text-brand font-extrabold border-b-2 border-brand pb-1' : 'text-black'}`}>
                      Job Board
                    </NavLink>
                    <NavLink to="/ramblings" onClick={close} className={({ isActive }) => `text-xl font-bold transition ${isActive ? 'text-brand font-extrabold border-b-2 border-brand pb-1' : 'text-black'}`}>
                      Ramblings
                    </NavLink>
                </nav>

                <div className="px-6 pb-8">
                  <Link to="/contact" onClick={close} className="w-full inline-flex items-center justify-center gap-3 bg-brand text-white px-6 py-3 font-bold shadow-lg hover:opacity-95 transition no-underline">
                   
                    Lets Talk
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </header>
  );
}
