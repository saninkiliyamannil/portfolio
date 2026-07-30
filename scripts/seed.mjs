import { createClient } from "@sanity/client";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env.local");

const envContent = fs.readFileSync(envPath, "utf-8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > 0) {
      envVars[trimmed.slice(0, eqIdx).trim()] = trimmed.slice(eqIdx + 1).trim();
    }
  }
}

const client = createClient({
  projectId: envVars.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: envVars.NEXT_PUBLIC_SANITY_DATASET,
  token: envVars.SANITY_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function createIfMissing(docs, type, labelField = "title") {
  const results = [];
  for (const doc of docs) {
    const label = doc.title || doc.label || doc.name;
    const existing = await client.fetch(`*[_type == $type && ${labelField} == $label][0]`, { type, label });
    if (existing) {
      console.log(`  Skipped (exists): ${label}`);
      results.push(existing);
    } else {
      const created = await client.create({ _type: type, ...doc });
      console.log(`  Created: ${label}`);
      results.push(created);
    }
  }
  return results;
}

async function main() {
  console.log("Seeding Sanity CMS...\n");

  // 1. Personal Info
  console.log("1. Personal Info");
  const personalInfo = {
    _type: "personalInfo",
    name: "Mohammed Sanin Kiliyamannil",
    greeting: "Hi, I'm",
    role: "DevOps Engineer Intern @ Zoople Technologies • Founder of BuildWithNexora",
    email: "saninkiliyamannil@gmail.com",
    phone: "+91 73565 12384",
    location: "Kerala, India",
    resumeUrl: "/resume.pdf",
    shortBio: "A Bachelor of Computer Applications (BCA) graduate and DevOps Engineer Intern at Zoople Technologies. Founder of BuildWithNexora — helping businesses build modern, scalable digital solutions. Passionate about full-stack development, cloud technologies, and creating exceptional user experiences.",
    aboutDescription: `I am a BCA graduate with a deep passion for software engineering, DevOps, and building digital products that make a real impact. Currently interning as a DevOps Engineer at Zoople Technologies in HiLITE Business Park, Calicut, I work with Linux, Docker, CI/CD pipelines, and cloud deployment to streamline infrastructure and development workflows.

Alongside my internship, I founded BuildWithNexora, a digital agency that provides complete web solutions — from custom website development and SEO to payment gateway integration, UI/UX design, and cloud deployment. Leading client projects has sharpened my ability to deliver high-quality, scalable solutions on time.

My goal is to bridge the gap between development and operations while crafting user-focused applications. I believe in continuous learning and staying at the forefront of technology to solve real-world problems effectively.`,
    careerObjective: "To build scalable, secure, and user-focused digital products while growing as a Full Stack Software Engineer and DevOps professional, helping businesses transform ideas into impactful solutions.",
    socialLinks: {
      whatsapp: "917356512384",
      github: "https://github.com/saninkiliyamannil",
      linkedin: "https://linkedin.com/in/saninkiliyamannil",
      instagram: "https://instagram.com/isaninkm",
    },
  };
  const existingPI = await client.fetch(`*[_type == "personalInfo"][0]`);
  if (existingPI) {
    await client.patch(existingPI._id).set(personalInfo).commit();
    console.log("  Updated: Personal Info");
  } else {
    await client.create(personalInfo);
    console.log("  Created: Personal Info");
  }

  // 2. Projects
  console.log("\n2. Projects");
  const projects = [
    { title: "FinTrackar", description: "A comprehensive financial tracking application with interactive dashboards, expense categorization, and insightful analytics to help users manage their personal finances effectively.", image: null, technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT"], github: "https://github.com/saninkiliyamannil/fintrackar", live: "https://fintrackar.vercel.app", featured: true, order: 1 },
    { title: "BuildWithNexora", description: "A digital agency website showcasing complete web solutions — custom development, SEO, UI/UX design, payment gateway integration, and cloud deployment services.", image: null, technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "SEO"], github: "https://github.com/saninkiliyamannil/nexora", live: "https://buildwithnexora.netlify.app", featured: true, order: 2 },
    { title: "Portfolio Website", description: "A modern, animated personal portfolio showcasing projects, skills, and experience with a premium design, smooth interactions, and Three.js backgrounds.", image: null, technologies: ["Next.js", "Framer Motion", "Three.js", "GSAP", "Tailwind CSS"], github: "https://github.com/saninkiliyamannil/portfolio", live: "https://sanin.dev", featured: true, order: 3 },
    { title: "College Management System", description: "A full-featured college management system handling student records, attendance tracking, course management, and administrative workflows.", image: null, technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS", "JWT"], github: "https://github.com/saninkiliyamannil/college-mgmt", live: "https://college-mgmt.vercel.app", featured: false, order: 4 },
    { title: "Task Manager Pro", description: "A productivity application with drag-and-drop functionality, priority management, collaborative features, and real-time updates.", image: null, technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"], github: "https://github.com/saninkiliyamannil/task-manager", live: "https://task-manager-sanin.vercel.app", featured: false, order: 5 },
    { title: "Weather Dashboard", description: "A visually stunning weather application with real-time data, 7-day forecasts, interactive maps, and location-based weather updates.", image: null, technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Geolocation"], github: "https://github.com/saninkiliyamannil/weather-dashboard", live: "https://weather-sanin.vercel.app", featured: false, order: 6 },
  ];
  await createIfMissing(projects, "project");

  // 3. Skill Categories
  console.log("\n3. Skill Categories");
  const skillCategories = [
    { title: "Frontend", icon: "Code2", skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Bootstrap" }, { name: "Framer Motion" }], order: 1 },
    { title: "Backend", icon: "Server", skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "REST APIs" }, { name: "Authentication" }, { name: "JWT" }], order: 2 },
    { title: "Database", icon: "Database", skills: [{ name: "MongoDB" }, { name: "PostgreSQL" }, { name: "MySQL" }, { name: "Prisma" }, { name: "Supabase" }], order: 3 },
    { title: "DevOps & Cloud", icon: "Cloud", skills: [{ name: "Linux" }, { name: "Docker" }, { name: "GitHub Actions" }, { name: "CI/CD" }, { name: "Nginx" }, { name: "Cloud Deployment" }], order: 4 },
    { title: "Design", icon: "Palette", skills: [{ name: "Figma" }, { name: "Canva" }], order: 5 },
    { title: "Tools", icon: "Wrench", skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Postman" }, { name: "Vercel" }, { name: "Netlify" }, { name: "Antigravity" }], order: 6 },
    { title: "AI Tools", icon: "Bot", skills: [{ name: "ChatGPT" }, { name: "Claude" }, { name: "Gemini" }, { name: "GitHub Copilot" }, { name: "OpenCode" }, { name: "Replit" }, { name: "Stitch" }, { name: "Canva AI" }, { name: "Figma AI" }], order: 7 },
  ];
  await createIfMissing(skillCategories, "skillCategory");

  // 4. Experience
  console.log("\n4. Experience");
  const experiences = [
    { title: "DevOps Engineer Intern", organization: "Zoople Technologies", period: "July 2026 - Present", description: "Working on Linux administration, Docker containerization, CI/CD pipeline management, Git workflows, cloud deployment, infrastructure automation, and monitoring at HiLITE Business Park, Calicut.", type: "experience", highlights: ["Linux Administration", "Docker & Containerization", "CI/CD Pipelines", "Cloud Deployment", "Infrastructure Automation", "Monitoring & Best Practices"], order: 1 },
    { title: "Founder & Lead Developer", organization: "BuildWithNexora", period: "March 2026 - Present", description: "Founded and operate a digital agency providing complete web solutions including custom development, SEO, payment gateway integration, UI/UX design, and cloud deployment for clients.", type: "experience", highlights: ["Custom Web Development", "Full Stack Applications", "UI/UX Design", "SEO Optimization", "Payment Gateway Integration", "Cloud Deployment & Hosting"], order: 2 },
    { title: "Bachelor of Computer Applications (BCA)", organization: "University of Kerala", period: "2023 - 2026", description: "Graduated with a Bachelor of Computer Applications with focus on software development, web technologies, database management, and modern computing paradigms.", type: "education", highlights: ["Data Structures & Algorithms", "Web Development", "Database Management", "Object-Oriented Programming"], order: 3 },
    { title: "Higher Secondary Education", organization: "Kerala State Board", period: "2022 - 2023", description: "Completed higher secondary education with a focus on computer science and mathematics, building a strong foundation for my tech career.", type: "education", highlights: ["Computer Science", "Mathematics", "Physics"], order: 4 },
    { title: "Full Stack Web Development", organization: "Online Platform", period: "2024", description: "Comprehensive certification covering modern full-stack development with React, Node.js, and cloud deployment.", type: "certification", highlights: ["React & Next.js", "Node.js & Express", "MongoDB & SQL", "Cloud Deployment"], order: 5 },
    { title: "UI/UX Design Workshop", organization: "Design Community", period: "2024", description: "Intensive workshop on modern UI/UX principles, design thinking, Figma mastery, and creating user-centered interfaces.", type: "workshop", highlights: ["Figma Mastery", "Design Systems", "Prototyping", "User Research"], order: 6 },
    { title: "Future Career Goals", organization: "Self Development", period: "Ongoing", description: "Aspiring to grow as a Full Stack Software Engineer and DevOps professional, contributing to impactful projects and leading innovative digital solutions.", type: "goal", highlights: ["Cloud Architecture", "System Design", "Open Source Contributions", "Tech Leadership"], order: 7 },
  ];
  await createIfMissing(experiences, "experience");

  // 5. Achievements
  console.log("\n5. Achievements");
  const achievements = [
    { label: "Projects Completed", value: "25", icon: "Code2", suffix: "+", order: 1 },
    { label: "Technologies Learned", value: "30", icon: "Zap", suffix: "+", order: 2 },
    { label: "GitHub Contributions", value: "1000", icon: "GitCommit", suffix: "+", order: 3 },
    { label: "Certifications", value: "8", icon: "Award", suffix: "", order: 4 },
    { label: "Coding Challenges", value: "150", icon: "Brain", suffix: "+", order: 5 },
    { label: "Happy Clients", value: "12", icon: "Smile", suffix: "+", order: 6 },
    { label: "Business Projects", value: "20", icon: "Briefcase", suffix: "+", order: 7 },
  ];
  await createIfMissing(achievements, "achievement", "label");

  // 6. Services
  console.log("\n6. Services");
  const services = [
    { title: "Website Development", description: "Custom websites built with modern frameworks, optimized for performance, SEO, and user experience.", icon: "Globe", order: 1 },
    { title: "Frontend Development", description: "Beautiful, responsive interfaces built with React, Next.js, and Tailwind CSS for pixel-perfect designs.", icon: "Monitor", order: 2 },
    { title: "Backend Development", description: "Scalable server-side solutions with Node.js, Express, and robust database architectures.", icon: "Server", order: 3 },
    { title: "Full Stack Development", description: "End-to-end application development from database design to deployment and maintenance.", icon: "Layers", order: 4 },
    { title: "UI/UX Design", description: "User-centered designs crafted in Figma with focus on accessibility, usability, and visual appeal.", icon: "Palette", order: 5 },
    { title: "SEO Optimization", description: "Technical and on-page SEO strategies to improve search rankings and drive organic traffic.", icon: "Search", order: 6 },
    { title: "Payment Gateway Integration", description: "Secure payment processing integration with Razorpay, Stripe, and other popular gateways.", icon: "CreditCard", order: 7 },
    { title: "DevOps & Cloud Deployment", description: "CI/CD pipelines, Docker containerization, cloud infrastructure setup, and automated deployments.", icon: "Cloud", order: 8 },
    { title: "Website Maintenance", description: "Ongoing maintenance, security updates, performance monitoring, and content management.", icon: "Settings", order: 9 },
    { title: "API Integration", description: "Custom API development and third-party API integration for seamless data flow and automation.", icon: "Link", order: 10 },
    { title: "Responsive Web Design", description: "Mobile-first responsive designs ensuring perfect experiences across all devices and screen sizes.", icon: "Smartphone", order: 11 },
    { title: "Technical Consulting", description: "Expert advice on technology stack, architecture, best practices, and digital strategy.", icon: "Lightbulb", order: 12 },
  ];
  await createIfMissing(services, "service");

  // 7. Nexora Info
  console.log("\n7. Nexora Info");
  const nexoraInfo = {
    _type: "nexoraInfo",
    name: "BuildWithNexora",
    tagline: "Build Modern. Build Scalable. Build With Nexora.",
    mission: "Empowering businesses with cutting-edge digital solutions — from stunning websites to robust cloud infrastructure.",
    description: "BuildWithNexora is a digital agency founded by Mohammed Sanin Kiliyamannil that provides complete web solutions. We help businesses establish a powerful online presence through custom website development, SEO optimization, payment gateway integration, UI/UX design, cloud deployment, and technical consulting. Our approach combines modern technology with business strategy to deliver measurable results.",
    url: "https://buildwithnexora.netlify.app",
    services: [
      { title: "Website Development", description: "Custom responsive websites built with modern frameworks.", icon: "Globe" },
      { title: "Full Stack Applications", description: "End-to-end web applications with scalable architecture.", icon: "Layers" },
      { title: "SEO Optimization", description: "Improve search rankings and drive organic traffic.", icon: "Search" },
      { title: "Payment Gateway Integration", description: "Secure payment processing with popular gateways.", icon: "CreditCard" },
      { title: "UI/UX Design", description: "User-centered designs that convert visitors into customers.", icon: "Palette" },
      { title: "DevOps & Cloud", description: "CI/CD, Docker, cloud deployment, and infrastructure automation.", icon: "Cloud" },
      { title: "API Development", description: "Custom APIs and third-party integrations.", icon: "Link" },
      { title: "Website Maintenance", description: "Ongoing support, updates, and performance monitoring.", icon: "Settings" },
    ],
    stats: [
      { label: "Projects Delivered", value: "20", icon: "Briefcase", suffix: "+" },
      { label: "Happy Clients", value: "12", icon: "Smile", suffix: "+" },
      { label: "Technologies Used", value: "25", icon: "Zap", suffix: "+" },
      { label: "Uptime Guaranteed", value: "99.9", icon: "Activity", suffix: "%" },
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker", "AWS", "Vercel", "Netlify", "Figma"],
  };
  const existingNX = await client.fetch(`*[_type == "nexoraInfo"][0]`);
  if (existingNX) {
    await client.patch(existingNX._id).set(nexoraInfo).commit();
    console.log("  Updated: Nexora Info");
  } else {
    await client.create(nexoraInfo);
    console.log("  Created: Nexora Info");
  }

  console.log("\n✅ Seed complete!");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
