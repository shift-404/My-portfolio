"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Briefcase, Users, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { personalInfo } from "@/data/socials";

const stats = [
  { icon: <Briefcase size={20} />, value: `${personalInfo.stats.experience}+`, label: "Лет опыта" },
  { icon: <Code2 size={20} />, value: `${personalInfo.stats.projects}+`, label: "Проектов" },
  { icon: <Zap size={20} />, value: `${personalInfo.stats.technologies}+`, label: "Технологий" },
  { icon: <Users size={20} />, value: `${personalInfo.stats.clients}+`, label: "Клиентов" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 border-t border-border/50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              /about
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <TextReveal>Обо мне</TextReveal>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl border border-border bg-surface/50 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-600/20 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 border-2 border-accent/30 flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-accent-light">
                        {personalInfo.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p className="text-muted text-sm">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border border-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                {personalInfo.bio}
              </p>

              <p className="text-muted leading-relaxed">
                Специализируюсь на создании full-stack приложений с использованием
                современных технологий, таких как Next.js, TypeScript и Node.js. Моя цель —
                создавать производительные, доступные и визуально впечатляющие цифровые
                продукты, решающие реальные задачи.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Docker", "AWS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-surface/50 text-muted hover:text-accent-light hover:border-accent/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-xl border border-border bg-surface/30 backdrop-blur-sm text-center hover:border-accent/20 hover:bg-accent/5 transition-all duration-500">
                  <div className="flex justify-center mb-3 text-accent-light">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
