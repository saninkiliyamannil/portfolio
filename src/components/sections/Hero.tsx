"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useSanity } from "@/contexts/SanityContext";
import { Typewriter } from "@/components/ui/Typewriter";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const { data } = useSanity();
  const personalInfo = data?.personalInfo;
  const nexoraUrl = data?.nexoraInfo?.url ?? "https://buildwithnexora.netlify.app";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <motion.div className="container-custom relative z-10" style={{ opacity, y }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              {personalInfo?.greeting}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground"
          >
            {personalInfo?.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 h-8"
          >
            <Typewriter
              texts={[
                "DevOps Engineer Intern",
                "Founder of BuildWithNexora",
                "Full Stack Developer",
                "UI/UX Designer",
                "Cloud Enthusiast",
              ]}
              className="text-lg md:text-xl text-primary font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
          >
            {personalInfo?.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View My Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Mail size={16} /> Get in Touch
            </MagneticButton>
            <MagneticButton href={nexoraUrl} variant="outline">
              <ExternalLink size={16} /> BuildWithNexora
            </MagneticButton>
            <MagneticButton href={data?.personalInfo?.resumeUrl ?? "/resume.docx"} variant="outline">
              <Download size={16} /> Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Connect</span>
            <span className="w-8 h-px bg-border" />
            {[
              { href: data?.personalInfo?.socialLinks?.whatsapp ? `https://wa.me/${data.personalInfo.socialLinks.whatsapp}` : "#", Icon: FaWhatsapp, label: "WhatsApp" },
              { href: data?.personalInfo?.socialLinks?.github, Icon: FaGithub, label: "GitHub" },
              { href: data?.personalInfo?.socialLinks?.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
              { href: data?.personalInfo?.socialLinks?.instagram, Icon: FaInstagram, label: "Instagram" },
              { href: data?.personalInfo?.email ? `mailto:${data.personalInfo.email}` : "#", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: scrollOpacity }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown size={14} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
