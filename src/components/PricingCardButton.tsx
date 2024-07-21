import { CtaProps } from "@/lib/types";
import Link from "next/link";

interface PricingCardButtonProps {
  cta: CtaProps;
}

export default function PricingCardCta({ cta }: PricingCardButtonProps) {
  const queryParam = cta.value ? `?value=${cta.value}` : "";
  return <Link href={`${cta.href}${queryParam}`}>{cta.text}</Link>;
}
