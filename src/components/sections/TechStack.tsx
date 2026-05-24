"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { techStack, type TechCategoryGroup } from "@/data/techstack";

const categoryColors: Record<TechCategoryGroup["category"], string> = {
  frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/20",
  backend: "from-green-500/20 to-emerald-500/20 border-green-500/20",
  database: "from-orange-500/20 to-yellow-500/20 border-orange-500/20",
  devops: "from-red-500/20 to-pink-500/20 border-red-500/20",
  tools: "from-purple-500/20 to-violet-500/20 border-purple-500/20",
};

const accentColors: Record<TechCategoryGroup["category"], string> = {
  frontend: "text-blue-400",
  backend: "text-green-400",
  database: "text-orange-400",
  devops: "text-red-400",
  tools: "text-purple-400",
};

export function TechStack() {
  return (
    <section id="stack" className="relative py-32 border-t border-border/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              /stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <TextReveal>Технологии</TextReveal>
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Технологии, с которыми я работаю ежедневно для создания современных веб-приложений
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative group rounded-xl border bg-surface/30 backdrop-blur-sm overflow-hidden`}
                style={{
                  borderColor: "var(--border-color, hsl(0 0% 13%))",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${categoryColors[group.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10 p-6">
                  <h3
                    className={`text-lg font-display font-bold mb-4 ${accentColors[group.category]}`}
                  >
                    {group.label}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border/50 group-hover:border-accent/20 transition-all duration-300"
                      >
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors duration-300">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
