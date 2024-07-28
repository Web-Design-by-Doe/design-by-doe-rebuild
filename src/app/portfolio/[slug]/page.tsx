import { notFound } from "next/navigation";

import PageTitleCard from "@/components/PageTitle";
import PortfolioSection from "@/components/PortfolioSection";
import { portfolioPageData } from "@/data/portfolioPageData";
import { getSinglePortfolioItem } from "@/server/actions";
import Image from "next/image";
import Link from "next/link";

export default async function PortfolioItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = await getSinglePortfolioItem(params.slug);

  if (!portfolio) {
    return notFound();
  }

  return (
    <div className="relative">
      <div className="flex flex-col px-4 md:px-6 lg:px-8 z-30 items-center">
        <PageTitleCard title={portfolio.clientName} />
        <div className="max-w-[960px] flex flex-col gap-8">
          <PortfolioImages images={portfolio.clientImages} />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="font-medium text-[20px]">Services Provided</p>
              <Link
                href={portfolio.clientWebsite}
                className="cta-main flex bg-primary px-4 py-2 gap-1 text-smallest md:px-7 md:py-3 md:gap-2 group duration-300"
              >
                Visit Website
                <Image
                  src="/icons/openArrow.svg"
                  width={12}
                  height={12}
                  alt="External Link"
                  className="transform group-hover:rotate-45 group-hover:translate-x-1 duration-300"
                />
              </Link>
            </div>
            <div className="overflow-hidden">
              <ul className="flex w-full gap-6 overflow-scroll services-provided-ul">
                {portfolio.servicesProvided.map((service, index) => (
                  <ServiceProvidedWithIcon key={index} service={service} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-screen-lg w-full rounded-full h-[600px] blur-4xl bg-primary/30 -z-1`}
        style={{ backgroundColor: portfolio.clientColor }}
      />
    </div>
  );
}

export function ServiceProvidedWithIcon({ service }: { service: string }) {
  switch (service) {
    case "websiteDevelopment":
      return (
        <li className="flex min-w-fit items-center gap-4 ">
          <Image
            src="/icons/webdevelopment.svg"
            width={32}
            height={32}
            alt="Web Development"
          />
          <p>Website Development</p>
        </li>
      );
    case "websiteMaintenance":
      return (
        <li className="flex min-w-fit items-center gap-4 ">
          <Image
            src="/icons/webmaintenance.svg"
            width={32}
            height={32}
            alt="Website Maintenance"
          />
          <p>Website Maintenance</p>
        </li>
      );
    case "webHosting":
      return (
        <li className="flex min-w-fit items-center gap-4 ">
          <Image
            src="/icons/webhosting.svg"
            width={32}
            height={32}
            alt="Web Hosting"
          />
          <p>Web Hosting</p>
        </li>
      );
    case "websiteAnalytics":
      return (
        <li className="flex min-w-fit items-center gap-4 ">
          <Image
            src="/icons/webanalytics.svg"
            width={32}
            height={32}
            alt="Website Analytics"
          />
          <p>Website Analytics</p>
        </li>
      );

    case "uiUxDesign":
      return (
        <li className="flex min-w-fit items-center gap-4 ">
          <Image
            src="/icons/webdesign.svg"
            width={32}
            height={32}
            alt="UI/UX Design"
          />
          <p>UI/UX Design</p>
        </li>
      );
    case "seoOptimisation":
      return (
        <li className="flex min-w-fit items-center gap-4 ">
          <Image
            src="/icons/weboptimisation.svg"
            width={32}
            height={32}
            alt="SEO Optimisation"
          />
          <p>SEO Optimisation</p>
        </li>
      );
  }
}

export function PortfolioImages({ images }: { images: any[] }) {
  return (
    <div className="max-h-[500px] flex flex-col md:flex-row gap-4">
      <div className="w-full rounded-md overflow-hidden">
        <Image
          src={images[0].url}
          width={images[0].width}
          height={images[0].height}
          alt={images[0].url}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-row md:flex-col gap-4 md:w-1/3">
        <div className="w-full h-full rounded-md overflow-hidden">
          <Image
            src={images[1].url}
            width={images[1].width}
            height={images[1].height}
            alt={images[1].url}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full rounded-md overflow-hidden">
          <Image
            src={images[2].url}
            width={images[2].width}
            height={images[2].height}
            alt={images[2].url}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
