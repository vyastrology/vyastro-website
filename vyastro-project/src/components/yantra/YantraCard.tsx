"use client";

import Link from "next/link";
import { Star, Sparkles } from "lucide-react";
import type { Yantra } from "@/lib/yantras";

export function YantraCard({ yantra }: { yantra: Yantra }) {
  return (
    <Link href={`/yantra-store/${yantra.id}`} className="group block">
      <div
        className={`glass rounded-2xl overflow-hidden border border-white/8 hover:border-aurora-500/30 bg-gradient-to-b ${yantra.color} transition-all duration-300 hover:scale-[1.015] hover:shadow-xl`}
        style={{ boxShadow: `0 0 0 0 ${yantra.glowColor}` }}
      >
        {/* Yantra Visual */}
        <div className="relative aspect-square p-8 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
            style={{ background: `radial-gradient(circle, ${yantra.glowColor}, transparent 70%)` }}
          />
          {/* Sacred geometry placeholder */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border border-gold-400/20"
              style={{ transform: "rotate(0deg)" }}
            />
            <div
              className="absolute inset-3 rounded-full border border-aurora-400/20"
              style={{ transform: "rotate(45deg)" }}
            />
            <div
              className="absolute inset-6 rounded-full border border-gold-300/15"
              style={{ transform: "rotate(22.5deg)" }}
            />
            <span className="text-5xl opacity-70 text-gold-300 relative z-10">
              {yantra.symbol}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-5 pb-5 space-y-3">
          {yantra.badge && (
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/20">
              {yantra.badge}
            </span>
          )}
          {yantra.aiRecommended && !yantra.badge && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-aurora-500/15 text-aurora-300 border border-aurora-500/20">
              <Sparkles size={9} /> AI Recommended
            </span>
          )}

          <div>
            <p className="text-white/40 text-xs font-medium mb-0.5">{yantra.sanskritName}</p>
            <h3 className="font-display text-lg font-semibold text-white leading-tight">
              {yantra.name}
            </h3>
            <p className="text-aurora-400 text-xs font-medium mt-0.5">{yantra.purpose}</p>
          </div>

          <p className="text-white/45 text-xs leading-relaxed line-clamp-2">{yantra.shortDesc}</p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span className="text-gold-400 font-semibold text-base">
                ₹{yantra.price.toLocaleString()}
              </span>
              <span className="text-white/25 text-xs line-through">
                ₹{yantra.originalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < Math.floor(yantra.rating) ? "text-gold-400" : "text-white/20"}
                    fill={i < Math.floor(yantra.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-white/35 text-xs">({yantra.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
