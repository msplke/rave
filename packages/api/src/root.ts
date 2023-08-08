import { communityRouter } from "./router/community";
import { eventRouter } from "./router/event";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  community: communityRouter,
  event: eventRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
