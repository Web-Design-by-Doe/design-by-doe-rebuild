import Image from "next/image";

import SectionContainer from "./SectionContainer";
import { homePageData } from "@/data/homePageData";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  return (
    <SectionContainer
      className="items-center gap-10 md:gap-20 md:pb-44"
      title={homePageData.processSection.title}
      description={homePageData.processSection.description}
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-8">
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-[1170px] lg:grid-cols-4">
          {homePageData.processSection.steps.map(
            ({ title, description, icon }, index) => {
              const lastItem =
                index !== homePageData.processSection.steps.length - 1;
              return (
                <ProcessStep
                  key={index}
                  title={title}
                  description={description}
                  icon={icon}
                  index={lastItem}
                />
              );
            }
          )}
        </ul>
      </div>
    </SectionContainer>
  );
}
