"use server";

import { Databases, ID } from "appwrite";
import { client } from "@/appwrite/appwrite";

const databases = new Databases(client);

export const subscribe = async (email: string) => {
  console.log(email);

  try {
    const res = await databases.createDocument(
      process.env.DATABASE_ID!,
      process.env.COLLECTION_ID!,
      ID.unique(),
      { email: email },
    );
    return res;
  } catch (err) {
    return err;
  }
};
