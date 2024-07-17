"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_PORTFOLIO_ITEM } from "@/utils/gqlCmsQueries";

export default async function getSinglePortfolioItem(slug: string) {
  try {
    const { data } = await client.query({
      query: GET_PORTFOLIO_ITEM,
    });
    revalidatePath(`/portfolio/${slug}`);
    return data.portfolioData;
  } catch (error) {
    console.error(error);
  }
}
