import { MongoClient } from "mongodb";

import { MONGODB_URI, DATABASE_NAME } from "./config";

let connectedClient;

//CREATE FUNCTION TO CONNECT CACHED AND TO STOP-
export const connectClient = async () => {
   if (connectedClient) {
      return connectedClient.db(DATABASE_NAME)
   }
   //PREPARED CLIENT BUT NOT YET CONNECTED
   const client = new MongoClient(MONGODB_URI);
   await client.connect();
   await client.db(DATABASE_NAME).command({ ping: 1 });
   console.info("Connected to MongoDB");

   connectedClient = client;
   return connectedClient.db(DATABASE_NAME)
};

export const stopClient = async () => {
   await connectedClient?.close();
};

