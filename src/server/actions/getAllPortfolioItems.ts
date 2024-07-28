"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_PORTFOLIOS } from "@/utils/gqlCmsQueries";

export default async function getAllPortfolioItems() {
  return [
    {
      __typename: "PortfolioItem",
      id: "clz2shto934by06l1umw8phwa",
      clientName: "Gary Troia",
      slug: "gary-troia",
      servicesProvided: [
        "websiteDevelopment",
        "websiteMaintenance",
        "websiteAnalytics",
        "seoOptimisation",
      ],
      clientThumbnail: {
        __typename: "Asset",
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
        width: 1500,
        height: 1060,
      },
    },
    {
      __typename: "PortfolioItem",
      id: "clz2shto934by06l1umw8phwa",
      clientName: "Gary Troia",
      slug: "gary-troia",
      servicesProvided: [
        "websiteDevelopment",
        "websiteMaintenance",
        "websiteAnalytics",
        "seoOptimisation",
      ],
      clientThumbnail: {
        __typename: "Asset",
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
        width: 1500,
        height: 1060,
      },
    },
    {
      __typename: "PortfolioItem",
      id: "clz2shto934by06l1umw8phwa",
      clientName: "Gary Troia",
      slug: "gary-troia",
      servicesProvided: [
        "websiteDevelopment",
        "websiteMaintenance",
        "websiteAnalytics",
        "seoOptimisation",
      ],
      clientThumbnail: {
        __typename: "Asset",
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
        width: 1500,
        height: 1060,
      },
    },
    {
      __typename: "PortfolioItem",
      id: "clz2shto934by06l1umw8phwa",
      clientName: "Gary Troia",
      slug: "gary-troia",
      servicesProvided: [
        "websiteDevelopment",
        "websiteMaintenance",
        "websiteAnalytics",
        "seoOptimisation",
      ],
      clientThumbnail: {
        __typename: "Asset",
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
        width: 1500,
        height: 1060,
      },
    },
    {
      __typename: "PortfolioItem",
      id: "clz2shto934by06l1umw8phwa",
      clientName: "Gary Troia",
      slug: "gary-troia",
      servicesProvided: [
        "websiteDevelopment",
        "websiteMaintenance",
        "websiteAnalytics",
        "seoOptimisation",
      ],
      clientThumbnail: {
        __typename: "Asset",
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
        width: 1500,
        height: 1060,
      },
    },
    {
      __typename: "PortfolioItem",
      id: "clz2shto934by06l1umw8phwa",
      clientName: "Gary Troia",
      slug: "gary-troia",
      servicesProvided: [
        "websiteDevelopment",
        "websiteMaintenance",
        "websiteAnalytics",
        "seoOptimisation",
      ],
      clientThumbnail: {
        __typename: "Asset",
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
        width: 1500,
        height: 1060,
      },
    },
  ];
  // try {
  //   const { data, error } = await client.query({
  //     query: GET_PORTFOLIOS,
  //   });
  //   revalidatePath(`/portfolio`);
  //   return data.portfolioItems;
  // } catch (error) {
  //   console.error(error);
  // }
}
