"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AuroraOrb, StarField } from "@/components/ui";
import { useLang } from "@/lib/lang-context";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-950">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic-radial" />
      <StarField />
      <AuroraOrb size={600} top="-10%" left="50%" opacity={0.12} color="purple" />
      <AuroraOrb size={400} top="60%" left="-10%" opacity={0.08} color="blue" />
      <AuroraOrb size={300} top="20%" right="-5%" opacity={0.08} color="gold" />

      {/* Mandala decoration */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 30%, rgba(147,51,234,0.3) 31%, transparent 32%),
            radial-gradient(circle at 50% 50%, transparent 45%, rgba(251,191,36,0.2) 46%, transparent 47%),
            radial-gradient(circle at 50% 50%, transparent 60%, rgba(147,51,234,0.1) 61%, transparent 62%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-purple text-aurora-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
          <Sparkles size={12} className="text-gold-400" />
          {t.hero.badge}
          <Sparkles size={12} className="text-gold-400" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-none tracking-tight">
          {t.hero.headline}
          <br />
          <span className="text-gradient-gold">{t.hero.headlineAccent}</span>
        </h1>

        <p className="text-white/50 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#waitlist"
            className="flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 hover:from-aurora-500 hover:to-aurora-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 glow-purple text-sm sm:text-base"
          >
            {t.hero.cta1}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/#features"
            className="flex items-center gap-2 glass border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm sm:text-base"
          >
            {t.hero.cta2}
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg mx-auto">
          {[
            { val: "5000+", label: "Years of Wisdom" },
            { val: "3-in-1", label: "Unified Platform" },
            { val: "AI", label: "Powered Insights" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-gradient-gold">
                {val}
              </div>
              <div className="text-white/40 text-xs sm:text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-950 to-transparent" />
    </section>
  );
}
