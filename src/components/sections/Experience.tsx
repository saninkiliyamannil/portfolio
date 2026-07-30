"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStaggerItem } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

const typeConfig = {
  education: { icon: GraduationCap, label: "Education" },
  certification: { icon: Award, label: "Certification" },
  workshop: { icon: BookOpen, label: "Workshop" },
  experience: { icon: Briefcase, label: "Experience" },
  goal: { icon: Target, label: "Goal" },
};

function TimelineItem({ item }: { item: { title: string; organization: string; period: string; description: string; type: string; highlights?: string[] } }) {
  const config = typeConfig[item.type as keyof typeof typeConfig];

  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-border"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
      />
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-border bg-background flex items-center justify-center -translate-x-1/2">
        <config.icon size={10} className="text-primary" />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary">
            {config.label}
          </span>
          <span className="text-xs text-muted-foreground">{item.period}</span>
        </div>
        <h3 className="font-semibold text-sm mt-1">{item.title}</h3>
        <p className="text-xs text-primary font-medium">{item.organization}</p>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
          {item.description}
        </p>
        {item.highlights && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-section text-muted-foreground border border-border"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const { data } = useSanity();
  const experience = data?.experience ?? [];
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Experience & Education"
          subtitle="My journey in tech — education, certifications, and professional experience."
        />

        <Reveal>
          <div className="max-w-3xl mx-auto">
            {experience.map((item) => (
              <RevealStaggerItem key={item._id || item.title}>
                <TimelineItem item={item} />
              </RevealStaggerItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
