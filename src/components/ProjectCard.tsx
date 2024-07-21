import Image from "next/image";
import Link from "next/link";

import { PortfolioDataItem } from "@/lib/types";

export default function ProjectCard({
  project,
  index,
}: {
  project: PortfolioDataItem;
  index: number;
}) {
  const padding = index % 2 === 0 ? "md:pr-2" : "md:pl-2";
  return (
    <Link
      className={`max-h-[375px] overflow-hidden md:basis-1/2 md:max-w-1/2 z-20 project-card p-0 pb-4   ${padding}`}
      href={`/portfolio/${project.slug}`}
    >
      <figure className="relative w-full h-full overflow-hidden rounded-lg border-primary/15 border-2">
        <Image
          src={
            "https://www.free-mockup.com/wp-content/uploads/edd/2024/01/Laptop-Website-Mockup-Free-PSD.jpg"
          }
          width={project.mockupImage.width}
          height={project.mockupImage.height}
          alt={project.clientDescription}
          className="w-full h-full object-cover opacity-30 md:opacity-70 duration-300"
        />
        <figcaption className="absolute pb-4 bottom-0 flex items-center gap-2 h-[40%]">
          <div className="p-4 flex flex-col gap-1 duration-300 md:max-w-[66%]">
            <h2 className="text-[26px] font-semibold duration-300">
              {project.clientName}
            </h2>
            <div className="hidden md:block">
              <p className="line-clamp-1 text-[16px] duration-300">
                {project.clientDescription}
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}
