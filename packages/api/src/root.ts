import { communityRouter } from "./router/community";
import { eventRouter } from "./router/event";
import { createTRPCRouter } from "./trpc";

// Used to provide good DX with a single client
// Then a custom link is used to generate the correct URL for the request
// const appRouter = mergeRouters(edgeRouter, lambdaRouter);

export const appRouter = createTRPCRouter({
  community: communityRouter,
  event: eventRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
