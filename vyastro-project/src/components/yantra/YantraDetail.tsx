"use client";

import Link from "next/link";
import { Star, ArrowLeft, Sparkles, CheckCircle, MapPin, Clock, Package } from "lucide-react";
import type { Yantra } from "@/lib/yantras";
import { AuroraOrb } from "@/components/ui";

export function YantraDetail({ yantra }: { yantra: Yantra }) {
  return (
    <div className="min-h-screen bg-cosmic-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          href="/yantra-store"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Yantra Store
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Visual */}
          <div className="relative">
            <div
              className={`glass rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-b ${yantra.color} border border-white/10 overflow-hidden`}
            >
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: `radial-gradient(circle, ${yantra.glowColor}, transparent 70%)`,
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Sacred geometry */}
                <div className="relative w-56 h-56">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full border border-gold-400/15"
                      style={{ transform: `scale(${1 - i * 0.2}) rotate(${i * 22.5}deg)` }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl text-gold-300/70">{yantra.symbol}</span>
                  </div>
                </div>
                <p className="text-white/30 text-sm font-display italic">{yantra.sanskritName}</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-3 mt-4">
              {yantra.badge && (
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/20">
                  {yantra.badge}
                </span>
              )}
              {yantra.aiRecommended && (
                <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-aurora-500/15 text-aurora-300 border border-aurora-500/20">
                  <Sparkles size={10} /> AI Recommended
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-aurora-400 text-sm font-medium mb-1">{yantra.deity}</p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight mb-2">
                {yantra.name}
              </h1>
              <p className="text-gold-400 font-medium">{yantra.purpose}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(yantra.rating) ? "text-gold-400" : "text-white/20"}
                    fill={i < Math.floor(yantra.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                {yantra.rating} ({yantra.reviewCount} reviews)
              </span>
            </div>

            <p className="text-white/55 text-sm leading-relaxed">{yantra.fullDesc}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-gold-400 font-semibold">
                ₹{yantra.price.toLocaleString()}
              </span>
              <span className="text-white/30 line-through text-lg">
                ₹{yantra.originalPrice.toLocaleString()}
              </span>
              <span className="text-green-400 text-sm font-medium">
                {Math.round((1 - yantra.price / yantra.originalPrice) * 100)}% off
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#waitlist"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-all"
              >
                Join Waitlist to Order
              </Link>
              <button className="flex-1 flex items-center justify-center gap-2 glass border border-white/15 hover:border-aurora-400/30 text-white/80 hover:text-white font-medium py-4 rounded-xl transition-all">
                <Sparkles size={14} /> Get AI Reading First
              </button>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { Icon: Package, label: "Material", val: yantra.material.split(" (")[0] },
                { Icon: MapPin, label: "Placement", val: yantra.placement.split(".")[0] },
                { Icon: Clock, label: "Activate On", val: yantra.activationDay },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <Icon size={14} className="text-aurora-400 mx-auto mb-1.5" />
                  <p className="text-white/30 text-xs mb-0.5">{label}</p>
                  <p className="text-white/70 text-xs font-medium leading-tight">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          {/* Benefits */}
          <div className="glass rounded-2xl p-8 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-white">Benefits</h2>
            <ul className="space-y-3">
              {yantra.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/60">
                  <CheckCircle size={15} className="text-aurora-400 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Usage Instructions */}
          <div className="glass rounded-2xl p-8 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-white">Usage Instructions</h2>
            <ol className="space-y-3">
              {yantra.usageInstructions.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="w-5 h-5 rounded-full bg-aurora-600/30 text-aurora-300 text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Mantras */}
          <div className="glass-gold rounded-2xl p-8 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-white">Sacred Mantras</h2>
            <div className="space-y-3">
              {yantra.mantras.map((m) => (
                <div
                  key={m}
                  className="glass rounded-xl p-4 border border-gold-500/15"
                >
                  <p className="text-gold-300 text-sm font-medium leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
            <p className="text-white/35 text-xs">Chant 108 times daily for best results.</p>
          </div>

          {/* Ideal For */}
          <div className="glass rounded-2xl p-8 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-white">Ideal For</h2>
            <div className="flex flex-wrap gap-2">
              {yantra.idealFor.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full glass border border-aurora-500/20 text-aurora-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-3 border-t border-white/5">
              <p className="text-white/40 text-xs font-medium mb-1">Placement Details</p>
              <p className="text-white/60 text-sm">{yantra.placement}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
