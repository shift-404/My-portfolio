"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { ParallaxTilt } from "@/components/animations/ParallaxTilt";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative mb-32 last:mb-0"
    >
      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isEven ? "" : "lg:direction-rtl"
        }`}
      >
        <div className={`order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <ScrollReveal
            direction={isEven ? "left" : "right"}
            delay={0.2}
          >
            <div className="space-y-6">
              <Badge variant="glow" className="text-xs tracking-wider">
                {t("projects.featured")}
              </Badge>

              <h3 className="text-3xl sm:text-4xl font-display font-bold">
                {project.title}
              </h3>

              <p className="text-lg text-muted leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button variant="glow" size="sm" className="gap-2" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.liveDemo")}
                    <ExternalLink size={14} />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    {t("projects.source")}
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <ScrollReveal
            direction={isEven ? "right" : "left"}
            delay={0.1}
          >
            <ParallaxTilt intensity={8}>
              <motion.div
                style={{ y }}
                className="relative group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border bg-surface/50 aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-600/10 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-accent-light">
                          {project.title[0]}
                        </span>
                      </div>
                      <p className="text-muted text-sm max-w-xs">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl border-2 border-accent/30" />
                  </div>
                </div>

                <div className="absolute -inset-4 bg-accent/5 rounded-[24px] blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[141px] h-[141px] bg-gradient-to-br from-accent/20 to-transparent rotate-45 translate-x-[70px] -translate-y-[70px] group-hover:translate-x-[50px] group-hover:-translate-y-[50px] transition-all duration-500" />
                </div>
              </motion.div>
            </ParallaxTilt>
          </ScrollReveal>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-32 border-t border-border/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              {t("projects.section")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <TextReveal>{t("projects.title")}</TextReveal>
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              {t("projects.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex justify-center mt-16">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/shift-404"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("projects.viewAll")}
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
