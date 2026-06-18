import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { AstrologySection } from "@/components/sections/AstrologySection";
import { VastuSection } from "@/components/sections/VastuSection";
import { AIGuideSection } from "@/components/sections/AIGuideSection";
import { YantraStoreSection } from "@/components/sections/YantraStoreSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <AstrologySection />
      <VastuSection />
      <AIGuideSection />
      <YantraStoreSection />
      <HowItWorksSection />
      <WaitlistSection />
    </>
  );
}
