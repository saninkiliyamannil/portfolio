"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="cursor-glow"
      style={{ left: x, top: y }}
      aria-hidden="true"
    />
  );
}
