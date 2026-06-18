"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { YANTRAS, YANTRA_CATEGORIES, type YantraCategory } from "@/lib/yantras";
import { YantraCard } from "./YantraCard";

export function YantraCatalog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<YantraCategory | "all">("all");
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc" | "rating">(
    "popular"
  );

  const filtered = useMemo(() => {
    let list = [...YANTRAS];
    if (activeCategory !== "all") list = list.filter((y) => y.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (y) =>
          y.name.toLowerCase().includes(q) ||
          y.purpose.toLowerCase().includes(q) ||
          y.shortDesc.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return list;
  }, [query, activeCategory, sortBy]);

  return (
    <div className="space-y-8">
      {/* Search + Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            size={15}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
          />
          <input
            type="text"
            placeholder="Search Yantras by name, purpose..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 focus:border-aurora-500/40 text-white placeholder-white/25 rounded-xl pl-10 pr-10 py-3 text-sm outline-none transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 glass rounded-xl px-4 py-3 border border-white/10">
          <SlidersHorizontal size={14} className="text-white/40" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-transparent text-white/60 text-sm outline-none cursor-pointer"
          >
            <option value="popular" className="bg-cosmic-900">Most Popular</option>
            <option value="rating" className="bg-cosmic-900">Highest Rated</option>
            <option value="price-asc" className="bg-cosmic-900">Price: Low to High</option>
            <option value="price-desc" className="bg-cosmic-900">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
            activeCategory === "all"
              ? "border-aurora-500/50 bg-aurora-500/20 text-aurora-300"
              : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
          }`}
        >
          All Yantras
        </button>
        {YANTRA_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === cat.id
                ? "border-aurora-500/50 bg-aurora-500/20 text-aurora-300"
                : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
            }`}
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-white/35 text-sm">
        {filtered.length} {filtered.length === 1 ? "Yantra" : "Yantras"} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((y) => (
            <YantraCard key={y.id} yantra={y} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">✦</p>
          <p className="text-white/40 text-lg">No Yantras found for your search.</p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCategory("all");
            }}
            className="mt-4 text-aurora-400 text-sm hover:text-aurora-300 underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
