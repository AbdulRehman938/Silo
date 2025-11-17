import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const CARD_DATA = [
  {
    icon: <svg width="60" height="60" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2" /><circle cx="7" cy="9" r="1" /><rect x="10" y="13" width="4" height="2" rx="1" /></svg>,
    number: "01",
    title: "Social Strategy & Management",
    desc: "We don't just post, we'll plan, manage, and grow your brand's presence.",
  },
  {
    icon: <svg width="60" height="60" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>,
    number: "02",
    title: "Content Production",
    desc: "From ideation to execution, we create content that stands out.",
  },
  {
    icon: <svg width="60" height="60" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>,
    number: "03",
    title: "Brand Design",
    desc: "We build visual identities that are memorable and effective.",
  },
  {
    icon: <svg width="60" height="60" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2" /><circle cx="7" cy="9" r="1" /><rect x="10" y="13" width="4" height="2" rx="1" /></svg>,
    number: "04",
    title: "Social Strategy & Management",
    desc: "We don't just post, we'll plan, manage, and grow your brand's presence.",
  },

];

const Cards = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [cardProgress, setCardProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [isMobileInView, setIsMobileInView] = useState(false);
  const touchStartY = useRef(0);

  // Viewport visibility for mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsMobileInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (mobileRef.current) observer.observe(mobileRef.current);
    return () => observer.disconnect();
  }, []);

  // Desktop wheel handler
  useEffect(() => {
    const handleWheel = (e) => {
      if (!desktopRef.current) return;
      
      const rect = desktopRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const containerCenter = rect.top + rect.height / 2;
      const isAtTrigger = Math.abs(containerCenter - viewportCenter) <= 150;

      if (isAtTrigger) {
        const delta = e.deltaY;
        const step = Math.abs(delta) * 0.005;
        
        setCardProgress(prev => {
          const newProgress = prev + (delta > 0 ? step : -step);
          const clampedProgress = Math.max(0, Math.min(CARD_DATA.length, newProgress));
          
          // Only lock scroll if we're in the middle of the animation
          if (clampedProgress > 0 && clampedProgress < CARD_DATA.length) {
            e.preventDefault();
            e.stopPropagation();
            setIsScrollLocked(true);
          } else {
            // Unlock immediately when at endpoints
            setIsScrollLocked(false);
          }
          
          return clampedProgress;
        });
      } else {
        // Unlock when outside trigger zone
        setIsScrollLocked(false);
      }
    };
    
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  // Mobile touch handler
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!mobileRef.current || !isMobileInView) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!mobileRef.current || !isMobileInView) return;
      
      const rect = mobileRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const containerCenter = rect.top + rect.height / 2;
      const isAtTrigger = Math.abs(containerCenter - viewportCenter) <= 150;
      
      if (isAtTrigger) {
        const delta = touchStartY.current - e.touches[0].clientY;
        const step = Math.abs(delta) * 0.015;
        
        setCardProgress(prev => {
          const newProgress = prev + (delta > 0 ? step : -step);
          const clampedProgress = Math.max(0, Math.min(CARD_DATA.length, newProgress));
          
          // Only lock scroll if we're in the middle of the animation
          if (clampedProgress > 0 && clampedProgress < CARD_DATA.length) {
            e.preventDefault();
            setIsScrollLocked(true);
          } else {
            // Unlock immediately when at endpoints
            setIsScrollLocked(false);
          }
          
          return clampedProgress;
        });
      } else {
        // Unlock when outside trigger zone
        setIsScrollLocked(false);
      }
      touchStartY.current = e.touches[0].clientY;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobileInView]);


  // Scroll lock effect: lock/unlock body scroll when needed
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isScrollLocked]);

  const getCardTransform = (index) => {
    // Each card disappears one by one
    const cardStart = index;
    const cardEnd = index + 1;
    
    if (cardProgress < cardStart) {
      return { y: 0, opacity: 1, scale: 1 };
    } else if (cardProgress >= cardEnd) {
      return { y: -200, opacity: 0, scale: 0.8 };
    } else {
      const progress = cardProgress - cardStart;
      // Snap to either fully visible or fully hidden - no in-between
      const snapped = progress < 0.5 ? 0 : 1;
      return {
        y: snapped * -200,
        opacity: 1 - snapped,
        scale: 1 - (snapped * 0.2)
      };
    }
  };

  return (
    <>
      {/* Desktop View - Hidden on Mobile */}
      <div ref={desktopRef} className="hidden sm:flex w-full max-w-[1280px] mx-auto h-screen 2xl:mt-20 md:mt-0 flex-col items-center justify-center relative" style={{ overflow: 'hidden' }}>
        {/* Static stacked cards centered over the H1 */}
        <div className="absolute left-[30%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center justify-center" style={{height: 420, width: 720}}>
          {CARD_DATA.map((card, i) => {
            const VISIBLE_COUNT = Math.min(5, CARD_DATA.length);
            const computeOffset = (idx) => {
              if (idx === 0) return { x: 0, y: 0, r: 0 };
              if (idx < VISIBLE_COUNT) {
                const pos = idx;
                const x = (pos % 2 === 0 ? 1 : -1) * (8 + pos * 6);
                const y = pos * 18;
                const r = (pos % 2 === 0 ? 4 : -4) + (pos % 3);
                return { x, y, r };
              }
              const hiddenIndex = idx - VISIBLE_COUNT;
              return { x: (idx % 2 === 0 ? 6 : -6), y: 120 + hiddenIndex * 22, r: (idx % 2 === 0 ? 6 : -6) };
            };

            const offset = computeOffset(i);
            const z = 300 - i;
            const transform = getCardTransform(i);
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, x: 0, rotate: 0 }}
                animate={{ 
                  opacity: transform.opacity, 
                  x: offset.x, 
                  y: -offset.y + transform.y, 
                  rotate: offset.r,
                  scale: transform.scale
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-full lg:w-[80%] md:w-[55%] md:h-[200px] md:left-[20rem] md:top-[15rem] lg:h-[250px] 2xl:h-[340px] bg-white border-2 border-[#FF322E] flex flex-col items-start justify-center px-12 py-10 shadow-lg 2xl:left-[23rem]"
                style={{ zIndex: z }}
              >
                <div className="mb-4 flex w-full justify-between items-center 2xl:text-xl lg:text-base font-bold">{card.icon}
                  {/* card : {card.number} */}
                </div>
                <h2 className="2xl:text-5xl lg:text-2xl font-bold mb-2">{card.title}</h2>
                <p className="2xl:text-3xl lg:text-xl text-black">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <h1 className="text-brand xl:text-[15vw] md:text-[22vw] md:leading-tight font-bold text-center 2xl:leading-[20rem] z-10 pointer-events-none lg:text-[20vw]">
          CORE <br /> SERVICES
        </h1>
      </div>

      {/* Mobile View - Only Visible on Mobile */}
      <div ref={mobileRef} className="sm:hidden w-full h-screen flex flex-col items-center justify-center relative" style={{ overflow: 'hidden' }}>
        {/* Mobile H1 text positioned at top */}
        <h1 className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 text-brand text-[20vw] leading-[5rem] font-bold text-center z-10 pointer-events-none">
          CORE <br /> SERVICES
        </h1>
        
        {/* Mobile stacked cards positioned below text */}
        <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center justify-center" style={{height: 200, width: 300}}>
          {CARD_DATA.map((card, i) => {
            const VISIBLE_COUNT = Math.min(5, CARD_DATA.length);
            const computeOffset = (idx) => {
              if (idx === 0) return { x: 0, y: 0, r: 0 };
              if (idx < VISIBLE_COUNT) {
                const pos = idx;
                const x = (pos % 2 === 0 ? 1 : -1) * (4 + pos * 3);
                const y = pos * 8;
                const r = (pos % 2 === 0 ? 2 : -2) + (pos % 3);
                return { x, y, r };
              }
              const hiddenIndex = idx - VISIBLE_COUNT;
              return { x: (idx % 2 === 0 ? 3 : -3), y: 60 + hiddenIndex * 10, r: (idx % 2 === 0 ? 3 : -3) };
            };

            const offset = computeOffset(i);
            const z = 300 - i;
            const transform = getCardTransform(i);
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, x: 0, rotate: 0 }}
                animate={{ 
                  opacity: transform.opacity, 
                  x: offset.x, 
                  y: -offset.y + transform.y, 
                  rotate: offset.r,
                  scale: transform.scale
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                className="absolute   -translate-x-1/2 -translate-y-1/2 w-[280px] h-[160px] bg-white border-2 border-[#FF322E] rounded-md flex flex-col items-start justify-center px-4 py-3 shadow-lg"
                style={{ zIndex: z }}
              >
                <div className="mb-2 flex w-full justify-between items-center text-xs font-bold">
                  <div className="w-6 h-6">
                    <svg width="24" height="24" fill="none" stroke="#FF322E" strokeWidth="2" viewBox="0 0 24 24">
                      {card.icon.props.children}
                    </svg>
                  </div>
                 
                </div>
                <h2 className="text-sm font-bold mb-1 leading-tight">{card.title}</h2>
                <p className="text-xs text-black leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Cards;