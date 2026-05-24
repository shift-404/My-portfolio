"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const navLinks = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.stack", href: "#stack" },
  { labelKey: "nav.projects", href: "#projects" },
  { labelKey: "nav.experience", href: "#experience" },
  { labelKey: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const flagMap: Record<string, string> = {
    ru: "🇷🇺",
    uk: "🇺🇦",
    en: "🇬🇧",
  };

  const handleLanguageChange = () => {
    const langs: Array<"ru" | "uk" | "en"> = ["ru", "uk", "en"];
    const currentIndex = langs.indexOf(lang);
    const nextLang = langs[(currentIndex + 1) % langs.length];
    setLang(nextLang);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => handleClick("#home")}
            className="text-lg font-display font-bold tracking-tight hover:text-accent transition-colors duration-300"
          >
            S<span className="text-accent">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                  activeSection === link.href.slice(1)
                    ? "text-accent-light"
                    : "text-muted hover:text-foreground"
                )}
              >
                {t(link.labelKey)}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleLanguageChange}
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-all duration-300 text-sm"
              aria-label="Switch language"
              title={`${t("lang.title")}: ${t("lang." + lang)}`}
            >
              <span className="hidden md:inline">{flagMap[lang]}</span>
              <Globe size={18} className="md:hidden" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleClick(link.href)}
                  className={cn(
                    "text-2xl font-display font-bold transition-colors duration-300",
                    activeSection === link.href.slice(1)
                      ? "text-accent-light"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {t(link.labelKey)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
