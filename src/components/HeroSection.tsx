import Image from "next/image";

import HeroSectionContent from "./IpadScrollAnimation";
import { homePageData } from "@/data/homePageData";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col m-auto overflow-hidden items-center z-30 hero-section">
      <HeroSectionContent
        titleComponent={
          <>
            <div className="flex flex-col items-center gap-9">
              <div className="flex flex-col items-center">
                <h1 className="text-[56px] lg:text-header font-semibold text-text duration-300">
                  {homePageData.heroSection.title}
                </h1>
                <p className="text-text text-base font-normal max-w-xl">
                  {homePageData.heroSection.subtitle}
                </p>
              </div>
            </div>
          </>
        }
      >
        <Image
          {...homePageData.heroSection.image}
          alt={homePageData.heroSection.image.alt}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </HeroSectionContent>
    </section>
  );
}
