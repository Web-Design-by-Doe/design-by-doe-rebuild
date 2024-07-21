"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_RECENT_PORTFOLIOS } from "@/utils/gqlCmsQueries";
import { PortfolioDataItemsResponse } from "@/lib/types";

export default async function getRecentPortfolioItems() {
  try {
    // const { data } = await client.query<PortfolioDataItemsResponse>({
    //   query: GET_RECENT_PORTFOLIOS,
    // });
    const data = {
      portfolioDataItems: [
        {
          __typename: "PortfolioData",
          clientDescription:
            "Gary is a best selling, Hampshire based author, renowned for his dark english humour.",
          clientName: "Gary Troia - Best Selling Author",
          clientWebsite: "www.garytroia.com",
          slug: "gary-troia",
          mockupImage: {
            __typename: "Asset",
            url: "https://media.graphassets.com/HF8yfTHjSui23DsysRTT",
            height: 1547,
            width: 2463,
          },
        },
        {
          __typename: "PortfolioData",
          clientDescription:
            "Gary is a best selling, Hampshire based author, renowned for his dark english humour.",
          clientName: "Gary Troia - Best Selling Author",
          clientWebsite: "www.garytroia.com",
          slug: "gary-troia",
          mockupImage: {
            __typename: "Asset",
            url: "https://media.graphassets.com/HF8yfTHjSui23DsysRTT",
            height: 1547,
            width: 2463,
          },
        },
        {
          __typename: "PortfolioData",
          clientDescription:
            "Gary is a best selling, Hampshire based author, renowned for his dark english humour.",
          clientName: "Gary Troia - Best Selling Author",
          clientWebsite: "www.garytroia.com",
          slug: "gary-troia",
          mockupImage: {
            __typename: "Asset",
            url: "https://media.graphassets.com/HF8yfTHjSui23DsysRTT",
            height: 1547,
            width: 2463,
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
