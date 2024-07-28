import ProjectCard from "@/components/ProjectCard";
import { PortfolioItem } from "@/lib/types";

export default function PortfoliosContainer({
  portfolios,
}: {
  portfolios: PortfolioItem[];
}) {
  return (
    <div className="max-w-[1170px] grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {portfolios.map(
        (
          {
            slug,
            clientName,
            servicesProvided,
            clientThumbnail,
          }: PortfolioItem,
          index
        ) => (
          <ProjectCard
            key={slug}
            slug={slug}
            clientName={clientName}
            clientThumbnail={clientThumbnail}
            servicesProvided={servicesProvided}
          />
        )
      )}
    </div>
  );
}
