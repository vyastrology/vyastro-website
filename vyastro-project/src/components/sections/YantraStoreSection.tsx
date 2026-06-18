"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { SectionBadge, SectionHeading, SectionSubtitle, AuroraOrb } from "@/components/ui";

const FEATURED_YANTRAS = [
  {
    name: "Shri Yantra",
    purpose: "Abundance & Prosperity",
    price: "₹2,499",
    badge: "Most Popular",
    desc: "The mother of all Yantras — 9 interlocking triangles representing the cosmos and the human body.",
    color: "from-gold-600/20 to-gold-500/5",
    border: "border-gold-500/30",
  },
  {
    name: "Kuber Yantra",
    purpose: "Wealth & Financial Growth",
    price: "₹1,899",
    badge: "AI Recommended",
    desc: "Sacred geometry dedicated to Lord Kuber, the divine treasurer. Activates wealth energy in your space.",
    color: "from-aurora-600/20 to-aurora-500/5",
    border: "border-aurora-500/30",
  },
  {
    name: "Baglamukhi Yantra",
    purpose: "Protection & Victory",
    price: "₹2,199",
    badge: "Best for Business",
    desc: "Powerful protection Yantra that removes obstacles, silences enemies, and ensures victory in disputes.",
    color: "from-indigo-600/20 to-indigo-500/5",
    border: "border-indigo-500/30",
  },
];

export function YantraStoreSection() {
  return (
    <section className="relative py-28 bg-cosmic-950 overflow-hidden">
      <AuroraOrb size={500} top="30%" right="-5%" opacity={0.1} color="gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <SectionBadge>Yantra Store</SectionBadge>
            <SectionHeading>Sacred Geometry, <br /><span className="text-gradient-gold">Purposefully Chosen</span></SectionHeading>
            <SectionSubtitle>
              Each Yantra is a cosmic instrument — not decoration. Our AI matches you with the right Yantra based on your chart, intentions, and space.
            </SectionSubtitle>
          </div>
          <Link
            href="/yantra-store"
            className="inline-flex items-center gap-2 glass border border-white/10 hover:border-aurora-500/30 text-white font-medium px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap"
          >
            <ShoppingBag size={14} /> Browse Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_YANTRAS.map((y) => (
            <div
              key={y.name}
              className={`glass rounded-2xl p-6 border ${y.border} bg-gradient-to-b ${y.color} hover:scale-[1.01] transition-all duration-300 group`}
            >
              {/* Yantra visual placeholder */}
              <div className="w-full aspect-square max-w-[160px] mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/20 to-aurora-600/10 blur-xl" />
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(from 0deg, rgba(251,191,36,0.15), rgba(147,51,234,0.15), rgba(251,191,36,0.15))`,
                    borderRadius: "50%",
                  }}
                >
                  <div className="text-4xl opacity-60">✦</div>
                </div>
              </div>

              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/20 mb-3">
                {y.badge}
              </span>
              <h3 className="font-display text-xl font-semibold text-white mb-1">{y.name}</h3>
              <p className="text-aurora-400 text-xs font-medium mb-3">{y.purpose}</p>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{y.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-semibold text-lg">{y.price}</span>
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Energized & Consecrated", icon: "✦" },
            { label: "Authentic Materials", icon: "◈" },
            { label: "Expert Verified", icon: "◉" },
            { label: "Worldwide Delivery", icon: "◎" },
          ].map((b) => (
            <div key={b.label} className="glass rounded-xl p-4 text-center">
              <div className="text-gold-400 text-xl mb-2">{b.icon}</div>
              <p className="text-white/60 text-xs font-medium">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
