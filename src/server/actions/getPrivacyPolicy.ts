"use server";

import { revalidatePath } from "next/cache";

import client from "@/utils/apolloClient";
import { GET_PRIVACY_POLICY } from "@/utils/gqlCmsQueries";

export default async function getPrivacyPolicy() {
  try {
    const { data } = await client.query({
      query: GET_PRIVACY_POLICY,
      fetchPolicy: "no-cache",
    });

    revalidatePath("/privacy-policy");
    return data.privacyPolicies[0].policy;
  } catch (error) {
    console.error(error);
  }
}
