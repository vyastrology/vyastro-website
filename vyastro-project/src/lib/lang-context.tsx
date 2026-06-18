"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, Language } from "@/lib/i18n";

type LangContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations["en"];
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: translations["en"],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
