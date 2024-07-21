import Image from "next/image";

import { aboutCardData } from "@/data/aboutCardData";

export default function AboutCard() {
  return (
    <div className="flex h-[580px] flex-col-reverse md:flex-row gap-14 items-center justify-center">
      <div className="md:max-w-[490px] w-full">
        <Image
          {...aboutCardData.image}
          alt={aboutCardData.image.alt}
          className="rounded-2xl object-cover h-full"
          draggable={false}
        />
        <div className="h-full w-full" />
      </div>
      <div className="w-full flex flex-col gap-6 md:max-w-[470px]">
        <div className="flex flex-col gap-3">
          <h2>{aboutCardData.title}</h2>
          <p className="text-base">{aboutCardData.content.description}</p>
        </div>
        <blockquote className="flex flex-col gap-4 text-smallest">
          <p className="text-text/50 font-light">
            {aboutCardData.content.quote.text}
          </p>
          <cite className="flex items-center gap-2 ">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={aboutCardData.content.quote.image}
                alt={aboutCardData.content.quote.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {aboutCardData.content.quote.author},{" - "}
            {aboutCardData.content.quote.position}
          </cite>
        </blockquote>
      </div>
    </div>
  );
}
