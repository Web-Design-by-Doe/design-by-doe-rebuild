import Link from "next/link";

import Image from "next/image";
import { getRecentPortfolioItems } from "@/server/actions";

import SectionContainer from "./SectionContainer";
import ProjectCard from "./ProjectCard";
import { homePageData } from "@/data/homePageData";
import { PortfolioItem } from "@/lib/types";
import BluredBlob from "./BluredBlob";
import PortfolioSection from "./PortfolioSection";
import PortfoliosContainer from "./PortfoliosContainer";

export default async function RecentProjectsSection() {
  const recentProjects = await getRecentPortfolioItems();

  return (
    <>
      {recentProjects && (
        <SectionContainer
          className="items-center pb-[140px] gap-10 md:gap-20 bg-secondary/30 border-t border-b border-secondary rounded-xl px-4 relative overflow-hidden"
          title={homePageData.recentProjectsSection.title}
          description={homePageData.recentProjectsSection.description}
        >
          <div className="z-30">
            <PortfoliosContainer portfolios={recentProjects} />
            <Link
              href="/portfolio"
              className="w-full flex gap-2 justify-center text-primary px-4"
            >
              View all{" "}
              <Image src="/icons/openArrow.svg" alt="" width={10} height={10} />
            </Link>
          </div>
          <BluredBlob />
        </SectionContainer>
      )}
    </>
  );
}
