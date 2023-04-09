import { communityRouter, eventRouter } from "./router";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  community: communityRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
