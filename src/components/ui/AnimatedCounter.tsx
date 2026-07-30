"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: string;
  suffix?: string;
}

export function AnimatedCounter({ end, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numeric = parseInt(end.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numeric);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const duration = 2000;
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setCount(numeric);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, numeric, isNumeric]);

  return (
    <span ref={ref}>
      {isNumeric ? count : end}
      {suffix}
    </span>
  );
}
