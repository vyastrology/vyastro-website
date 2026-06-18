"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Bot, User, ArrowRight, Sparkles } from "lucide-react";
import { SectionBadge, SectionHeading, SectionSubtitle, AuroraOrb } from "@/components/ui";

const SAMPLE_QA = [
  {
    q: "Which direction should I sleep?",
    a: "Based on Vastu principles, sleeping with your head pointing South is ideal for health and deep sleep. East is the second-best option for those seeking mental clarity. Avoid North, as it can disrupt your body's magnetic alignment.",
  },
  {
    q: "Which Yantra is suitable for me?",
    a: "With your Lagna lord in the 10th house and a strong Jupiter, the Shri Yantra would amplify abundance in your chart. The Sri Yantra aligns with your Venus placements for prosperity and harmony.",
  },
  {
    q: "What does today's horoscope suggest?",
    a: "The Moon transiting your 11th house today favors networking and social gains. Mercury's trine to natal Jupiter brings clarity in negotiations. Avoid major financial decisions after 4 PM.",
  },
  {
    q: "Is my home Vastu compliant?",
    a: "I'd need your floor plan details to give a complete analysis. Generally, check: kitchen in SE, master bedroom in SW, entrance facing East/North, avoid toilets in NE. Share your layout for a detailed report.",
  },
];

export function AIGuideSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 bg-cosmic-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      <AuroraOrb size={500} top="50%" left="50%" opacity={0.1} color="purple" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <SectionBadge>AI Guide</SectionBadge>
          <SectionHeading>Your Intelligent Cosmic Advisor</SectionHeading>
          <SectionSubtitle className="mx-auto">
            Ask anything about Vastu, astrology, or Yantras. Get instant, personalized answers powered by ancient wisdom and modern AI.
          </SectionSubtitle>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden border border-aurora-500/20">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-500 to-gold-400 flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">VyAstro AI Guide</p>
                <p className="text-white/40 text-xs">Powered by Vedic Intelligence</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/40 text-xs">Online</span>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-6 space-y-4 min-h-[280px]">
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <User size={13} className="text-white/60" />
                </div>
                <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/80 max-w-xs">
                  {SAMPLE_QA[active].q}
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-500 to-gold-400 flex items-center justify-center flex-shrink-0">
                  <Bot size={13} className="text-white" />
                </div>
                <div className="glass-purple rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white/80 max-w-sm leading-relaxed">
                  {SAMPLE_QA[active].a}
                </div>
              </div>
            </div>

            {/* Quick questions */}
            <div className="px-6 pb-4 space-y-2">
              <p className="text-white/30 text-xs mb-3 uppercase tracking-wider">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_QA.map((qa, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      active === i
                        ? "border-aurora-500/50 bg-aurora-500/20 text-aurora-300"
                        : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    {qa.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-6 pb-6">
              <div className="flex items-center gap-3 glass rounded-2xl px-4 py-3 border border-white/10">
                <input
                  type="text"
                  placeholder="Ask about your chart, home, or Yantras..."
                  className="flex-1 bg-transparent text-white/60 text-sm outline-none placeholder-white/25"
                  readOnly
                />
                <button className="w-7 h-7 rounded-full bg-aurora-500 flex items-center justify-center flex-shrink-0">
                  <Send size={12} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/ai-guide"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 text-white font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Try AI Guide Free <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
