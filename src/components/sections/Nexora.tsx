"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageSquare, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Globe, Layers, Search, CreditCard,
  Palette as PaletteIcon, Cloud, Link, Settings,
  Briefcase, Smile, Zap, Activity,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, ScaleOnScroll, RevealStagger, RevealStaggerItem } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

const iconMap: Record<string, LucideIcon> = {
  Globe, Layers, Search, CreditCard, Palette: PaletteIcon, Cloud, Link, Settings,
  Briefcase, Smile, Zap, Activity,
};

function StatCard({ stat, index }: { stat: { label: string; value: string; icon: string; suffix: string }; index: number }) {
  const Icon = iconMap[stat.icon] || Briefcase;
  return (
    <RevealStaggerItem>
      <div className="p-5 rounded-2xl border border-border bg-card text-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <Icon size={20} className="text-primary" />
        </div>
        <div className="text-xl md:text-2xl font-bold text-foreground">
          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
        </div>
        <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
      </div>
    </RevealStaggerItem>
  );
}

function ServiceCard({ service, index }: { service: { title: string; description: string; icon: string }; index: number }) {
  const Icon = iconMap[service.icon] || Globe;
  return (
    <ScaleOnScroll>
      <div className="p-4 rounded-xl border border-border bg-card group hover:border-primary/30 transition-colors">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          <Icon size={16} className="text-primary" />
        </div>
        <h4 className="font-medium text-xs">{service.title}</h4>
        <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{service.description}</p>
      </div>
    </ScaleOnScroll>
  );
}

export function Nexora() {
  const { data } = useSanity();
  const nexoraInfo = data?.nexoraInfo;
  return (
    <section id="nexora" className="section-padding relative bg-section">
      <div className="container-custom">
        <SectionHeading
          title="BuildWithNexora"
          subtitle="My digital agency — building modern, scalable, and high-performing digital solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-14">
          <Reveal className="lg:col-span-3">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{nexoraInfo?.name}</h3>
              <p className="text-primary text-sm font-medium mb-4 italic">
                &ldquo;{nexoraInfo?.tagline}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {nexoraInfo?.description}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mission:</strong> {nexoraInfo?.mission}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <MagneticButton href={nexoraInfo?.url ?? "#"} variant="primary">
                  <ExternalLink size={14} /> Visit Website
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary">
                  <MessageSquare size={14} /> Request a Quote
                </MagneticButton>
                <MagneticButton href="#contact" variant="outline">
                  <Mail size={14} /> Contact Agency
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <RevealStagger className="lg:col-span-2 grid grid-cols-2 gap-3">
            {(nexoraInfo?.stats ?? []).map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </RevealStagger>
        </div>

        <Reveal>
          <div>
            <h3 className="text-lg font-semibold text-center mb-6">Services Offered</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {(nexoraInfo?.services ?? []).map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-center mb-4">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {(nexoraInfo?.techStack ?? []).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
