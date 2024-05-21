import { Client , Databases , Account } from "appwrite";



export const client = new Client();



client.setEndpoint("https://cloud.appwrite.io/v1").setProject("664b5cc1000cab79b6b6");


export const account = new Account(client);
// export const database = new Databases(client, "66308631002f024f4b1c");
export { ID } from 'appwrite';
