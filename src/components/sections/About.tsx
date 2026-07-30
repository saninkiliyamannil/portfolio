"use client";

import { GraduationCap, Briefcase, Code2, Palette, Cloud, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStaggerItem } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

const highlights = [
  { icon: GraduationCap, title: "BCA Graduate", description: "Bachelor of Computer Applications degree." },
  { icon: Briefcase, title: "DevOps Engineer Intern @ Zoople", description: "Linux, Docker, CI/CD, and cloud infrastructure." },
  { icon: Code2, title: "Founder of BuildWithNexora", description: "Leading a digital agency delivering modern web solutions." },
  { icon: Palette, title: "UI/UX Designer", description: "Crafting intuitive and beautiful user experiences." },
  { icon: Cloud, title: "Cloud Enthusiast", description: "Passionate about DevOps, cloud architecture, and automation." },
  { icon: Target, title: "Continuous Learner", description: "Always exploring new technologies and improving skills." },
];

export function About() {
  const { data } = useSanity();
  const personalInfo = data?.personalInfo;
  return (
    <section id="about" className="section-padding relative bg-section">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better — my background, passion, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <Reveal>
            <div className="p-0">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                {personalInfo?.aboutDescription?.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {highlights.map((item, index) => (
              <RevealStaggerItem key={item.title}>
                <div className="flex gap-4 items-start p-4 rounded-2xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              </RevealStaggerItem>
            ))}

            <Reveal delay={0.5}>
              <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5">
                <h4 className="font-medium text-sm mb-1">Career Objective</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {personalInfo?.careerObjective}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
