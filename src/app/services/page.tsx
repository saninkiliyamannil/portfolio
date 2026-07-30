"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Globe, Monitor, Server, Layers, Palette, Search,
  CreditCard, Cloud, Settings, Link2, Smartphone, Lightbulb, ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useSanity } from "@/contexts/SanityContext";
import { MagneticButton } from "@/components/ui/MagneticButton";

const iconMap: Record<string, LucideIcon> = {
  Globe, Monitor, Server, Layers, Palette, Search,
  CreditCard, Cloud, Settings, Link: Link2, Smartphone, Lightbulb,
};

export default function ServicesPage() {
  const { data } = useSanity();
  const services = data?.services ?? [];
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container-custom py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground"
        >
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm md:text-base mb-1 max-w-xl"
        >
          Comprehensive digital solutions tailored to your business needs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-sm mb-12"
        >
          From concept to deployment — I help businesses establish a powerful online presence.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1.5">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <MagneticButton href="/#contact" variant="primary">
            Get a Free Quote
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
