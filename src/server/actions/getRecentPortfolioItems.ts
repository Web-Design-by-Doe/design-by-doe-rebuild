"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_RECENT_PORTFOLIOS } from "@/utils/gqlCmsQueries";
import { PortfolioItemsResponse } from "@/lib/types";

export default async function getRecentPortfolioItems() {
  try {
    // const { data } = await client.query<PortfolioDataItemsResponse>({
    //   query: GET_RECENT_PORTFOLIOS,
    // });
    const data = {
      portfolioDataItems: [
        {
          clientName: "Gary Troia",
          slug: "gary-troia",
          servicesProvided: [
            "websiteDevelopment",

            "websiteAnalytics",
            "seoOptimisation",
          ],
          clientThumbnail: {
            url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
            width: 1500,
            height: 1060,
          },
        },
        {
          clientName: "EG Cosmetics",
          slug: "gary-troia",
          servicesProvided: ["websiteMaintenance", "websiteAnalytics"],
          clientThumbnail: {
            url: "https://media.graphassets.com/bTpazybSAD9Wq6xew39w",
            width: 1500,
            height: 1060,
          },
        },
        {
          clientName: "Tops Aerospace",
          slug: "gary-troia",
          servicesProvided: [
            "websiteMaintenance",
            "websiteDevelopment",
            "seoOptimisation",
          ],
          clientThumbnail: {
            url: "https://media.graphassets.com/MI2oNWrkSVyFsMCU9JAI",
            width: 1500,
            height: 1060,
          },
        },
      ],
    };

    revalidatePath(`/`);
    return data.portfolioDataItems;
  } catch (error) {
    console.error(error);
  }
}
