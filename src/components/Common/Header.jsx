import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/scaling-overrides.css"

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  const navRef = useRef(null);
  const [navWidth, setNavWidth] = useState(0);
  const [line, setLine] = useState({ left: 0, width: 0, visible: false });

  useEffect(() => {
    function update() {
      if (navRef.current) setNavWidth(navRef.current.clientWidth);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function handleLinkEnter(e) {
    const link = e.currentTarget;
    if (!navRef.current || !link) return;
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const left = Math.round(linkRect.left - navRect.left);
    const width = Math.round(linkRect.width);
    setLine({ left, width, visible: true });
  }

  function handleNavLeave() {
    setLine((l) => ({ ...l, visible: false }));
  }

  return (
    <header className="fixed  top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm" style={{backdropFilter: 'saturate(120%) blur(6px)'}}>
      <div className="mx-0 header lg:mx-5 py-3 px-3 md:px-6 flex justify-between items-center lg:border-2 decoration-black">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center" aria-label="Home">
          <img src="/Company Logo.png" alt="Silo" className="h-10 header2 w-auto md:h-12" />
        </Link>

        {/* Right: CTA */}
        <div className="flex items-center justify-center gap-10">
          {/* Center: Nav */}
          <nav
            ref={navRef}
            onMouseLeave={handleNavLeave}
            className="hidden lg:flex items-center justify-center gap-6 text-xl font-semibold text-black relative overflow-hidden"
          >
            {/* top and bottom animated lines — mounted only when visible */}
            <AnimatePresence>
              {line.visible && (
                <motion.div
                  key="top-line"
                  aria-hidden
                  className="absolute top-0 h-[3px] pointer-events-none"
                  style={{ width: line.width || 0, backgroundColor: '#FF322E' }}
                  initial={{ left: - (line.width || 0) - 200, opacity: 0 }}
                  animate={{ left: line.left, opacity: 1 }}
                  exit={{ left: - (line.width || 0) - 200, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {line.visible && (
                <motion.div
                  key="bottom-line"
                  aria-hidden
                  className="absolute bottom-0 h-[3px] pointer-events-none"
                  style={{ width: line.width || 0, backgroundColor: '#FF322E', zIndex: 30 }}
                  initial={{ left: navWidth + (line.width || 0) + 200, opacity: 0 }}
                  animate={{ left: line.left, opacity: 1 }}
                  exit={{ left: navWidth + (line.width || 0) + 200, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>

            <NavLink to="/" onMouseEnter={handleLinkEnter} className={({ isActive }) => `px-3 py-3 font-bold  transition-all ${isActive ? 'text-2xl text-brand header2' : 'text-lg text-black'}`}>
              The Silo
            </NavLink>
            <NavLink to="/portfolio" onMouseEnter={handleLinkEnter} className={({ isActive }) => `px-3 py-3 font-bold transition-all ${isActive ? 'text-2xl text-brand' : 'text-lg text-black'}`}>
              Portfolio
            </NavLink>
            <NavLink to="/services" onMouseEnter={handleLinkEnter} className={({ isActive }) => `px-3 py-3 font-bold transition-all ${isActive ? 'text-2xl text-brand' : 'text-lg text-black'}`}>
              Services
            </NavLink>
            <NavLink to="/job-board" onMouseEnter={handleLinkEnter} className={({ isActive }) => `px-3 py-3 font-bold transition-all ${isActive ? 'text-2xl text-brand' : 'text-lg text-black'}`}>
              Job Board
            </NavLink>
            <NavLink to="/ramblings" onMouseEnter={handleLinkEnter} className={({ isActive }) => `px-3 py-3 font-bold transition-all ${isActive ? 'text-2xl text-brand' : 'text-lg text-black'}`}>
              Ramblings
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-12 w-16 items-center justify-center rounded-sm border border-transparent"
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
          <button className="hidden lg:inline-flex relative text-lg bg-brand text-white py-3 px-6 items-center border-none rounded overflow-hidden header-btn transition-all duration-200 cursor-pointer group active:scale-95">
            <div className="absolute svg-wrapper group-hover:animate-bounce-custom">
              <IoIosSend className="block opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-5 group-hover:rotate-45 group-hover:scale-[160%]" />
            </div>
            <span className="block transition-all font-bold duration-300 ease-in-out group-hover:translate-x-28">Lets Talk</span>
          </button>
        </div>
      </div>

      {/* Panel for tablet/mobile: overlay + right drawer covering 70% width */}
      {createPortal(
        <div className={`lg:hidden fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* backdrop (covers full viewport, sits above header) */}
          <div
            onClick={close}
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          />

          {/* right drawer (above backdrop) */}
          <aside
            className={`absolute top-0 right-0 h-full w-[70vw] bg-white shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0 pointer-events-auto z-60' : 'translate-x-full pointer-events-none'}`}
            aria-hidden={!open}
          >
            <div className="flex flex-col h-full">
              <div className="px-6 py-5 flex items-center justify-between border-b">
                <img src="/logo.png" alt="Silo" className="h-8 w-auto" />
                <button onClick={close} aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <nav className="px-6 py-8 flex-1 flex flex-col gap-6">
                <NavLink to="/" onClick={close} className={({ isActive }) => `text-lg font-extrabold tracking-tight transition ${isActive ? 'text-2xl text-brand border-b-2 border-brand pb-1' : 'hover:text-brand'}`}>
                  The Silo
                </NavLink>
                <NavLink to="/portfolio" onClick={close} className={({ isActive }) => `text-lg font-bold transition ${isActive ? 'text-xl text-brand border-b-2 border-brand pb-1' : 'hover:text-brand'}`}>
                  Portfolio
                </NavLink>
                <NavLink to="/services" onClick={close} className={({ isActive }) => `text-lg font-bold transition ${isActive ? 'text-xl text-brand border-b-2 border-brand pb-1' : 'hover:text-brand'}`}>
                  Services
                </NavLink>
                <NavLink to="/job-board" onClick={close} className={({ isActive }) => `text-lg font-bold transition ${isActive ? 'text-xl text-brand border-b-2 border-brand pb-1' : 'hover:text-brand'}`}>
                  Job Board
                </NavLink>
                <NavLink to="/ramblings" onClick={close} className={({ isActive }) => `text-lg font-bold transition ${isActive ? 'text-xl text-brand border-b-2 border-brand pb-1' : 'hover:text-brand'}`}>
                  Ramblings
                </NavLink>
              </nav>

              <div className="px-6 pb-8">
                <button onClick={close} className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-brand text-white px-6 py-3 font-bold shadow-lg hover:opacity-95 transition">
                  <IoIosSend className="w-5 h-5" />
                  Lets Talk
                </button>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </header>
  );
}
