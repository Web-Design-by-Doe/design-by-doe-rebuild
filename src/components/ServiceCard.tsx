import Image from "next/image";

import { ServiceCardProps } from "@/lib/types";

export default function ServiceCard({
  icon,
  title,
  description,
  cta,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-7 px-6 py-6 items-start justify-center w-full md:max-w-[314px] md:py-0 md:aspect-square bg-secondary-dark rounded-lg overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Image src={icon} alt={title} className="" />
          <div className="w-[60px] h-[60px] absolute top-0 left-0 bg-primary rounded-full blur-3xl" />
        </div>
        <h3>{title}</h3>
        <p className="text-[16px]">{description}</p>
      </div>
      <button className="cta-secondary">{cta}</button>
    </div>
  );
}
