"use client";

import Link from "next/link";
import { ArrowRight, Star, Calendar, Heart, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { SectionBadge, SectionHeading, SectionSubtitle, GlassCard, AuroraOrb } from "@/components/ui";
import { useLang } from "@/lib/lang-context";

const icons = [Star, Calendar, Heart, Briefcase, TrendingUp, Sparkles];

export function AstrologySection() {
  const { t } = useLang();

  return (
    <section className="relative py-28 bg-cosmic-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      <AuroraOrb size={600} top="-20%" right="-10%" opacity={0.1} color="purple" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionBadge>Astrology</SectionBadge>
            <SectionHeading>{t.astrology.title}</SectionHeading>
            <SectionSubtitle>{t.astrology.subtitle}</SectionSubtitle>
            <Link
              href="/astrology"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 text-white font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Explore Astrology <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.astrology.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <GlassCard key={card.title}>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-aurora-600/20 border border-aurora-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-aurora-400/40 transition-colors">
                      <Icon size={16} className="text-aurora-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">{card.title}</h3>
                      <p className="text-white/45 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
