import type { PersonalInfo, NavLink, SkillCategory, Project, ExperienceItem, Achievement, Service, NexoraInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Mohammed Sanin Kiliyamannil",
  greeting: "Hi, I'm",
  role: "DevOps Engineer Intern @ Zoople Technologies • Founder of BuildWithNexora",
  email: "saninkiliyamannil@gmail.com",
  phone: "+91 73565 12384",
  location: "Kerala, India",
  resumeUrl: "/resume.docx",
  shortBio:
    "A Bachelor of Computer Applications (BCA) graduate and DevOps Engineer Intern at Zoople Technologies. Founder of BuildWithNexora — helping businesses build modern, scalable digital solutions. Passionate about full-stack development, cloud technologies, and creating exceptional user experiences.",
  aboutDescription: `I am a BCA graduate with a deep passion for software engineering, DevOps, and building digital products that make a real impact. Currently interning as a DevOps Engineer at Zoople Technologies in HiLITE Business Park, Calicut, I work with Linux, Docker, CI/CD pipelines, and cloud deployment to streamline infrastructure and development workflows.

Alongside my internship, I founded BuildWithNexora, a digital agency that provides complete web solutions — from custom website development and SEO to payment gateway integration, UI/UX design, and cloud deployment. Leading client projects has sharpened my ability to deliver high-quality, scalable solutions on time.

My goal is to bridge the gap between development and operations while crafting user-focused applications. I believe in continuous learning and staying at the forefront of technology to solve real-world problems effectively.`,
  careerObjective:
    "To build scalable, secure, and user-focused digital products while growing as a Full Stack Software Engineer and DevOps professional, helping businesses transform ideas into impactful solutions.",
};

