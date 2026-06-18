"use client";

import { SectionBadge, SectionHeading, SectionSubtitle, AuroraOrb } from "@/components/ui";
import { useLang } from "@/lib/lang-context";

export function HowItWorksSection() {
  const { t } = useLang();

  return (
    <section className="relative py-28 bg-cosmic-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      <AuroraOrb size={600} top="50%" left="50%" opacity={0.07} color="purple" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <SectionBadge>Process</SectionBadge>
          <SectionHeading>{t.howItWorks.title}</SectionHeading>
          <SectionSubtitle className="mx-auto">{t.howItWorks.subtitle}</SectionSubtitle>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-transparent via-aurora-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 lg:gap-4">
            {t.howItWorks.steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full glass border border-aurora-500/30 flex items-center justify-center z-10 relative bg-cosmic-800">
                    <span className="font-display text-xl font-semibold text-gradient-aurora">
                      {step.num}
                    </span>
                  </div>
                  {i < 4 && (
                    <div className="lg:hidden absolute top-1/2 left-full w-8 h-px bg-aurora-500/20 -translate-y-1/2 hidden sm:block" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
