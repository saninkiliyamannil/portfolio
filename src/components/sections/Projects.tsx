"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, ScaleOnScroll, RevealStagger, RevealStaggerItem } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

function ProjectCard({ project, index }: { project: { title: string; description: string; technologies: string[]; github: string; live: string; featured?: boolean }; index: number }) {
  return (
    <RevealStaggerItem>
      <div className="group">
        <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-border bg-section">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-3xl font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors duration-500">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </motion.div>
          {project.featured && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] font-semibold">
              <Star size={10} />
              Featured
            </div>
          )}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-all"
              aria-label="View source code"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-all"
              aria-label="View live demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="mt-4 px-1">
          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-section text-muted-foreground border border-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </RevealStaggerItem>
  );
}

export function Projects() {
  const { data } = useSanity();
  const projects = data?.projects ?? [];
  return (
    <section id="projects" className="section-padding relative bg-section">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A collection of projects I've built, showcasing my skills and passion for development."
        />

        <Reveal>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </RevealStagger>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <MagneticButton href="/projects" variant="secondary">
            View All Projects
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
