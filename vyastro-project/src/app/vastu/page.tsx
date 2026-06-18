import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building2, Store, MapPin, Compass, Wind, ArrowRight, CheckCircle } from "lucide-react";
import { SectionBadge, AuroraOrb, StarField, GlassCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vastu Shastra — Home, Office & Business Vastu Guidance",
  description:
    "AI-powered Vastu Shastra analysis for your home, office, and business. Get personalized direction guidance, energy optimization, and space correction remedies.",
  openGraph: {
    title: "Vastu Shastra | VyAstro",
    description:
      "Personalized Vastu analysis for home, office, and business. Align your spaces with cosmic energy.",
    url: "https://vyastro.com/vastu",
  },
};

const SERVICES = [
  {
    Icon: Home,
    title: "Home Vastu",
    desc: "Complete room-by-room analysis of your home for optimal energy flow, family harmony, health, and prosperity.",
    points: ["Entrance & main door analysis", "Bedroom direction guidance", "Kitchen placement (fire element)", "Puja room optimization", "Children's study room", "Master bedroom wealth activation"],
  },
  {
    Icon: Building2,
    title: "Office Vastu",
    desc: "Workspace optimization to maximize productivity, team harmony, leadership presence, and business growth.",
    points: ["Director/MD cabin placement", "Employee seating directions", "Entrance energy assessment", "Conference room optimization", "Finance department Vastu", "Client reception area"],
  },
  {
    Icon: Store,
    title: "Business Vastu",
    desc: "Commercial space analysis specifically designed to attract customers, increase turnover, and remove growth obstacles.",
    points: ["Cash counter placement", "Product display optimization", "Customer flow mapping", "Storage and inventory direction", "Business signage guidance", "Growth zone activation"],
  },
  {
    Icon: MapPin,
    title: "Property Analysis",
    desc: "Pre-purchase or pre-construction analysis of plot shape, direction, surrounding influences, and road positioning.",
    points: ["Plot shape analysis", "Facing direction report", "Road T-junction assessment", "Surrounding building impact", "Underground water detection guidance", "Soil quality and slope analysis"],
  },
  {
    Icon: Compass,
    title: "Direction Guidance",
    desc: "Comprehensive guide to ideal directions for every activity — sleep, work, eating, studying, and prayer — per Vastu Shastra.",
    points: ["Sleep direction by birth chart", "Ideal study direction", "Working desk facing", "Prayer and puja direction", "Dining table orientation", "Entrance door ideal facing"],
  },
  {
    Icon: Wind,
    title: "Energy Optimization",
    desc: "When structural changes aren't possible, powerful Vastu remedies using colors, crystals, symbols, and Yantras.",
    points: ["Color therapy per zone", "Crystal grid placement", "Mirror placement rules", "Plant recommendations per zone", "Wind chime positioning", "Vastu Yantra installation"],
  },
];

const DIRECTIONS = [
  { dir: "N", name: "North", governs: "Wealth, Career", deity: "Kuber", color: "bg-blue-500" },
  { dir: "NE", name: "North-East", governs: "Wisdom, Spirituality", deity: "Shiva/Ishan", color: "bg-cyan-500" },
  { dir: "E", name: "East", governs: "Health, Growth", deity: "Indra", color: "bg-green-500" },
  { dir: "SE", name: "South-East", governs: "Fire, Energy", deity: "Agni", color: "bg-orange-500" },
  { dir: "S", name: "South", governs: "Fame, Recognition", deity: "Yama", color: "bg-red-500" },
  { dir: "SW", name: "South-West", governs: "Stability, Relationships", deity: "Nirrti", color: "bg-yellow-600" },
  { dir: "W", name: "West", governs: "Gains, Profits", deity: "Varuna", color: "bg-purple-500" },
  { dir: "NW", name: "North-West", governs: "Support, Travel", deity: "Vayu", color: "bg-indigo-500" },
];

const FIVE_ELEMENTS = [
  { element: "Earth", hindi: "Prithvi", zone: "South-West", color: "text-yellow-600", symbol: "◼" },
  { element: "Water", hindi: "Jal", zone: "North-East", color: "text-blue-400", symbol: "◆" },
  { element: "Fire", hindi: "Agni", zone: "South-East", color: "text-orange-400", symbol: "▲" },
  { element: "Air", hindi: "Vayu", zone: "North-West", color: "text-cyan-400", symbol: "○" },
  { element: "Space", hindi: "Akash", zone: "Center", color: "text-purple-400", symbol: "☉" },
];

export default function VastuPage() {
  return (
    <div className="bg-cosmic-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-radial" />
        <StarField />
        <AuroraOrb size={500} top="0" left="60%" opacity={0.1} color="gold" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Vastu Shastra</SectionBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white mt-6 mb-6 leading-tight">
            Align Your Space,<br />
            <span className="text-gradient-gold">Transform Your Life</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ancient Vastu Shastra decoded by AI. Personalized analysis for your home, office, and business — with actionable remedies you can implement today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              Get Vastu Analysis <ArrowRight size={16} />
            </Link>
            <Link href="/yantra-store/vastu-yantra" className="inline-flex items-center gap-2 glass border border-white/10 text-white/80 font-medium px-7 py-3.5 rounded-full hover:border-white/20 transition-colors">
              Vastu Yantra
            </Link>
          </div>
        </div>
      </section>

      {/* Five Elements */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">The Five Elements of Vastu — Pancha Bhutas</p>
          <div className="grid grid-cols-5 gap-3">
            {FIVE_ELEMENTS.map((e) => (
              <div key={e.element} className="glass rounded-xl p-4 text-center">
                <span className={`text-2xl ${e.color} block mb-2`}>{e.symbol}</span>
                <p className="text-white font-semibold text-sm">{e.element}</p>
                <p className="text-white/40 text-xs">{e.hindi}</p>
                <p className="text-white/25 text-xs mt-1">{e.zone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
            Our Vastu Services
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Every analysis is personalized, actionable, and backed by 5,000 years of Vastu Shastra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ Icon, title, desc, points }) => (
            <GlassCard key={title} className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Icon size={18} className="text-gold-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
              <ul className="space-y-1.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-white/50">
                    <CheckCircle size={11} className="text-gold-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Compass Directions */}
      <section className="py-20 bg-cosmic-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-white mb-4">
              The 8 Directions of Vastu
            </h2>
            <p className="text-white/45">Each direction governs a specific life area, ruled by a cosmic deity and element.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DIRECTIONS.map((d) => (
              <div key={d.dir} className="glass rounded-xl p-4 text-center space-y-2 border border-white/5 hover:border-white/10 transition-colors">
                <div className={`w-8 h-8 rounded-full ${d.color} mx-auto flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{d.dir}</span>
                </div>
                <p className="text-white font-semibold text-sm">{d.name}</p>
                <p className="text-white/45 text-xs">{d.governs}</p>
                <p className="text-white/25 text-xs">{d.deity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-10 sm:p-14 text-center border border-gold-500/20 relative overflow-hidden">
          <AuroraOrb size={300} top="50%" left="50%" opacity={0.15} color="gold" />
          <div className="relative z-10">
            <p className="text-gold-400 text-sm font-medium mb-4 uppercase tracking-widest">Start Today</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
              Harmonize Your Space
            </h2>
            <p className="text-white/50 mb-8">
              Join the waitlist for a comprehensive AI-powered Vastu analysis of your home or office.
            </p>
            <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Get Vastu Analysis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
