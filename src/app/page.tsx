import { HeroSection, AboutSection, ServicesSection } from "@/components";
import CtaSection from "@/components/CtaBanner";
import PricingSection from "@/components/PricingSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col px-4">
      <HeroSection />
      <div className="flex flex-col gap-20 md:gap-40 duration-300">
        {/* <AboutSection /> */}
        <ServicesSection />
        {/* <PricingSection /> */}
        <RecentProjectsSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </div>
  );
}
