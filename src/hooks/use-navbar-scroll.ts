"use client";

import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

// Minimum scroll distance after a direction change before hiding/showing the navbar
const SCROLL_THRESHOLD = 60;

export function useNavbarScroll() {
  const yVal = useMotionValue(0);
  const opacityVal = useMotionValue(1);
  const isVisibleRef = useRef(true);
  const directionChangeY = useRef(0);
  const lastDelta = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (currentScrollY < 10) {
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          animate(yVal, 0, spring);
          animate(opacityVal, 1, spring);
        }
        directionChangeY.current = 0;
        lastDelta.current = 0;
        return;
      }

      // Record Y whenever scroll direction changes
      if ((delta > 0 && lastDelta.current <= 0) || (delta < 0 && lastDelta.current >= 0)) {
        directionChangeY.current = currentScrollY;
      }
      lastDelta.current = delta;

      if (delta > 0 && isVisibleRef.current) {
        if (currentScrollY - directionChangeY.current > SCROLL_THRESHOLD) {
          isVisibleRef.current = false;
          animate(yVal, -120, spring);
          animate(opacityVal, 0, spring);
        }
      } else if (delta < 0 && !isVisibleRef.current) {
        if (directionChangeY.current - currentScrollY > SCROLL_THRESHOLD) {
          isVisibleRef.current = true;
          animate(yVal, 0, spring);
          animate(opacityVal, 1, spring);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacityVal, yVal]);

  return { yVal, opacityVal };
}
