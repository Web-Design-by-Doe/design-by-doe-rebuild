import Image from "next/image";

import { ServiceCardProps } from "@/lib/types";

export default function ServiceCard({
  icon,
  title,
  description,
  cta,
}: ServiceCardProps) {
  return (
    <div className="bg-secondary-dark rounded-xl border border-secondary p-8 shadow-xl transition hover:shadow-primary/10 overflow-hidden service-card duration-500">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Image src={icon} alt={title} className="duration-500" />
        </div>
        <div className="flex flex-col gap-1">
          <h3>{title}</h3>
          <p className="text-[16px] text-text/70 font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}
