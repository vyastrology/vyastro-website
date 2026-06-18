import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedYantras } from "@/lib/yantras";
import { YantraCard } from "./YantraCard";

export function FeaturedYantras() {
  const featured = getFeaturedYantras();

  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-2">
            Featured Yantras
          </h2>
          <p className="text-white/45 text-sm">
            Handpicked by our Vedic experts for maximum impact
          </p>
        </div>
        <Link
          href="#catalog"
          className="hidden sm:flex items-center gap-1.5 text-aurora-400 text-sm hover:text-aurora-300 transition-colors"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((y) => (
          <YantraCard key={y.id} yantra={y} />
        ))}
      </div>
    </section>
  );
}
