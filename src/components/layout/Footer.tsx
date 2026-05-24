"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { socials } from "@/data/socials";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { personalInfo } from "@/data/socials";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  mail: <Mail size={18} />,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-1">
              <button
                onClick={scrollToTop}
                className="text-lg font-display font-bold tracking-tight hover:text-accent transition-colors duration-300"
              >
                AR<span className="text-accent">.</span>
              </button>
              <span className="text-muted text-sm ml-4">
                &copy; {new Date().getFullYear()} {personalInfo.name}. Все права защищены.
              </span>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-surface/50 text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300"
                  aria-label={social.name}
                >
                  {iconMap[social.icon] || <Github size={18} />}
                </a>
              ))}

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-lg border border-border bg-surface/50 text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 ml-2"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
