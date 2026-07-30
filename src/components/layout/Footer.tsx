import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useSanity } from "@/contexts/SanityContext";

export function Footer() {
  const { data } = useSanity();
  const pi = data?.personalInfo;
  const email = pi?.email ? `mailto:${pi.email}` : "#";
  const icons = [
    { href: pi?.socialLinks?.github, Icon: FaGithub, label: "GitHub" },
    { href: pi?.socialLinks?.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: pi?.socialLinks?.instagram, Icon: FaInstagram, label: "Instagram" },
    { href: email, Icon: Mail, label: "Email" },
  ];
  const brand = pi?.name?.split(" ")[1] ?? "Sanin";

  return (
    <footer className="border-t border-border bg-section">
      <div className="container-custom py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#home" className="text-sm font-semibold text-foreground">
{brand}
              <span className="text-primary">.</span>
            </a>
            <span className="text-xs text-muted-foreground hidden sm:inline">{pi?.role}</span>
          </div>

          <div className="flex items-center gap-3">
            {icons.filter(i => i.href).map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {pi?.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed &amp; Developed by {brand}
          </p>
        </div>
      </div>
    </footer>
  );
}
