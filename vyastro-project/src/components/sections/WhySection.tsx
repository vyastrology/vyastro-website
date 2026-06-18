"use client";

import { Brain, Cpu, User, Zap, Shield } from "lucide-react";
import { SectionBadge, SectionHeading, SectionSubtitle, AuroraOrb } from "@/components/ui";
import { useLang } from "@/lib/lang-context";

const icons = [Brain, Cpu, User, Zap, Shield];

export function WhySection() {
  const { t } = useLang();

  return (
    <section id="features" className="relative py-28 bg-cosmic-950 overflow-hidden">
      <AuroraOrb size={500} top="50%" left="50%" opacity={0.08} color="purple" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <SectionBadge>Why VyAstro</SectionBadge>
          <SectionHeading>{t.why.title}</SectionHeading>
          <SectionSubtitle className="mx-auto">{t.why.subtitle}</SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 hover:border-aurora-500/30 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aurora-600/30 to-gold-500/10 border border-aurora-500/20 flex items-center justify-center group-hover:border-aurora-400/40 transition-colors">
                  <Icon size={18} className="text-aurora-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
