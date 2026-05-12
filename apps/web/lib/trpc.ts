import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { type AppRouter } from "@repo/api";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
