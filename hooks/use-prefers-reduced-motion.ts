"use client";

import { useEffect, useState } from "react";

export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (): void => {
      setPrefersReducedMotion(motionQuery.matches);
    };

    update();
    motionQuery.addEventListener("change", update);

    return () => motionQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
};
