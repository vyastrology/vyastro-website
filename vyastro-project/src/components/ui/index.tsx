"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 glass-purple text-aurora-300 text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider">
      <span className="w-1 h-1 rounded-full bg-aurora-400 animate-pulse" />
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl",
        className
      )}
    >
      {children}
    </p>
  );
}

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl p-6",
        hover && "hover:border-aurora-500/30 hover:bg-white/[0.06] transition-all duration-300 group",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/30" />
      <span className="text-gold-400 text-xs">✦</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/30" />
    </div>
  );
}

export function AuroraOrb({
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
  color = "purple",
}: {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  color?: "purple" | "gold" | "blue";
}) {
  const colors = {
    purple: "147,51,234",
    gold: "251,191,36",
    blue: "99,102,241",
  };
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, rgba(${colors[color]},${opacity}) 0%, transparent 70%)`,
      }}
    />
  );
}

export function StarField() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: Math.random() * 2 + 0.5 + "px",
            height: Math.random() * 2 + 0.5 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 4 + "s",
            animationDuration: Math.random() * 3 + 3 + "s",
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
    </div>
  );
}
