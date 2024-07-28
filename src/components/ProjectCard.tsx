import Image from "next/image";
import Link from "next/link";

import { PortfolioItem } from "@/lib/types";

export default function ProjectCard({
  slug,
  clientName,
  servicesProvided,
  clientThumbnail: { url, width, height },
}: PortfolioItem) {
  const parsedServicesProvided = servicesProvided.map((service) => {
    const parsedService = service.replace(/([A-Z])/g, " $1").toLowerCase();
    return parsedService.charAt(0).toUpperCase() + parsedService.slice(1);
  });

  const numberOfServicesLeft = servicesProvided.length - 2;
  return (
    <Link href={`portfolio/${slug}`} className="project-card">
      <div className="flex flex-col gap-2 h-[420px]">
        <div className="h-full overflow-hidden">
          <Image
            src={url}
            width={width}
            height={height}
            alt={clientName}
            className="rounded-lg object-cover h-full w-full opacity-80"
          />
        </div>
        <div>
          <h3 className="font-medium">{clientName}</h3>

          <p className="text-text/50 font-light text-smallest line-clamp-1">
            {parsedServicesProvided.join(" & ")}
          </p>
        </div>
      </div>
    </Link>
  );
}
