"use client";

import Link from "next/link";
import { ArrowRight, Home, Building2, Store, MapPin, Compass, Wind } from "lucide-react";
import { SectionBadge, SectionHeading, SectionSubtitle, GlassCard, AuroraOrb } from "@/components/ui";
import { useLang } from "@/lib/lang-context";

const icons = [Home, Building2, Store, MapPin, Compass, Wind];

export function VastuSection() {
  const { t } = useLang();

  return (
    <section className="relative py-28 bg-cosmic-950 overflow-hidden">
      <AuroraOrb size={600} top="-10%" left="-10%" opacity={0.1} color="gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {t.vastu.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <GlassCard key={card.title} className="glass-gold">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold-400" />
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

          <div className="space-y-6 lg:sticky lg:top-28 order-1 lg:order-2">
            <SectionBadge>Vastu Shastra</SectionBadge>
            <SectionHeading>{t.vastu.title}</SectionHeading>
            <SectionSubtitle>{t.vastu.subtitle}</SectionSubtitle>
            <Link
              href="/vastu"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Explore Vastu <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
