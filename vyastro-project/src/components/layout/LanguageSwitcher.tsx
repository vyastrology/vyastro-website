"use client";

import { Globe } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      aria-label="Switch language"
      className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white/90 border border-white/8 hover:border-white/20 transition-all duration-200"
    >
      <Globe size={12} className="text-aurora-400 flex-shrink-0" />
      {compact ? (
        <span>{lang === "en" ? "हि" : "EN"}</span>
      ) : (
        <span>{lang === "en" ? "हिंग्लिश" : "English"}</span>
      )}
    </button>
  );
}
