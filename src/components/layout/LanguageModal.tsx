"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, type Language } from "@/lib/i18n/LanguageProvider";
import { Globe } from "lucide-react";

const languages: { code: Language; labelKey: string; flag: string }[] = [
  { code: "ru", labelKey: "lang.ru", flag: "🇷🇺" },
  { code: "uk", labelKey: "lang.uk", flag: "🇺🇦" },
  { code: "en", labelKey: "lang.en", flag: "🇬🇧" },
];

export function LanguageModal() {
  const { showModal, setLang, t } = useLanguage();

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-md w-full mx-4"
          >
            <div className="relative p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-xl overflow-hidden">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-600/10 rounded-full blur-[80px]" />

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Globe size={28} className="text-accent-light" />
                </div>

                <h2 className="text-2xl font-display font-bold mb-2">
                  {t("lang.title")}
                </h2>
                <p className="text-muted text-sm mb-8">
                  {t("lang.subtitle")}
                </p>

                <div className="flex flex-col gap-3">
                  {languages.map((lang, i) => (
                    <motion.button
                      key={lang.code}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      onClick={() => setLang(lang.code)}
                      className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-border bg-background/50 hover:border-accent/30 hover:bg-accent/5 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 text-left w-full"
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <div className="text-left">
                        <span className="font-display font-bold text-foreground group-hover:text-accent-light transition-colors">
                          {t(lang.labelKey)}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
