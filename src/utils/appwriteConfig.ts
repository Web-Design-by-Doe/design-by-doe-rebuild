import { Client } from "appwrite";

const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

const appwrite = () => {
  const client = new Client();
  const DATABASE_ID = databaseId;
  const COLLECTION_ID = collectionId;

  client.setEndpoint(endPoint).setProject(project);

  return {
    client,
    DATABASE_ID,
    COLLECTION_ID,
  };
};

export default appwrite;
