"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const typeConfig = {
  work: {
    icon: Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  education: {
    icon: GraduationCap,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  freelance: {
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
};

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const config = typeConfig[experience.type];

  const getLocalized = (field: { uk: string; en: string }) =>
    field[lang];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative pl-12 pb-12 last:pb-0 group"
    >
      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border group-last:bg-transparent" />

      <div
        className={`absolute left-0 top-1 w-10 h-10 rounded-full border ${config.border} ${config.bg} flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300`}
      >
        <config.icon size={16} className={config.color} />
      </div>

      <div className="p-6 rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/20 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.05)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-display font-bold text-foreground">
              {getLocalized(experience.role)}
            </h3>
            <p className="text-accent-light text-sm font-medium">
              {getLocalized(experience.company)}
            </p>
          </div>
          <span className="text-xs text-muted font-mono whitespace-nowrap px-3 py-1 rounded-full border border-border bg-background/50">
            {getLocalized(experience.period)}
          </span>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">
          {getLocalized(experience.description)}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.highlights.map((highlight, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-accent-light/80"
            >
              {getLocalized(highlight)}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="relative py-32 border-t border-border/50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              {t("experience.section")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <TextReveal>{t("experience.title")}</TextReveal>
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              {t("experience.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
