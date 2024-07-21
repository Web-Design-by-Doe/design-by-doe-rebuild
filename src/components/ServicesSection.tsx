import { servicesCardData } from "@/data/servicesCardData";
import { homePageData } from "@/data/homePageData";
import ServiceCard from "./ServiceCard";
import { ServiceCardProps } from "@/lib/types";
import SectionContainer from "./SectionContainer";

export default function ServicesSection() {
  return (
    <SectionContainer
      className="items-center gap-10 md:gap-20"
      title={homePageData.serviceSection.title}
      description={homePageData.serviceSection.description}
    >
      <div className="flex flex-wrap max-w-[990px] justify-center items-center w-full gap-6">
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
    </SectionContainer>
  );
}
