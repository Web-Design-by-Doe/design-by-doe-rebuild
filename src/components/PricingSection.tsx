import SectionContainer from "./SectionContainer";
import { homePageData } from "@/data/homePageData";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <SectionContainer
      className="items-center gap-20"
      title={homePageData.pricingSection.title}
      description={homePageData.pricingSection.description}
    >
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {homePageData.pricingSection.pricingCards.map((pricingCard) => (
          <PricingCard
            key={pricingCard.title}
            title={pricingCard.title}
            description={pricingCard.description}
            cta={pricingCard.cta}
            features={pricingCard.features}
            icon={pricingCard.icon}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
