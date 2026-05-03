import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("auth-db2");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  // Google OAuth — add GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET to .env.local
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  database: mongodbAdapter(db, { client }),
});