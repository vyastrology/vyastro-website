"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { SectionBadge, SectionHeading, SectionSubtitle, AuroraOrb } from "@/components/ui";
import { useLang } from "@/lib/lang-context";

export function WaitlistSection() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", country: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-28 bg-cosmic-950 overflow-hidden">
      <AuroraOrb size={700} top="50%" left="50%" opacity={0.12} color="purple" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-12">
          <SectionBadge>Early Access</SectionBadge>
          <SectionHeading>{t.waitlist.title}</SectionHeading>
          <SectionSubtitle className="mx-auto">{t.waitlist.subtitle}</SectionSubtitle>
        </div>

        {submitted ? (
          <div className="glass rounded-3xl p-12 border border-aurora-500/20 flex flex-col items-center gap-4">
            <CheckCircle size={48} className="text-aurora-400" />
            <p className="text-white text-lg font-medium">{t.waitlist.success}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 sm:p-10 border border-aurora-500/20 space-y-4"
          >
            {[
              { key: "name", placeholder: t.waitlist.namePlaceholder, type: "text" },
              { key: "email", placeholder: t.waitlist.emailPlaceholder, type: "email" },
              { key: "country", placeholder: t.waitlist.countryPlaceholder, type: "text" },
            ].map(({ key, placeholder, type }) => (
              <input
                key={key}
                type={type}
                required
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-aurora-500/50 text-white placeholder-white/30 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
              />
            ))}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 hover:from-aurora-500 hover:to-aurora-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 disabled:opacity-60 text-sm"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : null}
              {loading ? "Joining..." : t.waitlist.cta}
            </button>

            <p className="text-white/25 text-xs">No spam. Unsubscribe anytime.</p>
          </form>
        )}
      </div>
    </section>
  );
}
