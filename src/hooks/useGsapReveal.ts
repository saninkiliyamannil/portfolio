"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealOptions {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: string;
  delay?: number;
}

export function useGsapReveal<T extends HTMLElement>(
  options: GsapRevealOptions = {}
) {
  const ref = useRef<T>(null!);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, ...options.from },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: options.trigger ? el.closest(options.trigger) : el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          ...options.to,
        }
      );
    });

    return () => ctx.revert();
  }, [options.from, options.to, options.trigger]);

  return ref;
}
