import { createAuthClient } from "better-auth/react";

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? "";

// create ONLY ONCE
export const authClient = createAuthClient({
  baseURL,
});

// destructure from SAME instance
export const { signIn, signUp, useSession } = authClient;