"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_PORTFOLIOS } from "@/utils/gqlCmsQueries";

export default async function getAllPortfolioItems() {
  try {
    const { data } = await client.query({
      query: GET_PORTFOLIOS,
    });
    revalidatePath(`/portfolio`);
    return data.portfolioDataItems;
  } catch (error) {
    console.error(error);
  }
}
