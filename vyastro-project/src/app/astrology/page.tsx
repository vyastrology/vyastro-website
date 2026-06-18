import type { Metadata } from "next";
import { Star, Calendar, Heart, Briefcase, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { SectionBadge, AuroraOrb, StarField, GlassCard } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vedic Astrology — Kundli, Predictions & Insights",
  description:
    "Get your complete Kundli analysis, daily predictions, compatibility reports, and AI-powered astrological guidance on VyAstro.",
  openGraph: {
    title: "Vedic Astrology | VyAstro",
    description: "AI-powered Vedic astrology platform. Kundli, daily horoscope, compatibility, and remedies.",
    url: "https://vyastro.com/astrology",
  },
};

const SERVICES = [
  {
    Icon: Star,
    title: "Kundli Analysis",
    desc: "Complete birth chart interpretation — all 12 houses, 9 planets, dashas, yogas, and detailed life predictions across every area.",
    features: ["All 12 houses analyzed", "Vimshottari Dasha", "Planetary strengths", "Yoga identification"],
  },
  {
    Icon: Calendar,
    title: "Daily Predictions",
    desc: "Personalized daily guidance calibrated to your natal chart and current planetary transits — not generic sun-sign forecasts.",
    features: ["Transit analysis", "Favorable timings", "Daily affirmations", "Weekly outlook"],
  },
  {
    Icon: Heart,
    title: "Compatibility Reports",
    desc: "Detailed Kundli Milan scoring compatibility across 36 Gunas, Mangal Dosha, and long-term relationship harmony.",
    features: ["36 Guna matching", "Mangal Dosha check", "Emotional compatibility", "Relationship remedies"],
  },
  {
    Icon: Briefcase,
    title: "Career Guidance",
    desc: "Identify your highest-potential career paths through 10th house lord, Amatyakaraka, and D10 (Dashamsha) chart analysis.",
    features: ["D10 chart analysis", "Best timing for career moves", "Business vs service clarity", "Promotion windows"],
  },
  {
    Icon: TrendingUp,
    title: "Finance Insights",
    desc: "Discover Dhana Yogas in your chart, understand your wealth cycles, and find auspicious windows for investment and expansion.",
    features: ["Dhana yoga detection", "2nd & 11th house analysis", "Investment timing", "Financial remedies"],
  },
  {
    Icon: Sparkles,
    title: "Personalized Remedies",
    desc: "Targeted, chart-specific remedies — gemstones, mantras, rituals, and Yantra recommendations to strengthen weak planets.",
    features: ["Gemstone recommendation", "Mantra prescriptions", "Puja suggestions", "Yantra pairing"],
  },
];

const PLANETS = ["Sun ☉", "Moon ☽", "Mars ♂", "Mercury ☿", "Jupiter ♃", "Venus ♀", "Saturn ♄", "Rahu ☊", "Ketu ☋"];

export default function AstrologyPage() {
  return (
    <div className="bg-cosmic-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-radial" />
        <StarField />
        <AuroraOrb size={500} top="0" left="50%" opacity={0.12} color="purple" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Jyotish Shastra</SectionBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white mt-6 mb-6 leading-tight">
            Vedic <span className="text-gradient-aurora">Astrology</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ancient Jyotish wisdom meets modern AI. Your birth chart is a cosmic blueprint — we help you read and live it.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Your Kundli <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Planets strip */}
      <section className="py-6 border-y border-white/5 overflow-hidden">
        <div className="flex gap-8 overflow-x-auto px-4 scrollbar-hide">
          {PLANETS.map((p) => (
            <span key={p} className="text-white/30 text-sm whitespace-nowrap font-medium">{p}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
            What VyAstro Reads For You
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">Every service is built on your actual chart — no generic predictions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ Icon, title, desc, features }) => (
            <GlassCard key={title} className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-aurora-600/20 border border-aurora-500/20 flex items-center justify-center">
                <Icon size={18} className="text-aurora-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/50">
                    <span className="w-1 h-1 rounded-full bg-aurora-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-10 sm:p-14 text-center border border-aurora-500/20 relative overflow-hidden">
          <AuroraOrb size={300} top="50%" left="50%" opacity={0.15} color="purple" />
          <div className="relative z-10">
            <p className="text-gold-400 text-sm font-medium mb-4 uppercase tracking-widest">Ready to begin?</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
              Discover What Your Chart Reveals
            </h2>
            <p className="text-white/50 mb-8">Join the waitlist and get a free Kundli analysis at launch.</p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Join Waitlist <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
