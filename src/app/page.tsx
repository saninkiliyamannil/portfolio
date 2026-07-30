"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { TechStackBar } from "@/components/ui/TechStackBar";
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Nexora,
  Achievements,
  Services,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStackBar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Nexora />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
