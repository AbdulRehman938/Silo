import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const CARD_DATA = [
  {
    icon: <svg width="40" height="40" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="2" /><circle cx="7" cy="9" r="1" /><rect x="10" y="13" width="4" height="2" rx="1" /></svg>,
    title: "Social Strategy & Management",
    desc: "We don't just post, we'll plan, manage, and grow your brand's presence.",
  },
  {
    icon: <svg width="40" height="40" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>,
    title: "Content Production",
    desc: "From ideation to execution, we create content that stands out.",
  },
  {
    icon: <svg width="40" height="40" fill="none" stroke="#FF322E" strokeWidth="3" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>,
    title: "Brand Design",
    desc: "We build visual identities that are memorable and effective.",
  },
];

const Cards = () => {
  const containerRef = useRef(null);
  const [cardProgress, setCardProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      // Only handle scroll when this specific section is in viewport
      if (isInView) {
        const delta = e.deltaY;
        // Speed based on scroll delta - faster scroll = faster card movement
        const step = Math.abs(delta) * 0.001; // Adjust multiplier for sensitivity
        
        // Lock viewport when cards are animating (not fully stacked or not fully vanished)
        if (cardProgress > 0 && cardProgress < CARD_DATA.length) {
          e.preventDefault();
          e.stopPropagation();
          setIsLocked(true);

          setCardProgress(prev => {
            const newProgress = prev + (delta > 0 ? step : -step);
            return Math.max(0, Math.min(CARD_DATA.length, newProgress));
          });
        } 
        // Lock when scrolling down from fully stacked
        else if (cardProgress === 0 && delta > 0) {
          e.preventDefault();
          e.stopPropagation();
          setIsLocked(true);
          setCardProgress(prev => prev + step);
        }
        // Lock when scrolling up from fully vanished
        else if (cardProgress === CARD_DATA.length && delta < 0) {
          e.preventDefault();
          e.stopPropagation();
          setIsLocked(true);
          setCardProgress(prev => prev - step);
        }
        else {
          // Unlock for normal scroll - allow scrolling to other sections
          setIsLocked(false);
        }
      } else {
        // Section not in view - reset progress and allow normal scroll
        setIsLocked(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [cardProgress]);

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
    <div ref={containerRef} className="w-full h-screen mt-20 flex flex-col items-center justify-center relative" style={{ overflow: 'hidden' }}>
      {/* Static stacked cards centered over the H1 */}
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center justify-center" style={{height: 420, width: 720}}>
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[340px] bg-white border-2 border-[#FF322E] rounded-md flex flex-col items-start justify-center px-12 py-10 shadow-lg"
              style={{ zIndex: z }}
            >
              <div className="mb-4">{card.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-lg text-gray-700">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
      <h1 className="text-brand text-[15vw] font-bold text-center leading-[18rem] z-10 pointer-events-none">
        CORE <br /> SERVICES
      </h1>
    </div>
  );
};

export default Cards;