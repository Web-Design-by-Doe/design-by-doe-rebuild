import Link from "next/link";

import { ServicesSection } from "@/components";
import { Header } from "@/components/IpadScrollAnimation";
import { servicesPageData } from "@/data/servicesPageData";

export default function ServicesPage() {
  return (
    <>
    <Header         titleComponent={
          <>
            <div className="flex flex-col items-center gap-9 md:pt-40">
              <div className="flex flex-col items-center">
                <h1 className="text-[56px] lg:text-header font-semibold text-text duration-300">
                  {servicesPageData.heroSection.title}
                </h1>
                <p className="text-text text-base font-normal max-w-xl">
                  {servicesPageData.heroSection.subtitle}
                </p>
              </div>
            </div>
          </>
        }/>
        <div className="flex flex-col px-4">
        <ServicesSection showTitleSection={false} />
  

    </div>
    </>
  );
}
