import Link from "next/link";

import Image from "next/image";
import { getRecentPortfolioItems } from "@/server/actions";

import SectionContainer from "./SectionContainer";
import ProjectCard from "./ProjectCard";
import { homePageData } from "@/data/homePageData";
import { PortfolioDataItem } from "@/lib/types";

export default async function RecentProjectsSection() {
  const recentProjects = await getRecentPortfolioItems();
  console.log(recentProjects);

  return (
    <>
      {recentProjects && (
        <SectionContainer
          className="items-center gap-10 md:gap-20"
          title={homePageData.recentProjectsSection.title}
          description={homePageData.recentProjectsSection.description}
        >
          <div className="flex flex-col w-full gap-2">
            <Link
              href="/portfolio"
              className="w-full flex gap-2 justify-end text-primary px-4"
            >
              View all{" "}
              <Image src="/icons/openArrow.svg" alt="" width={10} height={10} />
            </Link>
            <div className="relative project-cards-container">
              {recentProjects.map((project: PortfolioDataItem, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
              <div className="absolute top-0 left-0 z-10 w-full h-full rounded-full blur-[200px] opacity-20 bg-gradient-to-tr bg-primary to-[#7B16DF]" />
            </div>
          </div>
        </SectionContainer>
      )}
    </>
  );
}
