import { communityRouter } from "./router/community";
import { eventRouter } from "./router/event";
import { createTRPCRouter } from "./trpc";

// Deployed to /trpc/edge/**
export const edgeRouter = createTRPCRouter({
  community: communityRouter,
  event: eventRouter,
});
