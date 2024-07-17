import { Client } from "appwrite";

const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;

const appwrite = () => {
  const client = new Client();
  const DATABASE_ID = endPoint;
  const COLLECTION_ID = project;

  client.setEndpoint(endPoint).setProject(project);

  return {
    client,
    DATABASE_ID,
    COLLECTION_ID,
  };
};

export default appwrite;
