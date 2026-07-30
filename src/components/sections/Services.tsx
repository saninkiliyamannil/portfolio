"use client";

import type { LucideIcon } from "lucide-react";
import {
  Globe, Monitor, Server, Layers, Palette, Search,
  CreditCard, Cloud, Settings, Link2, Smartphone, Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, ScaleOnScroll } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

const iconMap: Record<string, LucideIcon> = {
  Globe, Monitor, Server, Layers, Palette, Search,
  CreditCard, Cloud, Settings, Link: Link2, Smartphone, Lightbulb,
};

function ServiceCard({ service, index }: { service: { title: string; description: string; icon: string }; index: number }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <ScaleOnScroll>
      <div className="p-6 rounded-2xl border border-border bg-card group">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <Icon size={20} className="text-primary" />
        </div>
        <h3 className="font-semibold text-sm mb-1.5">{service.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </ScaleOnScroll>
  );
}

export function Services() {
  const { data } = useSanity();
  const services = data?.services ?? [];
  return (
    <section id="services" className="section-padding relative bg-section">
      <div className="container-custom">
        <SectionHeading
          title="Services"
          subtitle="What I can do for you — turning ideas into digital reality."
        />

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <MagneticButton href="/services" variant="secondary">
            View All Services
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