export const socialLinks = {
  github: "https://github.com/saninkiliyamannil",
  linkedin: "https://linkedin.com/in/saninkiliyamannil",
  instagram: "https://instagram.com/isaninkm",
  email: "mailto:saninkiliyamannil@gmail.com",
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Nexora", href: "#nexora" },
  { name: "Achievements", href: "#achievements" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Code2",
    color: "#3B82F6",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    color: "#8B5CF6",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication", level: 78 },
      { name: "JWT", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    color: "#06B6D4",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 72 },
      { name: "Prisma", level: 76 },
      { name: "Supabase", level: 70 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    color: "#10B981",
    skills: [
      { name: "Linux", level: 82 },
      { name: "Docker", level: 80 },
      { name: "GitHub Actions", level: 78 },
      { name: "CI/CD", level: 80 },
      { name: "Nginx", level: 72 },
      { name: "Cloud Deployment", level: 78 },
    ],
  },
  {
    title: "Design",
    icon: "Palette",
    color: "#F59E0B",
    skills: [
      { name: "Figma", level: 82 },
      { name: "Canva", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    color: "#EC4899",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 78 },
      { name: "Vercel", level: 82 },
      { name: "Netlify", level: 80 },
      { name: "Antigravity", level: 99 },
    ],
  },
  {
    title: "AI Tools",
    icon: "Bot",
    color: "#8B5CF6",
    skills: [
      { name: "ChatGPT", level: 92 },
      { name: "Claude", level: 90 },
      { name: "Gemini", level: 85 },
      { name: "GitHub Copilot", level: 88 },
      { name: "OpenCode", level: 85 },
      { name: "Replit", level: 80 },
      { name: "Stitch", level: 75 },
      { name: "Canva AI", level: 82 },
      { name: "Figma AI", level: 80 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "FinTrackar",
    description:
      "A comprehensive financial tracking application with interactive dashboards, expense categorization, and insightful analytics to help users manage their personal finances effectively.",
    image: "/images/projects/fintrackar.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT"],
    github: "https://github.com/saninkiliyamannil/fintrackar",
    live: "https://fintrackar.vercel.app",
    featured: true,
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat application powered by AI that provides contextual responses, natural language processing, and seamless conversation management.",
    image: "/images/projects/ai-chat.jpg",
    technologies: ["Next.js", "OpenAI", "Tailwind CSS", "TypeScript", "Prisma"],
    github: "https://github.com/saninkiliyamannil/ai-chat",
    live: "https://ai-chat-sanin.vercel.app",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated personal portfolio showcasing projects, skills, and experience with a premium design, smooth interactions, and Three.js backgrounds.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Three.js", "GSAP", "Tailwind CSS"],
    github: "https://github.com/saninkiliyamannil/portfolio",
    live: "https://sanin.dev",
    featured: true,
  },
  {
    title: "College Management System",
    description:
      "A full-featured college management system handling student records, attendance tracking, course management, and administrative workflows.",
    image: "/images/projects/college-mgmt.jpg",
    technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS", "JWT"],
    github: "https://github.com/saninkiliyamannil/college-mgmt",
    live: "https://college-mgmt.vercel.app",
  },
  {
    title: "Task Manager Pro",
    description:
      "A productivity application with drag-and-drop functionality, priority management, collaborative features, and real-time updates.",
    image: "/images/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/saninkiliyamannil/task-manager",
    live: "https://task-manager-sanin.vercel.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "A visually stunning weather application with real-time data, 7-day forecasts, interactive maps, and location-based weather updates.",
    image: "/images/projects/weather.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Geolocation"],
    github: "https://github.com/saninkiliyamannil/weather-dashboard",
    live: "https://weather-sanin.vercel.app",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    type: "experience",
    title: "DevOps Engineer Intern",
    organization: "Zoople Technologies",
    period: "July 2026 - Present",
    description:
      "Working on Linux administration, Docker containerization, CI/CD pipeline management, Git workflows, cloud deployment, infrastructure automation, and monitoring at HiLITE Business Park, Calicut.",
    highlights: [
      "Linux Administration",
      "Docker & Containerization",
      "CI/CD Pipelines",
      "Cloud Deployment",
      "Infrastructure Automation",
      "Monitoring & Best Practices",
    ],
  },
  {
    id: 2,
    type: "experience",
    title: "Founder & Lead Developer",
    organization: "BuildWithNexora",
    period: "March 2026 - Present",
    description:
      "Founded and operate a digital agency providing complete web solutions including custom development, SEO, payment gateway integration, UI/UX design, and cloud deployment for clients.",
    highlights: [
      "Custom Web Development",
      "Full Stack Applications",
      "UI/UX Design",
      "SEO Optimization",
      "Payment Gateway Integration",
      "Cloud Deployment & Hosting",
    ],
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "GEMS Arts & Science College (Autonomous), Ramapuram, Calicut University",
    period: "2023 - 2026",
    description:
      "Graduated with a Bachelor of Computer Applications with focus on software development, web technologies, database management, and modern computing paradigms.",
    highlights: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management",
      "Object-Oriented Programming",
    ],
  },
  {
    id: 4,
    type: "education",
    title: "Higher Secondary Education",
    organization: "Kerala State Board",
    period: "2022 - 2023",
    description:
      "Completed higher secondary education with a focus on computer science and mathematics, building a strong foundation for my tech career.",
    highlights: ["Computer Science", "Mathematics", "Physics"],
  },
  {
    id: 5,
    type: "certification",
    title: "Full Stack Web Development",
    organization: "Online Platform",
    period: "2024",
    description:
      "Comprehensive certification covering modern full-stack development with React, Node.js, and cloud deployment.",
    highlights: ["React & Next.js", "Node.js & Express", "MongoDB & SQL", "Cloud Deployment"],
  },
  {
    id: 7,
    type: "workshop",
    title: "UI/UX Design Workshop",
    organization: "Design Community",
    period: "2024",
    description:
      "Intensive workshop on modern UI/UX principles, design thinking, Figma mastery, and creating user-centered interfaces.",
    highlights: ["Figma Mastery", "Design Systems", "Prototyping", "User Research"],
  },
  {
    id: 8,
    type: "goal",
    title: "Future Career Goals",
    organization: "Self Development",
    period: "Ongoing",
    description:
      "Aspiring to grow as a Full Stack Software Engineer and DevOps professional, contributing to impactful projects and leading innovative digital solutions.",
    highlights: [
      "Cloud Architecture",
      "System Design",
      "Open Source Contributions",
      "Tech Leadership",
    ],
  },
];

