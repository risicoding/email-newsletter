"use server";

import { Databases, ID, Query } from "appwrite";
import { client } from "@/appwrite/appwrite";

const databases = new Databases(client);

export const subscribe = async (email: string) => {
  console.log(email);

  try {
    const isExisting = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.COLLECTION_ID!,
      [Query.equal("email", email)],
    );

    if (isExisting.total >= 1) {
      return { error: "Email already in list" };
    }

    const res = await databases.createDocument(
      process.env.DATABASE_ID!,
      process.env.COLLECTION_ID!,
      ID.unique(),
      { email: email },
    );
    return { message: "Successfully subscribed", res };
  } catch (err) {
    throw err;
  }
};
