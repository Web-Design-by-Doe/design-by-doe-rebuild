import Link from "next/link";

import SectionContainer from "./SectionContainer";

import { ctaCardData } from "@/data/ctaCardData";

export default function CtaSection() {
  return (
    <SectionContainer className="max-w-[1170px]">
      <div className="bg-text flex flex-col lg:flex-row items-center justify-between text-center lg:text-start rounded-lg p-6 sm:p-14 gap-10 duration-300">
        <CtaTitle ctaCardData={ctaCardData} />
        <div className="flex items-center md:w-1/3 md-lg:justify-center">
          <Link
            href={ctaCardData.cta.href}
            className="cta-main bg-gradient-to-tr from-primary via-[#7B16DF] to-[#42275C] text-[20px] lg:text-[24px] font-medium py-4 px-12 text-nowrap"
          >
            {ctaCardData.cta.text}
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}

function CtaTitle({
  ctaCardData,
}: {
  ctaCardData: { subtitle: string; title: string; description: string };
}) {
  return (
    <div className="flex flex-col flex-nowrap">
      <h2 className="text-smallest bg-gradient-to-r from-0% from-primary to-background to-20% text-transparent bg-clip-text">
        {ctaCardData.subtitle}
      </h2>
      <h3 className="text-[28px] sm:text-[36px] md:text-[48px] bg-gradient-to-r from-0% from-background to-primary to-90% text-transparent bg-clip-text leading-tight duration-300">
        {ctaCardData.title}
      </h3>
      <p className="text-[24px] sm:text-[32px] md:text-[40px] bg-gradient-to-r from-0% from-primary to-background to-70% text-transparent bg-clip-text leading-none duration-300">
        {ctaCardData.description}
      </p>
    </div>
  );
}
