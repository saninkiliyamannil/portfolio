"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 80, color: "#3B82F6", top: "15%", left: "5%", delay: 0 },
  { size: 50, color: "#8B5CF6", top: "55%", right: "10%", delay: 0.5 },
  { size: 100, color: "#06B6D4", bottom: "20%", left: "12%", delay: 1 },
  { size: 40, color: "#3B82F6", top: "30%", right: "20%", delay: 1.5 },
  { size: 60, color: "#F59E0B", bottom: "35%", right: "5%", delay: 0.8 },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            top: shape.top,
            left: "left" in shape ? shape.left : undefined,
            right: "right" in shape ? shape.right : undefined,
            bottom: "bottom" in shape ? shape.bottom : undefined,
            opacity: 0.08,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
