"use client";

import { useState } from "react";
import { Mail, MessageSquare, Twitter, Instagram, CheckCircle, Loader2 } from "lucide-react";
import { SectionBadge, AuroraOrb, StarField } from "@/components/ui";

const TOPICS = [
  "General Inquiry",
  "Partnership / Collaboration",
  "Media & Press",
  "Expert Astrologer / Vastu Consultant",
  "Technical Support",
  "Yantra Store",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-cosmic-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-radial" />
        <StarField />
        <AuroraOrb size={400} top="0" left="60%" opacity={0.1} color="purple" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <SectionBadge>Contact Us</SectionBadge>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-white mt-6 mb-4">
            Get in <span className="text-gradient-aurora">Touch</span>
          </h1>
          <p className="text-white/50 text-lg">
            Whether you have a question, want to collaborate, or are an expert astrologer interested in joining VyAstro — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/8 space-y-5">
              <h2 className="font-display text-xl font-semibold text-white">Ways to Connect</h2>
              {[
                { Icon: Mail, label: "Email", value: "hello@vyastro.com", href: "mailto:hello@vyastro.com" },
                { Icon: MessageSquare, label: "WhatsApp", value: "Coming soon", href: "#" },
                { Icon: Twitter, label: "Twitter / X", value: "@vyastro", href: "https://twitter.com/vyastro" },
                { Icon: Instagram, label: "Instagram", value: "@vyastro", href: "https://instagram.com/vyastro" },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-aurora-500/30 transition-colors">
                    <Icon size={15} className="text-white/50 group-hover:text-aurora-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{label}</p>
                    <p className="text-white/70 text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 border border-gold-500/15 space-y-3">
              <p className="text-gold-400 text-sm font-semibold">Are you an expert?</p>
              <p className="text-white/45 text-xs leading-relaxed">
                We&apos;re looking for verified Jyotish astrologers and Vastu consultants to collaborate with. If you&apos;d like to contribute your expertise to the VyAstro platform, reach out with your credentials.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/8 space-y-2">
              <p className="text-white/40 text-xs uppercase tracking-wider">Response Time</p>
              <p className="text-white/70 text-sm">We typically respond within <span className="text-aurora-400 font-medium">24–48 hours</span> on business days.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-3xl p-14 border border-aurora-500/20 flex flex-col items-center gap-5 text-center">
                <CheckCircle size={52} className="text-aurora-400" />
                <h2 className="font-display text-2xl font-semibold text-white">Message Received!</h2>
                <p className="text-white/50">
                  Thank you for reaching out. We&apos;ll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10 border border-white/8 space-y-4">
                <h2 className="font-display text-2xl font-semibold text-white mb-6">Send a Message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/40 text-xs">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-aurora-500/40 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/40 text-xs">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-aurora-500/40 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/40 text-xs">Topic</label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-aurora-500/40 text-white/70 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  >
                    <option value="" className="bg-cosmic-900">Select a topic</option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-cosmic-900">{t}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/40 text-xs">Message *</label>
                  <textarea
                    required
                    placeholder="Tell us how we can help..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-aurora-500/40 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-60"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
