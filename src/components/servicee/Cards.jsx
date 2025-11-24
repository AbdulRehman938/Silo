import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData.jsx";

const CARD_DATA = servicesData;

const Cards = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [cardProgress, setCardProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const touchStartY = useRef(0);
  const isAnimating = useRef(false);
  const unlockTimeoutRef = useRef(null);

  // Auto-unlock when reaching boundaries
  useEffect(() => {
    console.log(
      "📊 cardProgress changed:",
      cardProgress,
      "isLocked:",
      isLocked,
      "isAnimating:",
      isAnimating.current
    );

    if (
      isAnimating.current &&
      (cardProgress >= CARD_DATA.length || cardProgress <= 0)
    ) {
      if (unlockTimeoutRef.current) {
        clearTimeout(unlockTimeoutRef.current);
      }

      const delay = cardProgress >= CARD_DATA.length ? 800 : 300;
      const direction = cardProgress >= CARD_DATA.length ? "END" : "START";
      console.log(`🔓 Scheduling ${direction} unlock in ${delay}ms`);

      unlockTimeoutRef.current = setTimeout(() => {
        console.log(`✅ Unlocking now (${direction})`);
        setIsLocked(false);
        isAnimating.current = false;
      }, delay);
    }

    return () => {
      if (unlockTimeoutRef.current) {
        clearTimeout(unlockTimeoutRef.current);
      }
    };
  }, [cardProgress]);

  // Desktop wheel handler with scroll lock
  useEffect(() => {
    const handleWheel = (e) => {
      if (!desktopRef.current) return;

      const rect = desktopRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const containerCenter = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(containerCenter - viewportCenter);

      // Check if section is visible
      const isInViewport = rect.top < viewportHeight && rect.bottom > 0;
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewportHeight);
      const visibleHeight = visibleBottom - visibleTop;
      const visibilityRatio = visibleHeight / rect.height;
      const isSignificantlyVisible = visibilityRatio >= 0.3;

      // Only lock when section is visible and near center
      const isCentered =
        distanceFromCenter <= 300 && isInViewport && isSignificantlyVisible;

      // Don't lock if we're at boundaries and not animating
      const atBoundary =
        (cardProgress >= CARD_DATA.length && e.deltaY > 0) ||
        (cardProgress <= 0 && e.deltaY < 0);
      const shouldLock = (isCentered || isAnimating.current) && !atBoundary;

      if (shouldLock) {
        e.preventDefault();
        e.stopPropagation();

        if (!isLocked && !isAnimating.current && isCentered) {
          setIsLocked(true);
          isAnimating.current = true;

          // Auto-scroll section to perfect center when lock engages
          const scrollOffset = containerCenter - viewportCenter;
          const targetScrollY = window.scrollY + scrollOffset;

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        }

        const delta = e.deltaY;
        // Direct proportional movement - faster scroll = faster card movement
        const step = Math.abs(delta) * 0.002;
        const direction = delta > 0 ? 1 : -1;

        setCardProgress((prev) => {
          const newProgress = prev + direction * step;
          return Math.max(0, Math.min(CARD_DATA.length, newProgress));
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isLocked, cardProgress]);

  // Mobile touch handler with scroll lock
  useEffect(() => {
    let touchAccumulator = 0;
    let lastTouchTime = 0;
    let lastTouchY = 0;
    let velocity = 0;

    const handleTouchStart = (e) => {
      if (!mobileRef.current) return;
      touchStartY.current = e.touches[0].clientY;
      lastTouchY = e.touches[0].clientY;
      lastTouchTime = Date.now();
      touchAccumulator = 0;
      velocity = 0;
    };

    const handleTouchMove = (e) => {
      if (!mobileRef.current) return;

      const rect = mobileRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      // Early exit: section must be on screen
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        // Section is completely off screen, don't interfere
        if (isAnimating.current) {
          // If was animating but now off screen, unlock
          setIsLocked(false);
          isAnimating.current = false;
        }
        return;
      }

      // Calculate velocity for fast scroll detection
      const currentTime = Date.now();
      const currentY = e.touches[0].clientY;
      const timeDelta = currentTime - lastTouchTime;
      if (timeDelta > 0) {
        velocity = Math.abs(currentY - lastTouchY) / timeDelta;
      }
      lastTouchTime = currentTime;
      lastTouchY = currentY;

      // Calculate visibility - reduced threshold for earlier detection
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewportHeight);
      const visibleHeight = visibleBottom - visibleTop;
      const visibilityRatio = visibleHeight / rect.height;

      // Lower threshold to 40% for better fast-scroll detection
      if (visibilityRatio < 0.4) {
        return;
      }

      // Check if centered - increased threshold for fast scrolling
      const containerCenter = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(containerCenter - viewportCenter);

      // Adaptive threshold based on velocity - higher velocity = larger threshold
      const baseThreshold = 150;
      const velocityBonus = Math.min(velocity * 100, 150); // Max 150px bonus
      const adaptiveThreshold = baseThreshold + velocityBonus;

      const isCentered =
        distanceFromCenter <= adaptiveThreshold &&
        containerCenter > 0 &&
        containerCenter < viewportHeight;

      // Lock when centered and not already locked
      if (isCentered && !isAnimating.current) {
        // Use RAF for smoother lock engagement
        requestAnimationFrame(() => {
          setIsLocked(true);
          isAnimating.current = true;

          // Auto-scroll section to perfect center when lock engages on mobile
          const scrollOffset = containerCenter - viewportCenter;
          const targetScrollY = window.scrollY + scrollOffset;

          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });
        });
      }

      // Only handle scroll if animating or centered
      if (!isAnimating.current && !isCentered) {
        return;
      }

      const delta = touchStartY.current - currentY;

      // Don't prevent if at boundary and scrolling in that direction
      const atBoundary =
        (cardProgress >= CARD_DATA.length && delta > 0) ||
        (cardProgress <= 0 && delta < 0);

      if (!atBoundary && (isAnimating.current || isCentered)) {
        e.preventDefault();

        touchAccumulator += delta;
        touchStartY.current = currentY;

        // Direct proportional movement - card speed matches drag speed
        // Each pixel of drag = progress increment
        const progressPerPixel = 1 / 300; // 300px to complete one card

        if (Math.abs(delta) > 0) {
          const direction = delta > 0 ? 1 : -1;
          const increment = Math.abs(delta) * progressPerPixel;

          setCardProgress((prev) => {
            const newProgress = prev + direction * increment;
            return Math.max(0, Math.min(CARD_DATA.length, newProgress));
          });
        }
      } else {
        touchStartY.current = currentY;
      }
    };

    const handleTouchEnd = () => {
      touchAccumulator = 0;
      velocity = 0;
      lastTouchTime = 0;
      lastTouchY = 0;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isLocked, cardProgress]);

  const getCardTransform = (index) => {
    const cardStart = index;
    const cardEnd = index + 1;

    if (cardProgress < cardStart) {
      // Card hasn't started animating yet - keep it visible
      return { y: 0, opacity: 1, scale: 1 };
    } else if (cardProgress >= cardEnd) {
      // Card has completed - move it far off screen
      return { y: -1000, opacity: 1, scale: 1 };
    } else {
      // Card is currently animating - smooth continuous movement
      const progress = cardProgress - cardStart; // 0 to 1
      return {
        y: progress * -1000, // Smooth interpolation from 0 to -1000px
        opacity: 1, // Keep fully visible
        scale: 1, // Keep same size
      };
    }
  };

  return (
    <>
      {/* Desktop View - Hidden on Mobile */}
      <div
        ref={desktopRef}
        className="hidden sm:flex w-full max-w-[1280px] mx-auto h-[calc(100vh-80px)] 2xl:mt-20 md:mt-0 flex-col items-center justify-center relative"
        style={{ overflow: "hidden" }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          {CARD_DATA.map((card, i) => {
            const VISIBLE_COUNT = Math.min(5, CARD_DATA.length);
            const computeOffset = (idx) => {
              if (idx === 0) return { x: 0, y: 0, r: 0 };
              if (idx < VISIBLE_COUNT) {
                const pos = idx;
                const x = (pos % 2 === 0 ? -1 : 1) * (8 + pos * 6);
                const y = pos * 18;
                const r = (pos % 2 === 0 ? -4 : 4) - (pos % 3);
                return { x, y, r };
              }
              const hiddenIndex = idx - VISIBLE_COUNT;
              return {
                x: idx % 2 === 0 ? -6 : 6,
                y: 120 + hiddenIndex * 22,
                r: idx % 2 === 0 ? -6 : 6,
              };
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
                  x: offset.x - 310,
                  y: -offset.y + transform.y - 80,
                  rotate: offset.r,
                  scale: transform.scale,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[720px] lg:w-[580px] md:w-[420px] md:h-[200px] lg:h-[250px] 2xl:h-[340px] bg-white border-[1px] border-[#FF322E] flex flex-col items-start justify-center px-12 py-10 shadow-lg"
                style={{ zIndex: z }}
              >
                <div className="mb-4 flex w-full justify-between items-center 2xl:text-xl lg:text-base font-bold">
                  {card.icon}
                </div>
                <h2 className="2xl:text-5xl lg:text-2xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="2xl:text-3xl lg:text-xl text-black">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
        <h1 className="text-brand xl:text-[15vw] md:text-[22vw] md:leading-tight font-bold text-center 2xl:leading-[20rem] z-10 pointer-events-none lg:text-[20vw]">
          CORE <br /> SERVICES
        </h1>
      </div>

      {/* Mobile View - Only Visible on Mobile */}
      <div
        ref={mobileRef}
        className="sm:hidden w-full h-[calc(85vh-100px)] flex flex-col items-center justify-center relative"
        style={{ overflow: "hidden" }}
      >
        <h1 className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 text-brand text-[20vw] leading-[5rem] font-bold text-center z-10 pointer-events-none">
          CORE <br /> SERVICES
        </h1>

        <div
          className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center justify-center"
          style={{ height: 200, width: 300 }}
        >
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
              return {
                x: idx % 2 === 0 ? 3 : -3,
                y: 60 + hiddenIndex * 10,
                r: idx % 2 === 0 ? 3 : -3,
              };
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
                  scale: transform.scale,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[280px] h-[160px] bg-white border-[1px] border-[#FF322E]  flex flex-col items-start justify-center px-4 py-3 shadow-lg"
                style={{ zIndex: z }}
              >
                <div className="mb-2 flex w-full justify-between items-center text-xs font-bold">
                  <div className="w-6 h-6">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#FF322E"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {card.icon.props.children}
                    </svg>
                  </div>
                </div>
                <h2 className="text-sm font-bold mb-1 leading-tight">
                  {card.title}
                </h2>
                <p className="text-xs text-black leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
