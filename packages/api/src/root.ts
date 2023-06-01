import { edgeRouter } from "./edge";
import { lambdaRouter } from "./lambda";
import { mergeRouters } from "./trpc";

// Used to provide good DX with a single client
// Then a custom link is used to generate the correct URL for the request
const appRouter = mergeRouters(edgeRouter, lambdaRouter);

// Export type definition of API
export type AppRouter = typeof appRouter;
