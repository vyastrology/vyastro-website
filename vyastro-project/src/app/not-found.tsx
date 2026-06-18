import Link from "next/link";
import { AuroraOrb, StarField } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="bg-cosmic-950 min-h-screen flex items-center justify-center relative overflow-hidden">
      <StarField />
      <AuroraOrb size={500} top="50%" left="50%" opacity={0.12} color="purple" />
      <div className="relative z-10 text-center px-4 space-y-6">
        <p className="text-9xl font-display text-gradient-aurora opacity-30">404</p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white">
          Lost in the Cosmos
        </h1>
        <p className="text-white/45 max-w-md mx-auto">
          The page you&apos;re seeking hasn&apos;t manifested in this dimension yet. Let the stars guide you back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-aurora-600 to-aurora-500 text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
          <Link
            href="/yantra-store"
            className="inline-flex items-center gap-2 glass border border-white/10 text-white/80 font-medium px-7 py-3.5 rounded-full hover:border-white/20 transition-colors"
          >
            Browse Yantras
          </Link>
        </div>
      </div>
    </div>
  );
}
