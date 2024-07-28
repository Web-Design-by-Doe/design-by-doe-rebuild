import PageTitleCard from "@/components/PageTitle";
import PortfolioSection from "@/components/PortfolioSection";
import { portfolioPageData } from "@/data/portfolioPageData";
import { getAllPortfolioItems } from "@/server/actions";

export default async function PortfolioPage() {
  const portfolios = await getAllPortfolioItems();

  return (
    <div className="relative">
      <div className="flex flex-col px-4 md:px-6 lg:px-8 z-30">
        <PageTitleCard
          title={portfolioPageData.heroSection.title}
          subtitle={portfolioPageData.heroSection.subtitle}
        />
        <PortfolioSection showBackground={false} portfolios={portfolios} />
      </div>
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-screen-lg w-full rounded-full h-[600px] blur-4xl bg-primary/30 -z-1" />
    </div>
  );
}
