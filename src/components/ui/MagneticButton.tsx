"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  magnetic?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  magnetic = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (!magnetic || !ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const baseStyles =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",
    secondary:
      "bg-section/50 text-foreground border border-border hover:border-foreground/50",
    outline:
      "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref as never}
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}
