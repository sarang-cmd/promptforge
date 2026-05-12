import { promptRouter } from "./routers/prompt";
import { versionRouter } from "./routers/version";
import { commentRouter } from "./routers/comment";
import { executionRouter } from "./routers/execution";
import { publicRouter } from "./routers/public";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  prompt: promptRouter,
  version: versionRouter,
  comment: commentRouter,
  execution: executionRouter,
  public: publicRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
