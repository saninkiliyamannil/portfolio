"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useSanity } from "@/contexts/SanityContext";

export default function ProjectsPage() {
  const { data } = useSanity();
  const projects = data?.projects ?? [];
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
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm md:text-base mb-12 max-w-xl"
        >
          A complete collection of my work — from full-stack applications to experimental projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative h-48 md:h-52 rounded-2xl overflow-hidden border border-border bg-section">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] font-semibold">
                    <Star size={10} />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80"
                    aria-label="View source code">
                    <FaGithub size={16} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80"
                    aria-label="View live demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-4 px-1">
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-section text-muted-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <FaGithub size={12} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={12} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
