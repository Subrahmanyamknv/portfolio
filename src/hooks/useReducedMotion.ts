"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const listener = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return prefersReduced;
}
