"use client";

import type { LucideIcon } from "lucide-react";
import { Code2, Zap, GitCommit, Award, Brain, Smile, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealStagger, RevealStaggerItem } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

const iconMap: Record<string, LucideIcon> = {
  Code2, Zap, GitCommit, Award, Brain, Smile, Briefcase,
};

function AchievementCard({ achievement, index }: { achievement: { label: string; value: string; icon: string; suffix?: string }; index: number }) {
  const Icon = iconMap[achievement.icon] || Code2;

  return (
    <RevealStaggerItem>
      <div className="p-5 rounded-2xl border border-border bg-card">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          <Icon size={20} className="text-primary" />
        </div>
        <div className="text-xl md:text-2xl font-bold text-foreground">
          <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
        </div>
        <p className="text-[11px] text-muted-foreground mt-0.5">{achievement.label}</p>
      </div>
    </RevealStaggerItem>
  );
}

export function Achievements() {
  const { data } = useSanity();
  const achievements = data?.achievements ?? [];
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Achievements"
          subtitle="Numbers that reflect my dedication and growth as a developer."
        />

        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.label} achievement={achievement} index={index} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
