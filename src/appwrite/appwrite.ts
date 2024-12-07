import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(process.env.ENDPOINT!)
    .setProject(process.env.PROJECT_ID!); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

