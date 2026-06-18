"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const { t } = useLang();

  const cols = [
    {
      heading: "Platform",
      links: [
        { label: t.nav.home, href: "/" },
        { label: t.nav.astrology, href: "/astrology" },
        { label: t.nav.vastu, href: "/vastu" },
        { label: t.nav.yantraStore, href: "/yantra-store" },
        { label: t.nav.aiGuide, href: "/ai-guide" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: t.nav.about, href: "/about" },
        { label: t.nav.contact, href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { label: "Kundli Analysis", href: "/astrology" },
        { label: "Vastu for Home", href: "/vastu" },
        { label: "Sacred Yantras", href: "/yantra-store" },
        { label: "AI Astrologer", href: "/ai-guide" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aurora-500 to-gold-400 flex items-center justify-center text-white font-bold text-sm">
                V
              </div>
              <span className="font-display text-xl font-semibold text-white">
                Vy<span className="text-gradient-gold">Astro</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline} The world&apos;s first intelligent platform
              combining Vastu, Yantra &amp; Astrology.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.heading} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-aurora-400">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">{t.footer.rights}</p>
          <p className="text-xs text-white/20">
            Built with ✦ for seekers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
