"use client";

import { motion } from "framer-motion";
import { useSanity } from "@/contexts/SanityContext";

export function TechStackBar() {
  const { data } = useSanity();
  const techs = Array.from(
    new Set([
      ...(data?.nexoraInfo?.techStack ?? []),
      ...(data?.skillCategories ?? []).flatMap((c) => c.skills.map((s) => s.name)),
    ])
  );
  const items = [...techs, ...techs];

  return (
    <section className="py-10 md:py-12 border-y border-border bg-section overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-4">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center font-medium">
          Technologies &amp; Tools
        </p>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-card text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
