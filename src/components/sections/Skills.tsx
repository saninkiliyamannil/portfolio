"use client";

import type { LucideIcon } from "lucide-react";
import { Code2, Server, Database, Cloud, Palette, Wrench, Bot } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Database, Cloud, Palette, Wrench, Bot,
};

function SkillCategory({ title, icon, skills }: { title: string; icon: string; skills: { name: string; level?: number }[] }) {
  const Icon = iconMap[icon] || Code2;

  return (
    <div className="p-6 rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-section border border-border text-muted-foreground"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { data } = useSanity();
  const skillCategories = data?.skillCategories ?? [];
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with on a daily basis to build amazing digital experiences."
        />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {skillCategories.map((cat) => (
              <SkillCategory key={cat.title} title={cat.title} icon={cat.icon} skills={cat.skills} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
