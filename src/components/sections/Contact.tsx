"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealStagger, RevealStaggerItem } from "@/components/ui/Reveal";
import { useSanity } from "@/contexts/SanityContext";

export function Contact() {
  const { data } = useSanity();
  const contactInfo = [
    { icon: Mail, label: "Email", value: data?.personalInfo?.email ?? "", href: data?.personalInfo?.email ? `mailto:${data.personalInfo.email}` : "#" },
    { icon: Phone, label: "Phone", value: data?.personalInfo?.phone ?? "", href: data?.personalInfo?.phone ? `tel:${data.personalInfo.phone}` : "#" },
    { icon: MapPin, label: "Location", value: data?.personalInfo?.location ?? "" },
  ];
  const socialItems = [
    { href: data?.personalInfo?.socialLinks?.github, icon: FaGithub, label: "GitHub" },
    { href: data?.personalInfo?.socialLinks?.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: data?.personalInfo?.socialLinks?.instagram, icon: FaInstagram, label: "Instagram" },
  ];
  const nexoraInfo = data?.nexoraInfo;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleEmailChange = (e: string) => {
    setForm((f) => ({ ...f, email: e }));
    if (e && !isValidEmail(e)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setEmailError("");
        setTimeout(() => setSent(false), 4000);
      }
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-section">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to make something amazing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <Reveal className="lg:col-span-2 space-y-3">
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-foreground/30 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-xs font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-xs font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-border bg-card">
              <h4 className="text-xs font-semibold mb-2">Connect</h4>
              <div className="flex gap-2">
                {socialItems.map(({ href, icon: Icon, label }) => (
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

            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <ExternalLink size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold">{nexoraInfo?.name}</h4>
                  <p className="text-[10px] text-muted-foreground">Digital Agency</p>
                </div>
              </div>
              <MagneticButton href={nexoraInfo?.url ?? "#"} variant="outline" className="w-full justify-center text-xs py-2">
                <ExternalLink size={12} /> Visit Website
              </MagneticButton>
            </div>
          </Reveal>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl border border-border bg-card"
          >
            <h3 className="font-semibold mb-5 text-sm">Send a Message</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name-contact" className="block text-xs font-medium mb-1">Name</label>
                  <input id="name-contact" type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-all text-sm"
                    placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email-contact" className="block text-xs font-medium mb-1">Email</label>
                  <input id="email-contact" type="email" required value={form.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all text-sm ${emailError ? "border-red-400 focus:border-red-500" : "border-border focus:border-foreground/40"}`}
                    placeholder="you@example.com" />
                  {emailError && <p className="text-[10px] text-red-400 mt-1">{emailError}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message-contact" className="block text-xs font-medium mb-1">Message</label>
                <textarea id="message-contact" required rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-all text-sm resize-none"
                  placeholder="Your message..." />
              </div>
              <motion.button type="submit" disabled={loading || !!emailError}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                className="w-full px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? "Sending..." : sent ? "Message Sent!" : <><Send size={14} /> Send Message</>}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
