import { type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter, createTRPCContext } from "@acme/api";

export const runtime = "nodejs";

/**
 * Configure basic CORS headers
 * You should extend this to match your needs
 */
function setCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Request-Method", "*");
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.headers.set("Access-Control-Allow-Headers", "*");
}

export function OPTIONS() {
  const response = new Response(null, {
    status: 204,
  });
  setCorsHeaders(response);
  return response;
}

async function handler(req: NextRequest) {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req: req,
    createContext: () => createTRPCContext({ req }),
    onError: ({ error }) => {
      console.log("Error in tRPC handler");
      console.error(error);
    },
  });

  setCorsHeaders(response);
  return response;
}

// Export API handler
export { handler as GET, handler as POST };
