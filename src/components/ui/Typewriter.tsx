"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  className?: string;
}

export function Typewriter({ texts, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = texts[index];
    const timer = setTimeout(
      () => {
        if (forward) {
          if (char < current.length) {
            setChar((c) => c + 1);
          } else {
            setForward(false);
          }
        } else {
          if (char > 0) {
            setChar((c) => c - 1);
          } else {
            setForward(true);
            setIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      forward ? 80 : 40
    );
    return () => clearTimeout(timer);
  }, [char, forward, index, texts]);

  return (
    <span className={className}>
      {texts[index].slice(0, char)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
