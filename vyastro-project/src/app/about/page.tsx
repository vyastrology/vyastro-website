import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Users, BookOpen } from "lucide-react";
import { SectionBadge, AuroraOrb, StarField, GlassCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "About VyAstro — Ancient Wisdom Meets Modern AI",
  description:
    "VyAstro is the world's first intelligent platform combining Vastu, Yantra & Astrology with AI-powered guidance. Learn our story, mission, and the team behind it.",
  openGraph: {
    title: "About VyAstro",
    description: "The world's first intelligent Vastu, Yantra & Astrology platform powered by AI.",
    url: "https://vyastro.com/about",
  },
};

const VALUES = [
  {
    icon: BookOpen,
    title: "Authentic Ancient Wisdom",
    desc: "We source from primary Vedic texts — Brihat Parashara Hora Shastra, Manushyalaya, Vastu Vidya — not popular simplifications. Every recommendation traces back to classical authority.",
  },
  {
    icon: Sparkles,
    title: "AI That Respects Tradition",
    desc: "Our AI doesn't replace Jyotish — it amplifies it. We use machine learning to process the complex multi-variable calculations that would take a human astrologer hours.",
  },
  {
    icon: Globe,
    title: "Global, Yet Personal",
    desc: "Ancient Vedic knowledge belongs to all of humanity. We make it accessible to seekers worldwide while preserving its depth and integrity through personalization.",
  },
  {
    icon: Users,
    title: "Community of Seekers",
    desc: "VyAstro is built for the spiritually curious modern person — someone who wants real answers, not vague generalizations, delivered with scientific rigor.",
  },
];

const TEAM = [
  {
    name: "Founder & CEO",
    role: "Vedic Astrology & AI Architecture",
    bio: "10+ years studying Jyotish under traditional Gurukul system, combined with a background in machine learning and product design.",
    initials: "VK",
    color: "from-aurora-600 to-aurora-400",
  },
  {
    name: "Chief Astrologer",
    role: "Classical Jyotish & Remedy Systems",
    bio: "PhD in Sanskrit & Vedic Studies. Author of three books on Parashari astrology. 20+ years of chart readings across 40+ countries.",
    initials: "DR",
    color: "from-gold-600 to-gold-400",
  },
  {
    name: "Vastu Consultant",
    role: "Vastu Shastra & Space Energy",
    bio: "Certified Vastu Shastra consultant with expertise in residential, commercial, and industrial Vastu. Consultant to 500+ projects.",
    initials: "AV",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    name: "Head of Technology",
    role: "AI & Platform Engineering",
    bio: "Former ML engineer at two unicorn startups. Specialized in building AI systems for complex symbolic reasoning tasks.",
    initials: "RS",
    color: "from-emerald-600 to-emerald-400",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cosmic-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-radial" />
        <StarField />
        <AuroraOrb size={600} top="-10%" left="50%" opacity={0.12} color="purple" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Our Story</SectionBadge>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold text-white mt-6 mb-6 leading-tight">
            Ancient Wisdom.<br />
            <span className="text-gradient-aurora">Modern Intelligence.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            VyAstro was born from a simple but powerful belief: the most profound guidance system in the world — Vedic astrology and Vastu — deserves to be accessible to every seeker, everywhere, in real time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-10 sm:p-16 border border-aurora-500/20 text-center relative overflow-hidden">
          <AuroraOrb size={400} top="50%" left="50%" opacity={0.1} color="purple" />
          <div className="relative z-10">
            <p className="text-aurora-400 text-sm font-medium uppercase tracking-widest mb-4">Our Mission</p>
            <blockquote className="font-display text-2xl sm:text-4xl text-white font-semibold leading-tight max-w-3xl mx-auto">
              &ldquo;To make 5,000 years of Vedic wisdom personally accessible to every modern seeker through the power of artificial intelligence.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h2 className="font-display text-4xl font-semibold text-white">
              The Problem We Solve
            </h2>
            <p className="text-white/50 leading-relaxed">
              Vedic astrology and Vastu Shastra are among humanity&apos;s most sophisticated guidance systems — capable of incredible precision when practiced correctly. But access has always been limited.
            </p>
            <p className="text-white/50 leading-relaxed">
              Finding a truly expert astrologer is rare and expensive. Vastu consultants often give conflicting advice. And the internet is flooded with low-quality, generalized, sun-sign-only content that dilutes the tradition&apos;s real power.
            </p>
            <p className="text-white/50 leading-relaxed">
              VyAstro changes this. We combine classical Vedic knowledge with modern AI to deliver the depth and personalization of an expert consultation — instantly, affordably, and in any language.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "5000+", label: "Years of Wisdom" },
              { num: "3", label: "Sciences Unified" },
              { num: "AI", label: "Powered Engine" },
              { num: "∞", label: "Personalization" },
            ].map(({ num, label }) => (
              <div key={label} className="glass rounded-2xl p-6 text-center border border-white/8">
                <p className="font-display text-3xl text-gradient-gold font-semibold mb-1">{num}</p>
                <p className="text-white/45 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cosmic-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <GlassCard key={title} className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-aurora-600/20 border border-aurora-500/20 flex items-center justify-center">
                  <Icon size={18} className="text-aurora-400" />
                </div>
                <h3 className="font-semibold text-white text-sm">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">The Team</h2>
          <p className="text-white/45 max-w-xl mx-auto">
            A rare combination of Vedic scholars, AI engineers, and product designers united by a shared purpose.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="glass rounded-2xl p-6 text-center space-y-4 border border-white/8">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto`}
              >
                <span className="text-white font-bold text-lg font-display">{member.initials}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{member.name}</p>
                <p className="text-aurora-400 text-xs font-medium">{member.role}</p>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-10 border border-aurora-500/20">
          <h2 className="font-display text-3xl font-semibold text-white mb-3">Join Our Journey</h2>
          <p className="text-white/50 mb-7">
            Be among the first to experience VyAstro. Early members shape the product and get lifetime benefits.
          </p>
          <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Join Waitlist <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