export const achievements: Achievement[] = [
  { label: "Projects Completed", value: "25", icon: "Code2", suffix: "+" },
  { label: "Technologies Learned", value: "30", icon: "Zap", suffix: "+" },
  { label: "GitHub Contributions", value: "1000", icon: "GitCommit", suffix: "+" },
  { label: "Certifications", value: "8", icon: "Award", suffix: "" },
  { label: "Coding Challenges", value: "150", icon: "Brain", suffix: "+" },
  { label: "Happy Clients", value: "12", icon: "Smile", suffix: "+" },
  { label: "Business Projects", value: "20", icon: "Briefcase", suffix: "+" },
];

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Custom websites built with modern frameworks, optimized for performance, SEO, and user experience.",
    icon: "Globe",
  },
  {
    title: "Frontend Development",
    description:
      "Beautiful, responsive interfaces built with React, Next.js, and Tailwind CSS for pixel-perfect designs.",
    icon: "Monitor",
  },
  {
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js, Express, and robust database architectures.",
    icon: "Server",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end application development from database design to deployment and maintenance.",
    icon: "Layers",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered designs crafted in Figma with focus on accessibility, usability, and visual appeal.",
    icon: "Palette",
  },
  {
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO strategies to improve search rankings and drive organic traffic.",
    icon: "Search",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure payment processing integration with Razorpay, Stripe, and other popular gateways.",
    icon: "CreditCard",
  },
  {
    title: "DevOps & Cloud Deployment",
    description:
      "CI/CD pipelines, Docker containerization, cloud infrastructure setup, and automated deployments.",
    icon: "Cloud",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing maintenance, security updates, performance monitoring, and content management.",
    icon: "Settings",
  },
  {
    title: "API Integration",
    description:
      "Custom API development and third-party API integration for seamless data flow and automation.",
    icon: "Link",
  },
  {
    title: "Responsive Web Design",
    description:
      "Mobile-first responsive designs ensuring perfect experiences across all devices and screen sizes.",
    icon: "Smartphone",
  },
  {
    title: "Technical Consulting",
    description:
      "Expert advice on technology stack, architecture, best practices, and digital strategy.",
    icon: "Lightbulb",
  },
];

export const nexoraInfo: NexoraInfo = {
  name: "BuildWithNexora",
  tagline: "Build Modern. Build Scalable. Build With Nexora.",
  mission:
    "Empowering businesses with cutting-edge digital solutions — from stunning websites to robust cloud infrastructure.",
  description:
    "BuildWithNexora is a digital agency founded by Mohammed Sanin Kiliyamannil that provides complete web solutions. We help businesses establish a powerful online presence through custom website development, SEO optimization, payment gateway integration, UI/UX design, cloud deployment, and technical consulting. Our approach combines modern technology with business strategy to deliver measurable results.",
  url: "https://buildwithnexora.netlify.app",
  services: [
    {
      title: "Website Development",
      description: "Custom responsive websites built with modern frameworks.",
      icon: "Globe",
    },
    {
      title: "Full Stack Applications",
      description: "End-to-end web applications with scalable architecture.",
      icon: "Layers",
    },
    {
      title: "SEO Optimization",
      description: "Improve search rankings and drive organic traffic.",
      icon: "Search",
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing with popular gateways.",
      icon: "CreditCard",
    },
    {
      title: "UI/UX Design",
      description: "User-centered designs that convert visitors into customers.",
      icon: "Palette",
    },
    {
      title: "DevOps & Cloud",
      description: "CI/CD, Docker, cloud deployment, and infrastructure automation.",
      icon: "Cloud",
    },
    {
      title: "API Development",
      description: "Custom APIs and third-party integrations.",
      icon: "Link",
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support, updates, and performance monitoring.",
      icon: "Settings",
    },
  ],
  stats: [
    { label: "Projects Delivered", value: "20", icon: "Briefcase", suffix: "+" },
    { label: "Happy Clients", value: "12", icon: "Smile", suffix: "+" },
    { label: "Technologies Used", value: "25", icon: "Zap", suffix: "+" },
    { label: "Uptime Guaranteed", value: "99.9", icon: "Activity", suffix: "%" },
  ],
  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Figma",
  ],
};
