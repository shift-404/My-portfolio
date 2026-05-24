"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { socials, personalInfo } from "@/data/socials";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  telegram: <Send size={18} />,
  mail: <Mail size={18} />,
};

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      label: t("contact.email"),
      value: t("contact.writeEmail"),
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <MapPin size={16} />,
      label: t("contact.location"),
      value: personalInfo.location,
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 border-t border-border/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              {t("contact.section")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <TextReveal>{t("contact.title")}</TextReveal>
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              {t("contact.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="p-5 md:p-6 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
                <h3 className="text-lg font-display font-bold mb-4">
                  {t("contact.info")}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg border border-border bg-background/50 flex items-center justify-center text-accent-light">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-foreground hover:text-accent-light transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-6 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
                <h3 className="text-lg font-display font-bold mb-4">
                  {t("contact.social")}
                </h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-border bg-background/50 flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {socialIcons[social.icon] || <Github size={18} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                    <Send size={24} className="text-accent-light" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {t("contact.sentTitle")}
                  </h3>
                  <p className="text-muted text-sm">
                    {t("contact.sentText")}
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm text-muted font-medium">
                        {t("contact.nameLabel")}
                      </label>
                      <Input
                        placeholder={t("contact.namePlaceholder")}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-muted font-medium">
                        {t("contact.emailLabel")}
                      </label>
                      <Input
                        type="email"
                        placeholder={t("contact.emailPlaceholder")}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted font-medium">
                      {t("contact.messageLabel")}
                    </label>
                    <Textarea
                      placeholder={t("contact.messagePlaceholder")}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          message: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        {t("contact.send")}
                        <Send size={16} />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
