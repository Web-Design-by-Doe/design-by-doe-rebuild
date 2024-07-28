import { HeroSection, AboutSection, ServicesSection } from "@/components";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaBanner";
import PricingSection from "@/components/PricingSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import BluredBlob from "@/components/BluredBlob";

export default function Home() {
  return (
    <div className="flex flex-col px-4 md:px-6 lg:px-8">
      <HeroSection />
      <div className="flex flex-col duration-300 z-30">
        {/* <AboutSection /> */}
        <ServicesSection />
        {/* <PricingSection /> */}
        <ProcessSection />
        <RecentProjectsSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </div>
      {/* <BluredBlob /> */}
    </div>
  );
}
