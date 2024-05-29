import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@clerk/nextjs/server";

import { createCaller, createTRPCContext } from "@acme/api";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
    session: { userId: auth().userId },
  });
});

export const api = createCaller(createContext);
