import Image from "next/image";
import { headers } from "next/headers";

import { homePageData } from "@/data/homePageData";
import ContactDetailsTitle from "./ContactDetailsTitle";

export default function ContactDetails() {
  const pathName = headers().get("pathName");
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl md-lg:max-w-md">
      <ContactDetailsTitle title={homePageData.contactSection.title} />
      <div className="flex max-w-lg flex-col gap-8">
        <p className="font-light">{homePageData.contactSection.description}</p>
        <div className="flex flex-col gap-3.5">
          <h3>{homePageData.contactSection.waysToContact.title}</h3>
          <div className="flex flex-col font-light gap-3.5">
            {homePageData.contactSection.waysToContact.items.map(
              (item, index) => (
                <div className="flex gap-4" key={index}>
                  <Image {...item.icon} />
                  <p>{item.title}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3>{homePageData.contactSection.socialMedia.title}</h3>
          <div className="flex flex-row gap-4">
            {homePageData.contactSection.socialMedia.items.map(
              (item, index) => (
                <Image key={index} {...item.icon} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
