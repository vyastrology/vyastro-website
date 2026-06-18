"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/astrology", label: t.nav.astrology },
    { href: "/vastu", label: t.nav.vastu },
    { href: "/yantra-store", label: t.nav.yantraStore },
    { href: "/ai-guide", label: t.nav.aiGuide },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aurora-500 to-gold-400 flex items-center justify-center text-white font-display font-bold text-sm">
            V
          </div>
          <span className="font-display text-xl font-semibold text-white">
            Vy<span className="text-gradient-gold">Astro</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="hidden sm:flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            <Globe size={12} />
            {lang === "en" ? "हिंग्लिश" : "English"}
          </button>

          <Link
            href="/#waitlist"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 hover:from-aurora-500 hover:to-aurora-400 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 glow-purple"
          >
            {t.nav.getAccess}
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/70 hover:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden glass border-t border-white/5 px-4 pb-6 pt-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-white/70 hover:text-white font-medium border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 flex gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-xs font-medium text-white/70"
            >
              <Globe size={12} />
              {lang === "en" ? "हिंग्लिश" : "English"}
            </button>
            <Link
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-gradient-to-r from-aurora-600 to-aurora-500 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              {t.nav.getAccess}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
