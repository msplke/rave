import { type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter, createTRPCContext } from "@acme/api";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc/",
    router: appRouter,
    req: req,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };

// If you need to enable cors, you can do so like this:
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Enable cors
//   await cors(req, res);

//   // Let the tRPC handler do its magic
//   return createNextApiHandler({
//     router: appRouter,
//     createContext,
//   })(req, res);
// };

// export default handler;
