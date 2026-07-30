import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { RootProvider } from "@/components/providers/RootProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Sanin Kiliyamannil | DevOps Engineer & Founder of BuildWithNexora",
  description:
    "Portfolio of Mohammed Sanin Kiliyamannil — BCA Graduate, DevOps Engineer Intern @ Zoople Technologies, and Founder of BuildWithNexora. Full Stack Developer, UI/UX Designer, and Cloud Enthusiast from Kerala, India.",
  keywords: [
    "Mohammed Sanin Kiliyamannil",
    "Sanin",
    "DevOps Engineer",
    "Zoople Technologies",
    "BuildWithNexora",
    "BCA Graduate",
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "Kerala",
    "React",
    "Next.js",
    "Docker",
    "Cloud Computing",
    "Portfolio",
  ],
  authors: [{ name: "Mohammed Sanin Kiliyamannil" }],
  creator: "Mohammed Sanin Kiliyamannil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanin.dev",
    siteName: "Mohammed Sanin Kiliyamannil",
    title: "Mohammed Sanin Kiliyamannil | DevOps Engineer & Founder of BuildWithNexora",
    description:
      "BCA Graduate • DevOps Engineer Intern @ Zoople Technologies • Founder of BuildWithNexora. Building modern, scalable digital solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Sanin Kiliyamannil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Sanin Kiliyamannil | DevOps Engineer & Founder of BuildWithNexora",
    description:
      "BCA Graduate • DevOps Engineer Intern @ Zoople Technologies • Founder of BuildWithNexora.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://sanin.dev"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammed Sanin Kiliyamannil",
      url: "https://sanin.dev",
      jobTitle: ["DevOps Engineer Intern", "Founder of BuildWithNexora", "Full Stack Developer"],
      address: { "@type": "PostalAddress", addressLocality: "Kerala", addressCountry: "IN" },
      sameAs: [
        "https://github.com/saninkiliyamannil",
        "https://linkedin.com/in/saninkiliyamannil",
        "https://instagram.com/isaninkm",
      ],
      knowsAbout: [
        "DevOps",
        "Cloud Computing",
        "Full Stack Development",
        "UI/UX Design",
        "Docker",
        "Linux",
        "CI/CD",
        "React",
        "Next.js",
        "Node.js",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="noise-overlay" />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
