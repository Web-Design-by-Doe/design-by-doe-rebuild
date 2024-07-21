import Image from "next/image";
import PricingCardButton from "./PricingCardButton";

import { PricingCardProps } from "@/lib/types";

export default function PricingCard({
  title,
  description,
  cta,
  features,
  icon,
}: PricingCardProps) {
  return (
    <div className="flex flex-col w-full items-center gap-4 bg-secondary-dark rounded-lg md:max-w-[350px] px-6">
      <div className="flex flex-col items-center gap-2">
        <Image src={icon} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        {features.map((feature) => (
          <p key={feature}>{feature}</p>
        ))}
      </div>
      <PricingCardButton cta={cta} />
    </div>
  );
}
