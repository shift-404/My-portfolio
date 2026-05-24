"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import uk from "./translations/uk";
import en from "./translations/en";

export type Language = "uk" | "en";

const translations: Record<Language, Record<string, string>> = { uk, en };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  showModal: boolean;
  setShowModal: (v: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "uk",
  setLang: () => {},
  t: (key: string) => key,
  showModal: false,
  setShowModal: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("uk");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored && ["uk", "en"].includes(stored)) {
      setLangState(stored);
    } else {
      setShowModal(true);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    setShowModal(false);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang]?.[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, showModal, setShowModal }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
