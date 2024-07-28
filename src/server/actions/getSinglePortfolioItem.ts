"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_PORTFOLIO_ITEM } from "@/utils/gqlCmsQueries";

export default async function getSinglePortfolioItem(slug: string) {
  const portfolioItem = {
    __typename: "PortfolioItem",
    clientName: "Gary Troia",
    clientColor: "rgba(198, 169, 101 ,0.4)",
    clientReviewAuthor: "Gary Troia",
    clientReviewBody:
      "I recently used the services of Web Design by Doe for the creation of my new website. Overall, my experience was excellent... I recommend Web Design by Doe to anyone seeking web design services. I am impressed with the results achieved, and look forward to continuing my collaboration with them in the future!",
    clientReviewRating: 5,
    clientWebsite: "https://garytroia.com",
    serviceDescription:
      "Gary required a full website rebuild as his old one was dated. We created Gary a fully bespoke website so that he can showcase his books and post blogs to his followers.",
    servicesProvided: [
      "websiteDevelopment",
      "websiteMaintenance",
      "websiteAnalytics",
      "seoOptimisation",
    ],
    clientImages: [
      {
        __typename: "Asset",
        height: 1060,
        width: 1500,
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
      },
      {
        __typename: "Asset",
        height: 1060,
        width: 1500,
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
      },
      {
        __typename: "Asset",
        height: 1060,
        width: 1500,
        url: "https://media.graphassets.com/iMLBEOeUT2Wh0bleZWPM",
      },
    ],
    slug: "gary-troia",
  };

  return portfolioItem;
  // try {
  //   const { data } = await client.query({
  //     query: GET_PORTFOLIO_ITEM,
  //     variables: { slug: slug },
  //   });
  //   console.log(data.portfolioItem.clientImages);
  //   revalidatePath(`/portfolio/${slug}`);
  //   return data.portfolioItem;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
}
