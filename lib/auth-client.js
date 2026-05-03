import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

// Destructure from the SAME instance (your original code created two separate clients)
export const { signIn, signUp, signOut, useSession } = authClient;