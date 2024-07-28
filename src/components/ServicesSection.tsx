import { servicesCardData } from "@/data/servicesCardData";
import { homePageData } from "@/data/homePageData";
import ServiceCard from "./ServiceCard";
import { ServiceCardProps } from "@/lib/types";
import SectionContainer from "./SectionContainer";
import BluredBlob from "./BluredBlob";

export default function ServicesSection({
  showTitleSection = true,
  showBackground = true,
}: {
  showTitleSection?: boolean;
  showBackground?: boolean;
}) {
  return (
    <SectionContainer
      className={`items-center gap-10 md:gap-20 relative overflow-hidden ${
        showBackground
          ? "bg-secondary/30 border-t border-b border-secondary rounded-xl px-4"
          : ""
      }`}
      title={showTitleSection ? homePageData.serviceSection.title : undefined}
      description={
        showTitleSection ? homePageData.serviceSection.description : undefined
      }
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1170px] z-20">
        {servicesCardData.map((service: ServiceCardProps) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            cta={service.cta}
          />
        ))}
      </div>
      {showBackground && <BluredBlob />}
    </SectionContainer>
  );
}
