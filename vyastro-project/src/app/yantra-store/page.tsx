import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Truck, Award } from "lucide-react";
import { SectionBadge, AuroraOrb, StarField } from "@/components/ui";
import { FeaturedYantras } from "@/components/yantra/FeaturedYantras";
import { YantraCatalog } from "@/components/yantra/YantraCatalog";
import { getAIRecommendedYantras } from "@/lib/yantras";
import { YantraCard } from "@/components/yantra/YantraCard";

export const metadata: Metadata = {
  title: "Yantra Store — Sacred Geometry & Energized Yantras",
  description:
    "Browse our curated collection of authentic, energized Yantras. AI-matched to your astrological chart for maximum impact. Shri Yantra, Kuber Yantra, and more.",
  openGraph: {
    title: "Yantra Store | VyAstro",
    description:
      "Authentic energized Yantras matched to your chart by AI. Premium copper, gold-plated sacred geometry.",
    url: "https://vyastro.com/yantra-store",
  },
};

const TRUST_BADGES = [
  { Icon: Award, label: "Expert Verified", desc: "Curated by Vedic scholars" },
  { Icon: ShieldCheck, label: "Energized & Consecrated", desc: "Traditional Prana Pratishtha" },
  { Icon: Sparkles, label: "AI-Matched", desc: "Chart-based recommendations" },
  { Icon: Truck, label: "Worldwide Delivery", desc: "Secure, sacred packaging" },
];

export default function YantraStorePage() {
  const aiRecs = getAIRecommendedYantras();

  return (
    <div className="bg-cosmic-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-radial" />
        <StarField />
        <AuroraOrb size={600} top="-10%" left="50%" opacity={0.12} color="gold" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Yantra Store</SectionBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white mt-6 mb-6 leading-none">
            Sacred Geometry,<br />
            <span className="text-gradient-gold">Purposefully Chosen</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Each Yantra in our collection is a cosmic instrument — authenticated, energized, and AI-matched to your unique astrological blueprint for maximum resonance.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TRUST_BADGES.map(({ Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-gold-400" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{label}</p>
                <p className="text-white/35 text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Featured */}
        <FeaturedYantras />

        {/* AI Recommended */}
        <section className="space-y-8">
          <div className="glass-purple rounded-2xl px-6 py-5 border border-aurora-500/20 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-aurora-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles size={18} className="text-aurora-400" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-white">AI Recommended Yantras</h2>
              <p className="text-white/45 text-sm">
                These Yantras are most frequently matched by our AI based on common chart patterns, intentions, and Vastu needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiRecs.map((y) => (
              <YantraCard key={y.id} yantra={y} />
            ))}
          </div>
        </section>

        {/* Full Catalog */}
        <section id="catalog" className="space-y-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-2">
              Complete Catalog
            </h2>
            <p className="text-white/45 text-sm">Browse all Yantras by purpose, category, or search for what you need.</p>
          </div>
          <YantraCatalog />
        </section>

        {/* Benefits Section */}
        <section className="glass rounded-3xl p-10 sm:p-14 border border-white/8 space-y-10">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
              Why Our Yantras Work
            </h2>
            <p className="text-white/45 max-w-xl mx-auto text-sm">
              Not all Yantras are equal. Ours follow the precise Tantric specifications for geometry, material, and consecration.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Precise Sacred Geometry", d: "Every line, angle, and proportion follows exact Tantric Shastra specifications. Deviation even by 1° changes the resonance." },
              { t: "Pure Materials", d: "Only pure copper (99.9%) and 24K gold plating. No alloys, no shortcuts. The metal IS the conductor of cosmic energy." },
              { t: "Traditional Prana Pratishtha", d: "Each Yantra is activated through a full Vedic consecration ritual — the Prana Pratishtha — by qualified priests in a sacred setting." },
              { t: "Astrological Timing", d: "Installation on auspicious Muhurtas ensures the Yantra is activated at the peak of its celestial alignment." },
              { t: "AI Chart Matching", d: "Our AI analyzes your birth chart to identify which Yantras will resonate most powerfully with your planetary placements." },
              { t: "Expert Guidance Included", d: "Every Yantra comes with complete printed instructions for placement, activation mantra, and daily worship protocol." },
            ].map(({ t, d }) => (
              <div key={t} className="space-y-2">
                <p className="text-white font-semibold text-sm">{t}</p>
                <p className="text-white/40 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
