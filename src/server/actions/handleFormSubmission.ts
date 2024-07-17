"use server";

import { ID, Databases } from "appwrite";

import validationSchema from "@/utils/validationSchema";
import appwrite from "@/utils/appwriteConfig";

export default async function handleFormSubmission(
  state: any,
  formData: FormData
) {
  const { client, DATABASE_ID, COLLECTION_ID } = appwrite();
  const database = new Databases(client);

  const formItems = Object.fromEntries(formData.entries());

  try {
    const validation = validationSchema.safeParse({
      first_name: formItems.first_name,
      last_name: formItems.last_name,
      email: formItems.email,
      sms_number: formItems.sms_number,
      message: formItems.message,
    });

    if (validation.error) {
      throw { error: validation.error.format() };
    }

    await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
      first_name: formItems.first_name,
      last_name: formItems.last_name,
      email: formItems.email,
      sms_number: formItems.sms_number,
      message: formItems.message,
    });
  } catch (error) {
    console.error(error);
  }
}
